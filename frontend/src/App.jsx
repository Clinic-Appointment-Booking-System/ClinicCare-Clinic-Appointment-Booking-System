import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Homepage from './pages/public/homepage';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageAppointment from './pages/admin/ManageAppointment';
import ManagePatient from './pages/admin/ManagePatient';
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
      </Routes>
  );
}

export default App;
