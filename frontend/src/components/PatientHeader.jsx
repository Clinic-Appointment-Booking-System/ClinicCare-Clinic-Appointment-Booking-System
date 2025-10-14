// src/components/PatientHeader.jsx
import { MessageSquare, Bell } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./Button";
import exampleImage from "../assets/Profile Image-Fuchsius.png";

export default function PatientHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  // Define navigation menu for Patient
  const navItems = [
    { label: "Dashboard", path: "/patient-dashboard" },
    { label: "Doctors", path: "/patient-doctors" },
    { label: "Appointments", path: "/book-appointment" },
    { label: "Settings", path: "/patient-settings" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="flex items-center justify-between px-8 py-4 max-w-[1600px] mx-auto">
        {/* Navigation */}
        <nav className="flex items-center gap-12">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            onClick={() => navigate("/login")}
          >
            Logout
          </Button>

          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <MessageSquare className="w-5 h-5 text-gray-700" />
          </button>

          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-700" />
          </button>

          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <img
              src={exampleImage}
              alt="Patient avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
