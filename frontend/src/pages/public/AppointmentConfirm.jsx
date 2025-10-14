

import { useState } from 'react';
import { Calendar, X } from 'lucide-react';
import { Button } from '../../components/Button';
import PatientHeader from '../../components/PatientHeader';

export default function AppointmentConfirm() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center">
      {/* Navbar */}
      <PatientHeader />

      {/* Appointment Card */}
      <div className="relative bg-white shadow-lg rounded-2xl p-8 mt-16 w-[420px] text-center">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold hover:bg-red-600"
        >
          X
        </button>

        <div className="flex justify-center mb-4">
          <Calendar className="text-blue-500" size={48} />
        </div>

        <h2 className="text-xl font-semibold text-gray-800">Appointment Confirm!</h2>
        <p className="text-gray-500 mt-2">
          Helen, we’ve got you confirmed for your appointment!
        </p>

        <p className="text-lg font-bold text-gray-800 mt-4">
          10.00 A.M : <span className="text-blue-600">Dr. Kasun Jayakodi</span>
        </p>

        <p className="text-sm text-gray-400 mt-1">MONDAY, OCTOBER 20, 2025</p>

        <Button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Go to My Appointments
        </Button>
      </div>
    </div>
  );
}
