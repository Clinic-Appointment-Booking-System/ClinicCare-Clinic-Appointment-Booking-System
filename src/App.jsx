import React from 'react';
import DoctorProfileCard from './components/DoctorProfileCard';
import PatientReviews from './components/PatientReviews';
import AvailabilityCalendar from './components/AvailabilityCalendar';
import TimeSlots from './components/TimeSlots';
import './App.css';

function App() {
  const handleDateSelect = (date) => {
    console.log('Selected date:', date);
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <div className="top-row">
          <div className="left-column">
            <DoctorProfileCard />
            <div className="calendar-container">
              <AvailabilityCalendar onDateSelect={handleDateSelect} />
            </div>
          </div>
          <div className="right-column">
            <PatientReviews />
          </div>
        </div>
        {/* Full-width bottom card */}
        <TimeSlots />
      </div>
    </div>
  );
}

export default App;
