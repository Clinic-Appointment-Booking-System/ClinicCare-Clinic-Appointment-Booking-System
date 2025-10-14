import React from 'react';
import '../styles/PatientReviews.css';
import sarahImg from '../../images (1).jpeg';
import michaelImg from '../../QbVQMrYtqoGbtq9NOEGG.webp';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? 'star-filled' : 'star-empty'}>
        ★
      </span>
    );
  }
  return <div className="star-rating">{stars}</div>;
};

const PatientReviews = () => {
  const reviewsData = {
    overallRating: 4.8,
    totalReviews: 234,
    ratingsBreakdown: [
      { stars: 5, percentage: 72 },
      { stars: 4, percentage: 20 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 2 },
    ],
    patientComments: [
      {
        id: 1,
        name: 'Sarah L.',
        time: '2 days ago',
        avatar: sarahImg,
        rating: 4,
        comment: 'Dr. Reed was incredibly thorough and took the time to answer all of my questions. I felt very comfortable and confident in her care.',
      },
      {
        id: 2,
        name: 'Michael B.',
        time: '1 week ago',
        avatar: michaelImg,
        rating: 5,
        comment: 'An excellent physician who is both knowledgeable and caring. The office staff was also very friendly and efficient.',
      },
    ],
  };

  return (
    <div className="patient-reviews-card">
      <h3>Patient Reviews</h3>
      <div className="overall-rating-section">
        <div className="overall-score">{reviewsData.overallRating}</div>
        <StarRating rating={Math.round(reviewsData.overallRating)} />
        <div className="total-reviews">{reviewsData.totalReviews} reviews</div>
      </div>
      <div className="ratings-breakdown">
        {reviewsData.ratingsBreakdown.map((item) => (
          <div className="rating-bar-row" key={item.stars}>
            <span className="rating-number">{item.stars}</span>
            <div className="rating-bar-container">
              <div
                className="rating-bar-fill"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            <span className="rating-percentage">{item.percentage}%</span>
          </div>
        ))}
      </div>
      <div className="patient-comments">
        {reviewsData.patientComments.map((comment) => (
          <div className="comment-item" key={comment.id}>
            <div className="comment-header">
              <img src={comment.avatar} alt={comment.name} className="comment-avatar" />
              <div className="comment-meta">
                <span className="comment-name">{comment.name}</span>
                <span className="comment-time">{comment.time}</span>
              </div>
            </div>
            <StarRating rating={comment.rating} />
            <p className="comment-text">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientReviews;
