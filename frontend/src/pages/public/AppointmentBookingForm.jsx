// src/pages/AppointmentBookingForm.jsx
import React, { useState } from "react";
import PatientHeader from "../../components/PatientHeader"; // ✅ Import new header

const AppointmentBookingForm = () => {
  const [formData, setFormData] = useState({
    specialization: "",
    doctor: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked successfully!");
  };

  const handleReset = () => {
    setFormData({
      specialization: "",
      doctor: "",
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      reason: "",
    });
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center p-6">
      {/* ✅ Use PatientHeader instead of local nav */}
      <PatientHeader />
      <main className="flex flex-col items-center justify-center w-full px-6 pt-[120px]"> 
      <div className="flex flex-col items-center w-full">

      {/* Add top padding to prevent content from hiding under fixed header */}
      <div className="pt-24 bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl mt-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Appointment Booking Form
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Row 1 */}
            <div>
              <label className="block text-gray-700 mb-2">
                Select Specialization
              </label>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select Specialization</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Neurology">Neurology</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Select Doctor</label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select Doctor</option>
                <option value="Dr. Smith">Dr. Smith</option>
                <option value="Dr. Johnson">Dr. Johnson</option>
                <option value="Dr. Lee">Dr. Lee</option>
              </select>
            </div>

            {/* Row 2 */}
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Row 3 */}
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Row 4 */}
            <div>
              <label className="block text-gray-700 mb-2">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Reason / Symptoms
              </label>
              <input
                type="text"
                name="reason"
                placeholder="Enter Reason / Symptoms"
                value={formData.reason}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-8 space-x-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Book Appointment Now
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      </div>
      </main>
    </div>
  );
};

export default AppointmentBookingForm;
