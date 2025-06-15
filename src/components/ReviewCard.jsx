import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../styles/ReviewCard.css'; // We'll make a separate CSS file for the card

const ReviewCard = ({ name, rating, text }) => {
  return (
    <div className="review-card">
      <p className="review-text">{text}</p>
      <div className="review-footer">
        <div className="review-name">{name}</div>
        <div className="review-stars">
          {Array(rating)
            .fill(0)
            .map((_, index) => (
              <FaStar key={index} className="star-icon" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
