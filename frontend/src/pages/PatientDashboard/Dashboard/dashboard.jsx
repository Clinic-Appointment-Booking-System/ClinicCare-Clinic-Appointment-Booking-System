import React from "react";
import { FaEnvelope, FaBell, FaUserCircle } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#e6f0ff] p-6 font-[Poppins]">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-white shadow-sm rounded-lg px-8 py-4">
        <div className="flex gap-8 text-[16px] font-medium">
          <a href="#" className="text-blue-600">Dashboard</a>
          <a href="#" className="text-gray-800">Doctors</a>
          <a href="#" className="text-gray-800">Appointments</a>
        </div>
        <div className="flex items-center gap-5">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">Logout</button>
          <FaEnvelope className="text-[28px] text-gray-700" />
          <FaBell className="text-[28px] text-gray-700" />
          <FaUserCircle className="text-[28px] text-gray-700" />
        </div>
      </nav>

      {/* Header */}
      <h2 className="text-center text-2xl font-semibold mt-6 mb-3">Patient Dashboard</h2>
      <div className="bg-white text-center rounded-lg shadow-sm w-[85%] mx-auto py-4">
        <h3 className="text-lg">
          Welcome, <span className="text-blue-600 font-semibold">Clinic Care</span>
        </h3>
      </div>

      {/* Main Section */}
      <div className="mt-10 flex flex-col md:flex-row justify-between gap-8 w-[90%] mx-auto">
        {/* Profile Section */}
        <div className="w-full md:w-[48%]">
          <h3 className="text-blue-600 font-semibold text-left mb-2 ml-2">Profile</h3>
          <div className="bg-white rounded-2xl shadow-md flex items-start gap-6 p-6 min-h-[320px]">
            <img
              src="/profile1.jpg"
              alt="Profile"
              className="w-[160px] h-[160px] rounded-full object-cover mt-2"
            />
            <div className="flex flex-col justify-start text-left">
              <h4 className="text-xl font-semibold mb-1">Helen Voizhicki</h4>
              <p className="text-gray-600 text-sm mb-1">Role: Patient</p>
              <p className="text-gray-600 text-sm mb-1">Age: 34</p>
              <p className="text-gray-600 text-sm mb-1">Email: helenvoizhicki@gmail.com</p>
              <p className="text-gray-600 text-sm mb-1">Phone: +94 771234567</p>
              <p className="text-gray-600 text-sm mb-3">Address: 24, Silva Road, Kalutara</p>
              <button className="bg-blue-600 text-white text-xs px-4 py-1 rounded-md self-start hover:bg-blue-700">
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[50%] flex flex-col gap-6">
          {/* Booking History */}
          <div>
            <h3 className="text-blue-600 font-semibold text-left mb-2 ml-2">Booking History</h3>
            <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2 text-blue-600">Doctor</th>
                    <th className="p-2 text-blue-600">Date</th>
                    <th className="p-2 text-blue-600">Appointment No & Time</th>
                    <th className="p-2 text-blue-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Dr. Silva - Dentist</td>
                    <td className="p-2">28/10/2025</td>
                    <td className="p-2">No: 02, 10.00 A.M</td>
                    <td className="p-2 text-blue-600">Upcoming</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Dr. Gamini - Cardiologist</td>
                    <td className="p-2">08/08/2025</td>
                    <td className="p-2">No: 11, 4.00 P.M</td>
                    <td className="p-2 text-green-600">Complete</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Dr. Silva - Dentist</td>
                    <td className="p-2">08/07/2025</td>
                    <td className="p-2">No: 03, 10.30 A.M</td>
                    <td className="p-2 text-green-600">Complete</td>
                  </tr>
                  <tr>
                    <td className="p-2">Dr. Ranjith - Cardiologist</td>
                    <td className="p-2">12/04/2025</td>
                    <td className="p-2">No: 07, 2.30 P.M</td>
                    <td className="p-2 text-green-600">Complete</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-blue-600 font-bold text-left mb-3">Notifications</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex justify-between items-center border-b pb-1">
                <span>Appointment with Dr. Silva tomorrow at 10:30 AM</span>
                <span className="text-gray-500 italic ml-2">Read</span>
              </li>
              <li className="flex justify-between items-center border-b pb-1">
                <span>New medical record uploaded</span>
                <span className="text-gray-500 italic ml-2">Read</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Don’t forget to update your profile</span>
                <span className="text-gray-500 italic ml-2">Read</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;



