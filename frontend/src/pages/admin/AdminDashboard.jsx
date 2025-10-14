import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Star } from "lucide-react";
import { Button } from "../../components/Button";
import Header from "../../components/Header";

export default function AdminDashboard() {
  const [selectedDate, setSelectedDate] = useState(3);
  const [selectedMonth, setSelectedMonth] = useState("October 2025");
  const [selectedTime, setSelectedTime] = useState("01:30");

  const patientData = [
    { name: "Sujani Thilakarathna", tel: "0773547856", date: "10/10/2025" },
    { name: "Ajantha Perera", tel: "0723552365", date: "10/10/2025" },
    { name: "Vinod Malaka", tel: "0774327722", date: "12/10/2025" },
    { name: "Clarence Soysa", tel: "0914478790", date: "13/10/2025" },
    { name: "Ismi Kader", tel: "0773229087", date: "15/10/2025" },
    { name: "Menaka de Mel", tel: "0788544060", date: "16/10/2025" },
  ];

  const doctorData = [
    { name: "Jeewan Mendis", availability: "07/10/2025", category: "Cardiologist" },
    { name: "Saman Jayarathne", availability: "10/10/2025", category: "Neurologist" },
    { name: "Nihal Silva", availability: "10/10/2025", category: "Dermatologist" },
    { name: "Jayantha Soysa", availability: "12/10/2025", category: "Psychiatrist" },
    { name: "Yusuf Mohoor", availability: "22/10/2025", category: "Gynaecology" },
  ];

  const calendarDays = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    disabled: i % 8 === 0,
    selected: i + 1 === selectedDate,
  }));

  const timeSlots = ["01:00", "01:30", "02:00", "02:30"];

  return (
    <div className="min-h-screen w-full bg-blue-50 flex flex-col">
      <Header />
      <main className="flex-grow overflow-auto p-6 md:p-10">
        <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Patient Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Patient Details</h2>
              <div className="bg-white rounded-lg shadow-sm w-full">
                <div className="grid grid-cols-4 bg-blue-100 px-6 py-3 font-medium">
                  <div>Name</div>
                  <div>Tel No.</div>
                  <div>Appointment Date</div>
                  <div></div>
                </div>
                {patientData.map((p, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-4 px-6 py-3 ${
                      i % 2 ? "bg-white" : "bg-blue-50"
                    }`}
                  >
                    <div>{p.name}</div>
                    <div>{p.tel}</div>
                    <div>{p.date}</div>
                    <div>
                      <Button className="bg-blue-600 text-white rounded-full px-4 py-1">
                        Manage
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Doctor Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Doctor Details</h2>
              <div className="bg-white rounded-lg shadow-sm w-full">
                <div className="grid grid-cols-4 bg-blue-100 px-6 py-3 font-medium">
                  <div>Name</div>
                  <div>Availability</div>
                  <div>Category</div>
                  <div></div>
                </div>
                {doctorData.map((d, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-4 px-6 py-3 ${
                      i % 2 ? "bg-white" : "bg-blue-50"
                    }`}
                  >
                    <div>{d.name}</div>
                    <div>{d.availability}</div>
                    <div>{d.category}</div>
                    <div>
                      <Button className="bg-blue-600 text-white rounded-full px-4 py-1">
                        Set Time
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Availability</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <button>
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span>{selectedMonth}</span>
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

            <div className="bg-white rounded-lg shadow-sm p-6 space-y-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`w-full border-2 rounded-lg px-4 py-3 ${
                    selectedTime === time
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>

            <Button className="w-full bg-white border border-gray-300 hover:bg-gray-50 py-3">
              Available <Star className="inline-block ml-2" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
