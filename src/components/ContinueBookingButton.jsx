import React from 'react';
import '../styles/ContinueBookingButton.css';

const ContinueBookingButton = () => {
  const handleBooking = () => {
    alert('Proceeding to booking...');
    // In a real application, you would navigate to a booking confirmation page
  };

  return (
    <div className="continue-booking-container">
      <button className="continue-booking-button" onClick={handleBooking}>
        Continue to Booking
      </button>
    </div>
  );
};

export default ContinueBookingButton;
