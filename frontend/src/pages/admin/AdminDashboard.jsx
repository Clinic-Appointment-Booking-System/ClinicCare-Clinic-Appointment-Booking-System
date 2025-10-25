import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Star } from "lucide-react";
import { Button } from "../../components/Button";
import Header from "../../components/Header";
import axios from "axios";
import { useAuthGuard } from "../../hooks/useAuth";
import { useEffect } from "react";


export default function AdminDashboard() {
  useAuthGuard(["ADMIN"]);
  const [selectedDate, setSelectedDate] = useState(3);
  const [selectedMonth, setSelectedMonth] = useState("October 2025");
  const [selectedTime, setSelectedTime] = useState("01:30");
  const [doctorData, setDoctorData] = useState([]);
  const [patientData, setPatientData] = useState([]);
  const [searchDoctor, setSearchDoctor] = useState("");
  const [filteredDoctor, setFilteredDoctor] = useState(null);
  const [availabilityStatus, setAvailabilityStatus] = useState(null);


  useEffect(() => {
  axios
    .get("http://localhost:4000/api/admin/patients", { withCredentials: true })
    .then((res) => setPatientData(res.data.patients || []))
    .catch((err) => {
      console.error("Error fetching patients:", err);
      setPatientData([]); // fallback
    });
  }, []);


  useEffect(() => {
  axios
    .get("http://localhost:4000/api/admin/doctors", { withCredentials: true })
    .then((res) => setDoctorData(res.data.doctors))
    .catch((err) => console.error("Error fetching doctors:", err));
  }, []);

  const handleDoctorSearch = (e) => {
  const value = e.target.value;
  setSearchDoctor(value);
  const found = doctorData.find(
    (doc) => doc.user?.name.toLowerCase() === value.toLowerCase()
  );
  setFilteredDoctor(found || null);
  setAvailabilityStatus(null); // reset status when searching
};

const checkDoctorAvailability = async () => {
  if (!filteredDoctor || !selectedDate || !selectedTime) {
    alert("Please select doctor, date, and time.");
    return;
  }

  try {
    const res = await axios.get("http://localhost:4000/api/admin/check-availability", {
      params: {
        doctorId: filteredDoctor.id,
        date: `${selectedMonth} ${selectedDate}`,
        time: selectedTime,
      },
      withCredentials: true,
    });

    setAvailabilityStatus(res.data.available ? "Available" : "Not Available");
  } catch (err) {
    console.error("Error checking availability:", err);
    setAvailabilityStatus("Error checking availability");
  }
};

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
                  <div key={i} className={`grid grid-cols-4 px-6 py-3 ${i % 2 ? "bg-white" : "bg-blue-50"}`}>
                    <div>{p.user?.name}</div>
                    <div>{p.phoneNumber || "N/A"}</div>
                    <div>{p.createdAt?.split("T")[0]}</div>
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
                  <div key={i} className={`grid grid-cols-4 px-6 py-3 ${i % 2 ? "bg-white" : "bg-blue-50"}`}>
                    <div>{d.user?.name}</div>
                    <div>{d.user?.email}</div>
                    <div>{d.specialization?.name}</div>
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

            {/* 1️⃣ Doctor Search */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <input
                type="text"
                value={searchDoctor}
                onChange={handleDoctorSearch}
                placeholder="Enter Doctor Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {filteredDoctor && (
                <p className="text-sm text-gray-600 mt-2">
                  Selected: <span className="font-semibold">{filteredDoctor.user?.name}</span>
                </p>
              )}
            </div>

            {/* 2️⃣ Calendar */}
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

            {/* 3️⃣ Time Slots */}
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

            {/* 4️⃣ Availability Button */}
            <Button
              onClick={checkDoctorAvailability}
              className="w-full bg-white border border-gray-300 hover:bg-gray-50 py-3 flex items-center justify-center"
            >
              Check Availability <Star className="inline-block ml-2 text-blue-600" />
            </Button>

            {availabilityStatus && (
              <p
                className={`text-center font-semibold ${
                  availabilityStatus === "Available" ? "text-green-600" : "text-red-600"
                }`}
              >
                {availabilityStatus === "Available" ? "★ Doctor is Available ★" : "Doctor Not Available"}
              </p>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
