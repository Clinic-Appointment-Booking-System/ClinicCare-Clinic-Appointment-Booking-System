import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        { email, password },
        { withCredentials: true } // ✅ send cookies for JWT
      );

      const { token, user } = response.data;

      // Inside handleSubmit() in login.jsx
      localStorage.setItem("token", token);
      localStorage.setItem("userRole", user.role);


      // ✅ Redirect based on user role
      if (user.role === "ADMIN") navigate("/admin");
      else if (user.role === "DOCTOR") navigate(`/doctor-profile/${user.id}`);
      else navigate("/patient/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      if (err.response?.data?.error) setError(err.response.data.error);
      else setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-10">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <img
            src="/clinicLogo.png"
            alt="ClinicCare Logo"
            className="mx-auto mb-4 h-[90px]"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600 text-lg">
            Sign in to your{" "}
            <Link
              to="/"
              className="text-[#145CFB] font-semibold hover:text-[#3a7ca5] hover:underline transition-colors duration-200"
            >
              ClinicCare
            </Link>
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-md text-center">
              {error}
            </div>
          )}

          {/* Email Field */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478DBC] focus:border-transparent transition-all duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478DBC] focus:border-transparent transition-all duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white text-xl transition-all duration-200 ${
              loading
                ? "bg-[#9EC9FE] cursor-not-allowed"
                : "bg-[#478DBC] hover:bg-[#3a7ca5]"
            }`}
          >
            {loading ? "Signing in..." : "Log In"}
          </button>
        </form>

        {/* Register Link */}
        <div className="text-center mt-6 border-t border-gray-200 pt-6">
          <p className="text-gray-600 text-lg">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-[#145CFB] font-semibold hover:text-[#3a7ca5] transition-colors duration-200"
            >
              Create Account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
