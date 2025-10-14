import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Homepage from './pages/public/homepage';
import Dashboard from "./pages/PatientDashboard/Dashboard/dashboard";
import EditProfile from "./pages/PatientDashboard/patientprofile/EditProfile";


import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editprofile" element={<EditProfile />} />


      </Routes>
  );
}

export default App;
