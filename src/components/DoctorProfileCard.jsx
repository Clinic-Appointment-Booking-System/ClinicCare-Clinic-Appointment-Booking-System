import React from 'react';
import '../styles/DoctorProfileCard.css';
import doctorImg from '../../eveline-steinberger-kern-2-1-700x700.jpg';

const DoctorProfileCard = () => {
  return (
    <div className="doctor-profile-card">
      <img src={doctorImg} alt="Dr. Evelyn Reed" className="doctor-avatar" />
      <div className="doctor-info">
        <h3>Dr. Evelyn Reed</h3>
        <p>Cardiologist, 15 years of experience</p>
        <p className="doctor-description">
          Dr. Reed is a board-certified cardiologist dedicated to providing compassionate
          and comprehensive care. She is a fellow of the American College of Cardiology.
        </p>
      </div>
    </div>
  );
};

export default DoctorProfileCard;
