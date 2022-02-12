import React from 'react';
import { AboutContainer, AboutContent, AboutText } from './style';

function About() {
  return (
    <AboutContainer>
      <h2>About me</h2>
      <div className='aboutContent'>
        <p className='aboutText'>
          I have always been fascinated by the art of web- and application
          development and in august 2020 I finally started my Front-end career
          at Noroff, Oslo.
        </p>
        <p className='aboutText'>
          Before I started studying I have spent the last 10 years working as an
          Apple certified technician and gained a lot of experience within IT
          and customer relations. I really enjoy problem solving and finding the
          best solution possible for the end users.
        </p>
      </div>
    </AboutContainer>
  );
}

export default About;
