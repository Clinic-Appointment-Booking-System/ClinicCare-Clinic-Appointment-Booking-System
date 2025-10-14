
import React, { useState } from "react";
import PatientHeader from "../../components/PatientHeader";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: "2025-10-20",
      time: "10.00 A.M",
      doctor: "Dr. Kasun Jayakodi",
    },
    {
      id: 2,
      date: "2025-10-25",
      time: "1.00 P.M",
      doctor: "Dr. Liyesha Yasaswi",
    },
  ]);

  const handleReschedule = (id) => {
    alert(`Reschedule Appointment ID: ${id}`);
  };

  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      setAppointments(appointments.filter((app) => app.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center p-6">
      {/* Navigation Bar */}
      <PatientHeader />
      <main className="flex flex-col items-center justify-center w-full px-6 pt-[120px]"> 
      <div className="flex flex-col items-center w-full">

      {/* Appointments Section */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          My Appointments
        </h2>

        {appointments.length === 0 ? (
          <p className="text-center text-gray-600">No upcoming appointments.</p>
        ) : (
          <div className="space-y-6">
            {appointments.map((app) => (
              <div
                key={app.id}
                className="bg-blue-50 border border-gray-200 rounded-lg p-5"
              >
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  Upcoming Appointment
                </p>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between text-gray-700">
                  <p>
                    {app.date} <span className="mx-2">at {app.time}</span>
                  </p>
                  <p className="font-medium">{app.doctor}</p>
                </div>

                <div className="flex flex-wrap justify-start md:justify-end mt-4 space-x-4">
                  <button
                    onClick={() => handleReschedule(app.id)}
                    className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Reschedule Appointment
                  </button>
                  <button
                    onClick={() => handleCancel(app.id)}
                    className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
                  >
                    Cancel Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>
      </main>
    </div>
  );
};

export default MyAppointments;
