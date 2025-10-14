import { useState } from "react";

import profile1 from "../../assets/profile1.png";

function DoctorProfile() {
  const doctor = {
    name: "Dr Sarah Perera",
    specialization: "Cardiologist",
    experience: "12 yrs",
    contact: "070-2568963",
    email: "sarah@123gmail.com",
    available: "Mon-Fri, 9AM-3PM",
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#cce1ff] py-10 px-4">
     
      <h2 className="text-3xl font-semibold text-black mb-10 text-center">
        Doctor Profile
      </h2>

      <div className="bg-white rounded-xl shadow-md w-full max-w-md p-8 text-center">
        
        <img
          src={profile1}
          alt="profile"
          className="w-28 h-28 rounded-full object-cover mx-auto mb-3"
        />

        <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-1">
          {doctor.name}
        </h3>
        <p className="text-gray-600 text-base mb-5">
          {doctor.specialization}
        </p>

        
        <div className="flex flex-col gap-3 text-sm sm:text-base text-left mt-4 mb-8">
          <div className="flex justify-between">
            <strong className="text-gray-800 font-medium w-32">Experience</strong>
            <span className="text-gray-700">{doctor.experience}</span>
          </div>
          <div className="flex justify-between">
            <strong className="text-gray-800 font-medium w-32">Contact</strong>
            <span className="text-gray-700">{doctor.contact}</span>
          </div>
          <div className="flex justify-between">
            <strong className="text-gray-800 font-medium w-32">Email</strong>
            <span className="text-gray-700">{doctor.email}</span>
          </div>
          <div className="flex justify-between">
            <strong className="text-gray-800 font-medium w-32">Available</strong>
            <span className="text-gray-700">{doctor.available}</span>
          </div>
        </div>

        <div className="flex justify-center gap-5 flex-wrap">
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2 transition-all">
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-6 py-2 transition-all">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
