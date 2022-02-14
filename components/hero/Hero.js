import React from 'react';
import { HeroSection } from './style';
import Image from 'next/image';

function Hero() {
  return (
    <HeroSection>
      <div className='imgContainer'>
        <Image
          height={120}
          width={150}
          alt='Porfile picture'
          src='/images/profilepic.JPG'
          className='profilePic'
        ></Image>
      </div>
      <h1>Hi, I’m Alexander.</h1>
      <p>I'm currently completing my Front-end development degree at Noroff.</p>
    </HeroSection>
  );
}

export default Hero;
