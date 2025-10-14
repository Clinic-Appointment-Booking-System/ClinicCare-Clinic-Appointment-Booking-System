import React, { useState } from 'react';
import '../styles/AvailabilityCalendar.css';

const AvailabilityCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2023, 9, 1)); // October 2023

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay(); // 0 for Sunday, 1 for Monday
  };

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month); // 0 (Sunday) - 6 (Saturday)

    const days = [];
    // Fill leading empty days for Monday-first calendar
    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
      days.push(<div key={`empty-prev-${i}`} className="calendar-day empty"></div>);
    }

    // Fill days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday = year === new Date().getFullYear() &&
                      month === new Date().getMonth() &&
                      i === new Date().getDate();
      const isSelected = i === 3 && month === 9 && year === 2023; // Highlight Oct 3, 2023 like the mock
      days.push(
        <div
          key={`day-${i}`}
          className={`calendar-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  const goToPreviousMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  return (
    <div className="availability-calendar-card">
      <h3>Availability</h3>
      <div className="calendar-header">
        <button onClick={goToPreviousMonth}>{'<'}</button>
        <span>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
        <button onClick={goToNextMonth}>{'>'}</button>
      </div>
      <div className="calendar-grid">
        {/* Monday-first weekday headers */}
        <div className="calendar-weekday">MON</div>
        <div className="calendar-weekday">TUE</div>
        <div className="calendar-weekday">WED</div>
        <div className="calendar-weekday">THU</div>
        <div className="calendar-weekday">FRI</div>
        <div className="calendar-weekday">SAT</div>
        <div className="calendar-weekday">SUN</div>
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default AvailabilityCalendar;
