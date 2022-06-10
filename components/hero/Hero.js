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
      <h1>Hi, I&apos;m Alexander.</h1>
      <p>
        I&apos;m currently completing my Front-end development degree at Noroff
        school of technology and digital media.
      </p>
    </HeroSection>
  );
}

export default Hero;
