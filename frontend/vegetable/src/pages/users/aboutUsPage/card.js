import React from 'react';
import './card.scss';


const AboutCard = ({ title, image, content }) => {
  return (
    <div className="about-card">
      <img src={image} alt={title} className="about-card-image" />
      <div className="about-card-content">
        <h3 className="about-card-title">{title}</h3>
        <p className="about-card-text">{content}</p>
      </div>
    </div>
  );
};

export default (AboutCard);
