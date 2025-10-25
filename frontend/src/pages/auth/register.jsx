import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "PATIENT",
    phoneNumber: "",
    address: "",
    age: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/register",
        form,
        { withCredentials: true }
      );

      setSuccess(response.data.message || "Registration successful!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error("Registration failed:", err);
      if (err.response?.data?.error) setError(err.response.data.error);
      else setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <img
            src="/clinicLogo.png"
            alt="ClinicCare Logo"
            className="mx-auto mb-4 h-[90px]"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Create Your Account
          </h1>
          <p className="text-gray-600 text-lg">
            Join{" "}
            <Link
            to="/"
            className="text-[#145CFB] font-semibold hover:text-[#3a7ca5] hover:underline transition-colors duration-200"
          >
            ClinicCare
          </Link>&nbsp;
          to manage your health better
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Feedback messages */}
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-md text-center">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-100 text-green-700 p-3 rounded-md text-center">
              {success}
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478DBC] focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478DBC] focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478DBC] focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Role Selector */}
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-700 mb-1">
              I am a
            </label>
            <select
              name="role"
              value="PATIENT"
              disabled
              className="w-full px-4 py-3 border text-lg text-gray-700 border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed opacity-75"
              onChange={handleChange}
            >
              <option value="PATIENT">Patient</option>
              <option value="DOCTOR" disabled>Doctor</option>
            </select>
          </div>

          {/* Conditional Fields */}
          {form.role === "PATIENT" && (
            <>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478DBC] focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478DBC] focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  placeholder="Enter your age"
                  value={form.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478DBC] focus:border-transparent transition-all duration-200"
                />
              </div>
            </>
          )}

          {form.role === "DOCTOR" && (
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">
                Description (optional)
              </label>
              <textarea
                name="description"
                placeholder="Briefly describe your specialization"
                value={form.description}
                onChange={handleChange}
                className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478DBC] focus:border-transparent transition-all duration-200"
              />
            </div>
          )}

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
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6 border-t border-gray-200 pt-6">
          <p className="text-gray-600 text-lg">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-[#145CFB] font-semibold hover:text-[#3a7ca5] transition-colors duration-200"
            >
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
