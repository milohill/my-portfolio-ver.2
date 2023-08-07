import React from 'react';
import '../styles/header-style.css';
import ArrowImage from '../assets/arrow.svg';

export default function Header() {
  return (
    <div className="front">
      <div className="front__container">
        <h1>Milohill</h1>
        <p>I am a full stack developer</p>
        <a className="front__button" href="#about">
          <div className="front__button-text">Learn more</div>
          <img className="front__button-arrow" src={ArrowImage} alt="arrow image" width='25px'/>
        </a>
      </div>
    </div>
  );
}
