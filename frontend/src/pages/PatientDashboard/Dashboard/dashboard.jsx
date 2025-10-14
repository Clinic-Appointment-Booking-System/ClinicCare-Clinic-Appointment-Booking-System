import React from "react";
import { FaEnvelope, FaBell, FaUserCircle } from "react-icons/fa";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <a href="#" className="nav-link active">Dashboard</a>
          <a href="#" className="nav-link">Doctors</a>
          <a href="#" className="nav-link">Appointments</a>
        </div>
        <div className="nav-right">
          <button className="logout-btn">Logout</button>
          <FaEnvelope className="nav-icon" />
          <FaBell className="nav-icon" />
          <FaUserCircle className="nav-icon" />
        </div>
      </nav>

      {/* Header */}
      <h2 className="dashboard-title">Patient Dashboard</h2>
      <div className="welcome-box">
        <h3>
          Welcome, <span className="highlight">Clinic Care</span>
        </h3>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left – Profile */}
        <div className="left-section">
          <h3 className="section-title">Profile</h3>
          <div className="profile-card">
            <img src="/profile1.jpg" alt="Profile" className="profile-img" />
            <div className="profile-info">
              <h4 className="profile-name">Helen Voizhicki</h4>
              <p>Role: Patient</p>
              <p>Age: 34</p>
              <p>Email: helenvoizhicki@gmail.com</p>
              <p>Phone: +94 771234567</p>
              <p>Address: 24, Silva Road, Kalutara</p>
              <button className="edit-btn">Edit</button>
            </div>
          </div>
        </div>

        {/* Right – Booking History + Notifications */}
        <div className="right-section">
          <h3 className="section-title">Booking History</h3>
          <div className="booking-card">
            <table>
              <thead>
                <tr>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Appointment No & Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dr. Silva - Dentist</td>
                  <td>28/10/2025</td>
                  <td>No: 02, 10.00 A.M</td>
                  <td className="text-blue">Upcoming</td>
                </tr>
                <tr>
                  <td>Dr. Gamini - Cardiologist</td>
                  <td>08/08/2025</td>
                  <td>No: 11, 4.00 P.M</td>
                  <td className="text-green">Complete</td>
                </tr>
                <tr>
                  <td>Dr. Silva - Dentist</td>
                  <td>08/07/2025</td>
                  <td>No: 03, 10.30 A.M</td>
                  <td className="text-green">Complete</td>
                </tr>
                <tr>
                  <td>Dr. Ranjith - Cardiologist</td>
                  <td>12/04/2025</td>
                  <td>No: 07, 2.30 P.M</td>
                  <td className="text-green">Complete</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Notifications */}
          <div className="notifications-card">
            <h3 className="notif-title">Notifications</h3>
            <ul>
              <li>
                Appointment with Dr. Silva tomorrow at 10:30 AM
                <span className="read-status"> Read</span>
              </li>
              <li>
                New medical record uploaded
                <span className="read-status"> Read</span>
              </li>
              <li>
                Don’t forget to update your profile
                <span className="read-status"> Read</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;






