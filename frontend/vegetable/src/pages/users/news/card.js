import React from 'react';
import './card.scss';


const TinTucCard = ({ title, image, content }) => {
  return (
    <div className="tin-tuc-card">
      <img src={image} alt={title} className="tin-tuc-card-image" />
      <div className="tin-tuc-card-content">
        <h3 className="tin-tuc-card-title">{title}</h3>
        <p className="tin-tuc-card-text">{content}</p>
      </div>
    </div>
  );
};

export default (TinTucCard);
