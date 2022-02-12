import React from 'react';
import { PhilosophySection, PhilosophyContent, PhilosophyText } from './style';

function Philosophy() {
  return (
    <PhilosophySection id='about'>
      <div className='philosophyHeader'>
        <h3>Philosophy</h3>
      </div>
      <div className='philosophyContent'>
        <p className='philosophyText'>
          I like to both design and code out of an simple idea and progressively
          add layers until the customers expectations is met.
        </p>
        <p className='philosophyText'>
          I love simplicity and beeing able to develope something elegant with
          focus on the user experience and great interaction design.
        </p>
        <p className='philosophyText'>
          Responsivenss is such an important factor in the modern day, so of
          course all of my layouts will work on any device.
        </p>
      </div>
    </PhilosophySection>
  );
}

export default Philosophy;
