import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../components/Button";
import Header from "../../components/Header";

export default function ManageAppointment() {
  const [selectedDate, setSelectedDate] = useState(3);

  const appointmentData = [
    { name: "Jeewan Mendis", category: "Cardiologist", timeSlot: "00:30" },
    { name: "Saman Jayarathne", category: "Neurologist", timeSlot: "00:30" },
    { name: "Nihal Silva", category: "Dermatologist", timeSlot: "00:30" },
  ];

  const calendarDays = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    disabled: i % 8 === 0,
    selected: i + 1 === selectedDate,
  }));

  return (
    <div className="min-h-screen w-full bg-blue-50 flex flex-col">
      <Header />
      <main className="flex-grow overflow-auto p-6 md:p-10">
        <div className="w-full max-w-[1400px] mx-auto space-y-12">
          {/* Appointment Table */}
          <section>
            <h2 className="text-xl font-semibold mb-6">Appointment Time Setting</h2>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="grid grid-cols-3 bg-blue-100 px-6 py-4 font-medium">
                <div>Name</div>
                <div>Category</div>
                <div>Time Slot</div>
              </div>
              {appointmentData.map((a, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 px-6 py-4 ${
                    i % 2 ? "bg-white" : "bg-blue-50"
                  }`}
                >
                  <div>{a.name}</div>
                  <div>{a.category}</div>
                  <div>{a.timeSlot}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Calendar */}
          <section>
            <h2 className="text-xl font-semibold mb-6">Appointment Date Lock</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 max-w-md">
              <div className="flex items-center justify-between mb-6">
                <button>
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span>October 2025</span>
                <button>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => !d.disabled && setSelectedDate(d.day)}
                    disabled={d.disabled}
                    className={`aspect-square flex items-center justify-center rounded-md ${
                      d.disabled
                        ? "text-gray-300 cursor-not-allowed"
                        : d.selected
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {d.day}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
