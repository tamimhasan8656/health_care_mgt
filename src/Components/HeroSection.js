import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/1.mp4' autoPlay loop muted />
      <h1 style={{color: "black",}}>Consult your Doctor now</h1>
      <p style={{color: "red",}}>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          SIGNUP NOW <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;