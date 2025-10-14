import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { Button } from "../../components/Button";
import Header from "../../components/Header";

export default function ManagePatient() {
  const [patientSearch, setPatientSearch] = useState("");
  const [bookingSearch, setBookingSearch] = useState("");

  const patientData = [
    { name: "Sujani Thilakarathna", tel: "0773547856", age: 54 },
    { name: "Ajantha Perera", tel: "0723552365", age: 51 },
  ];

  const bookingData = [
    {
      patientName: "Clarence Soysa",
      date: "25/05/2026",
      appointment: "No: 01, 10:00 A.M",
      doctorName: "Saman Jayarathne",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-blue-50 flex flex-col">
      <Header />
      <main className="flex-grow overflow-auto p-6 md:p-10">
        <div className="w-full max-w-[1400px] mx-auto space-y-12">
          {/* Patients Section */}
          <section>
            <h2 className="text-xl font-semibold mb-6">Patient Details</h2>
            <div className="relative mb-6 max-w-lg">
              <input
                type="text"
                placeholder="Search by name"
                value={patientSearch}
                onChange={(e) => setPatientSearch(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="grid grid-cols-5 bg-blue-100 px-6 py-4 font-medium">
                <div className="col-span-2">Name</div>
                <div>Tel No.</div>
                <div>Age</div>
                <div></div>
              </div>
              {patientData.map((p, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-5 px-6 py-4 ${
                    i % 2 ? "bg-white" : "bg-blue-50"
                  }`}
                >
                  <div className="col-span-2">{p.name}</div>
                  <div>{p.tel}</div>
                  <div>{p.age}</div>
                  <div className="flex gap-2">
                    <Button className="bg-blue-600 text-white rounded-full px-4 py-1">
                      Edit
                    </Button>
                    <Button className="bg-red-500 text-white rounded-full px-4 py-1">
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2">
              Add Patient <Plus className="w-5 h-5" />
            </Button>
          </section>

          {/* Booking History */}
          <section>
            <h2 className="text-xl font-semibold mb-6">Booking History</h2>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="grid grid-cols-4 bg-blue-100 px-6 py-4 font-medium">
                <div>Patient Name</div>
                <div>Date</div>
                <div>Appointment</div>
                <div>Doctor</div>
              </div>
              {bookingData.map((b, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-4 px-6 py-4 ${
                    i % 2 ? "bg-white" : "bg-blue-50"
                  }`}
                >
                  <div>{b.patientName}</div>
                  <div>{b.date}</div>
                  <div>{b.appointment}</div>
                  <div>{b.doctorName}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
