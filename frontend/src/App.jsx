import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Homepage from './pages/public/homepage';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageAppointment from './pages/admin/ManageAppointment';
import ManagePatient from './pages/admin/ManagePatient';
import DoctorList from './pages/doctor/DoctorList';
import DoctorForm from './pages/doctor/DoctorForm';
import DoctorProfile from './pages/doctor/DoctorProfile';
import AppointmentBooking from './pages/public/AppointmentBookingForm';
import AppointmentConfirm from './pages/public/AppointmentConfirm';
import MyAppointments from './pages/public/MyAppointments';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/manage-appointments" element={<ManageAppointment />} />
        <Route path="/manage-patients" element={<ManagePatient />} />
        <Route path="/doctor-list" element={<DoctorList />} />
        <Route path="/doctor-form" element={<DoctorForm />} />
        <Route path="/doctor-profile/:id" element={<DoctorProfile />} />
        <Route path="/book-appointment" element={<AppointmentBooking />} />
        <Route path="/appointment-confirm" element={<AppointmentConfirm />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
      </Routes>
  );
}

export default App;
