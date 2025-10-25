import { useState } from "react";
import {
  Bell,
  MessageSquare,
  User,
  PlusCircle,
  Search,
} from "lucide-react";
import PatientHeader from "../../components/PatientHeader";

import sarahImg from "./../../assets/profile1.png";
import isuruImg from "./../../assets/profile2.png";
import nuvidiImg from "./../../assets/profile3.png";
import kasunImg from "./../../assets/profile4.png";

function App() {
  const doctors = [
    {
      name: "Dr. Sarah Perera",
      specialization: "Cardiologist",
      experience: "12 yrs",
      contact: "070-2568963",
      email: "sarah@123gmail.com",
      available: "Mon–Fri, 9AM–3PM",
      address: "Colombo General Hospital, Ward 12",
      hospital: "Colombo Heart Care Center",
      qualification: "MBBS, MD (Cardiology)",
      image: sarahImg,
    },
    {
      name: "Dr. Isuru Perera",
      specialization: "Neurologist",
      experience: "15 yrs",
      contact: "076-5269897",
      email: "isuru@123gmail.com",
      available: "Tue–Sat, 10AM–4PM",
      address: "Asiri Central Hospital, Colombo",
      hospital: "Brain & Nerve Center",
      qualification: "MBBS, MD (Neurology)",
      image: isuruImg,
    },
    {
      name: "Dr. Nuvidi Chenaya",
      specialization: "Pediatrician",
      experience: "5 yrs",
      contact: "070-5687456",
      email: "nuvidi@123gmail.com",
      available: "Mon–Fri, 8AM–2PM",
      address: "Lady Ridgeway Hospital, Colombo",
      hospital: "Child Health Center",
      qualification: "MBBS, DCH",
      image: nuvidiImg,
    },
    {
      name: "Dr. Kasun Jayakodi",
      specialization: "Orthopedic Surgeon",
      experience: "11 yrs",
      contact: "070-2985874",
      email: "kasun@123gmail.com",
      available: "Mon–Sat, 9AM–5PM",
      address: "National Hospital, Colombo",
      hospital: "Orthopedic Care Unit",
      qualification: "MBBS, MS (Ortho)",
      image: kasunImg,
    },
  ];

  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#cce1ff] font-[Poppins]">
      {/* ===== NAVBAR ===== */}
      <PatientHeader/>

      {/* ===== PAGE HEADER ===== */}
      <div className="flex justify-between items-center bg-[#cce1ff] px-6 py-4 flex-wrap gap-3">
        <h1 className="text-3xl font-bold text-black">Doctor Management</h1>
        <button className="flex items-center gap-2 bg-[#4a90e2] hover:bg-[#357ac9] text-black font-medium px-5 py-3 rounded-md transition">
          <PlusCircle size={18} /> Add Doctor
        </button>
      </div>

      {/* ===== SEARCH BAR ===== */}
      <div className="flex items-center bg-white shadow-md mx-6 my-4 px-5 py-3 rounded-lg max-w-md">
        <Search className="text-[#4a90e2] mr-2" size={18} />
        <input
          type="text"
          placeholder="Search doctors by name or specialization..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-none outline-none w-full text-gray-700 text-sm"
        />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 px-6 pb-10">
        {/* LEFT COLUMN */}
        <div className="bg-white rounded-xl p-5 shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Doctor List
          </h2>
          <div className="flex flex-col gap-5 max-h-[80vh] overflow-y-auto pr-2">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doc, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-5 p-3 rounded-lg cursor-pointer transition ${
                    selectedDoctor.name === doc.name
                      ? "bg-[#e7f0ff]"
                      : "hover:bg-[#e7f0ff]"
                  }`}
                  onClick={() => setSelectedDoctor(doc)}
                >
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-base font-medium">{doc.name}</h4>
                    <p className="text-sm text-[#4a90e2]">
                      {doc.specialization}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 mt-4 text-sm">
                No doctors found
              </p>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="bg-white rounded-xl p-8 shadow-md">
          <div className="text-center">
            <img
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              className="w-36 h-36 rounded-full object-cover border-4 border-[#4a90e2] mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold">{selectedDoctor.name}</h2>
            <p className="text-[#4a90e2] font-medium">
              {selectedDoctor.specialization}
            </p>
            <p className="text-gray-600 text-sm mb-5">
              {selectedDoctor.qualification}
            </p>

            <div className="text-left bg-[#f9fafc] rounded-2xl p-5 leading-8 mb-6 text-gray-700">
              <p>
                <strong>Experience:</strong> {selectedDoctor.experience}
              </p>
              <p>
                <strong>Contact:</strong> {selectedDoctor.contact}
              </p>
              <p>
                <strong>Email:</strong> {selectedDoctor.email}
              </p>
              <p>
                <strong>Available:</strong> {selectedDoctor.available}
              </p>
              <p>
                <strong>Hospital:</strong> {selectedDoctor.hospital}
              </p>
              <p>
                <strong>Address:</strong> {selectedDoctor.address}
              </p>
            </div>

            <div className="flex justify-center gap-6">
              <button className="bg-[#004cff] hover:bg-[#357ac9] text-white font-semibold py-3 px-6 rounded-lg transition">
                Edit
              </button>
              <button className="bg-[#ff5f5f] hover:bg-[#e64848] text-white font-semibold py-3 px-6 rounded-lg transition">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;