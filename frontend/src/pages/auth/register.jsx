import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "PATIENT",
  });
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form.name, form.email, form.password, form.role);
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center mt-[70px] overflow-hidden">
      <div className="w-full max-w-lg">
        {/* Logo and Welcome Section */}
        <div className="text-center mb-8">
          <img
            src="/clinicLogo.png"
            alt="ClinicCare Logo"
            className="mx-auto mb-4 h-[100px] w-auto"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Create Account
          </h1>
          <p className="text-gray-600 text-2xl">
            Join to{" "}
            <span className="text-[#145CFB] font-semibold">ClinicCare</span>
          </p>
        </div>

        {/* Register Form Container */}
        <div className="bg-blue-100 shadow-xl h-auto border border-[#9EC9FE] rounded-2xl p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="block text-xl font-medium text-gray-700 mb-1 text-left">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                className="w-full px-4 py-3 border text-lg text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478DBC] focus:border-transparent transition-all duration-200"
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-xl font-medium text-gray-700 mb-1 text-left">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter The Email Address"
                className="w-full px-4 py-3 border text-lg text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478DBC] focus:border-transparent transition-all duration-200"
                onChange={handleChange}
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
                name="password"
                placeholder="Enter The Password"
                className="w-full px-4 py-3 border text-lg text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478DBC] focus:border-transparent transition-all duration-200"
                onChange={handleChange}
                required
              />
            </div>

            {/* Role Selection */}
            <div className="space-y-2">
              <label className="block text-xl font-medium text-gray-700 mb-1 text-left">
                I am a
              </label>
              <select
                name="role"
                className="w-full px-4 py-3 border text-lg text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478DBC] focus:border-transparent transition-all duration-200"
                onChange={handleChange}
              >
                <option value="PATIENT">Patient</option>
                <option value="DOCTOR">Doctor</option>
              </select>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-[#478DBC] text-white text-xl py-3 px-4 rounded-lg font-semibold hover:bg-[#3a7ca5] transition-colors duration-200 mt-4"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-xl">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-[#145CFB] text-xl font-semibold hover:text-[#3a7ca5] transition-colors duration-200"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
