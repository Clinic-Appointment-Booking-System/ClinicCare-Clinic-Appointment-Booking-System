import React, { useState } from 'react';
import '../styles/TimeSlots.css';
import ContinueBookingButton from './ContinueBookingButton';

const TimeSlots = () => {
  const [selectedSlot, setSelectedSlot] = useState('09:30 AM');

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM',
    '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM'
  ];

  return (
    <div className="time-slots-card">
      <h3>Available Time Slots</h3>
      <div className="time-slots-grid">
        {timeSlots.map((slot) => (
          <button
            key={slot}
            className={`time-slot-button ${selectedSlot === slot ? 'selected' : ''}`}
            onClick={() => setSelectedSlot(slot)}
          >
            {slot}
          </button>
        ))}
      </div>
      {/* Continue button inside the same card to match the mock */}
      <ContinueBookingButton />
    </div>
  );
};

export default TimeSlots;
