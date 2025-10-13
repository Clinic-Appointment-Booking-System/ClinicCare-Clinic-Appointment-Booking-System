import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/patient/dashboard");
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center mt-[150px] overflow-hidden">
      <div className="w-full max-w-lg">
        {/* Logo and Welcome Section */}
        <div className="text-center mb-8">
          <img
            src="/clinicLogo.png"
            alt="ClinicCare Logo"
            className="mx-auto mb-4 h-[100px] w-auto"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600 text-2xl">
            Sign in to your{" "}
            <span className="text-[#145CFB] font-semibold">ClinicCare</span>
          </p>
        </div>

        {/* Login Form Container */}
        <div className="bg-blue-100 shadow-xl h-auto border border-[#9EC9FE] rounded-2xl p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-xl font-medium text-gray-700 mb-1 text-left">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter The Email Address"
                className="w-full px-4 py-3 border text-lg text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478DBC] focus:border-transparent transition-all duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-xl font-medium text-gray-700 mb-1 text-left">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter The Password"
                className="w-full px-4 text-lg py-3 border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478DBC] focus:border-transparent transition-all duration-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-[#478DBC] text-white text-xl  py-3 px-4 rounded-lg font-semibold hover:bg-[#3a7ca5] transition-colors duration-200"
            >
              Sign In
            </button>
          </form>

          {/* Create Account Link */}
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-xl">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-[#145CFB] text-xl font-semibold hover:text-[#3a7ca5] transition-colors duration-200"
              >
                Create Account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
