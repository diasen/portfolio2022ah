import React from 'react';
import { PhilosophySection, PhilosophyContent, PhilosophyText } from './style';

function Philosophy() {
  return (
    <PhilosophySection id='about'>
      <h2>Philosophy</h2>
      <PhilosophyContent>
        <PhilosophyText>
          I like to both design and code out of an simple idea and progressively
          add layers until the customers expectations is met.
        </PhilosophyText>
        <PhilosophyText>
          I love simplicity and beeing able to develope something elegant with
          focus on the user experience and great interaction design.
        </PhilosophyText>
        <PhilosophyText>
          Responsivenss is such an important factor in the modern day, so of
          course all of my layouts will work on any device.
        </PhilosophyText>
      </PhilosophyContent>
    </PhilosophySection>
  );
}

export default Philosophy;
