import React from 'react';
import { HeroSection } from './style';

function Hero() {
  return (
    <HeroSection>
      <div className='imgContainer'>
        <img
          alt='Porfile picture'
          src='/images/profilepic.JPG'
          className='profilePic'
        ></img>
      </div>
      <h1>Hi, I’m Alexander.</h1>
      <p>I'm currently completing my Front-end development degree at Noroff.</p>
    </HeroSection>
  );
}

export default Hero;
