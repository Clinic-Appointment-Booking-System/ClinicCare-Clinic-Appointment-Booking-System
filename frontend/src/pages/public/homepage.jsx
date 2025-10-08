import React from "react";
import { Link } from "react-router-dom"; 

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Main Content */}
      <div className="flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Welcome to <span className="text-blue-600">ClinicCare</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Your comprehensive clinic appointment booking system. Book
              appointments, manage your health records, and connect with
              healthcare providers seamlessly.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/register"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started as Patient
            </Link>
            <Link
              to="/login"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-blue-600 text-3xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">
                Schedule appointments with your preferred doctors in just a few
                clicks
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-blue-600 text-3xl mb-4">👨‍⚕️</div>
              <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
              <p className="text-gray-600">
                Connect with qualified healthcare professionals across various
                specialties
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-blue-600 text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Digital Records</h3>
              <p className="text-gray-600">
                Access your medical history and appointment records anytime,
                anywhere
              </p>
            </div>
          </div>

          {/* Demo Accounts Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mt-12">
            <h3 className="text-2xl font-semibold mb-6">Demo Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <h4 className="font-medium text-lg mb-2">Patient Demo</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Email: patient@clinic.com<br />
                  Password: password123
                </p>
                <p className="text-xs text-gray-500">
                  Book appointments, view records, manage profile
                </p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h4 className="font-medium text-lg mb-2">Admin Demo</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Email: admin@clinic.com<br />
                  Password: password123
                </p>
                <p className="text-xs text-gray-500">
                  Manage doctors, appointments, and clinic operations
                </p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h4 className="font-medium text-lg mb-2">Doctor Demo</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Email: doctor@clinic.com<br />
                  Password: password123
                </p>
                <p className="text-xs text-gray-500">
                  View schedule, manage appointments, patient records
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* ... keep your existing footer code here exactly as before ... */}
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2024 ClinicCare. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                HIPAA Compliance
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
