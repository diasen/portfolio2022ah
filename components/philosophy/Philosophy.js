import React from 'react';
import { PhilosophySection } from './style';

function Philosophy() {
  return (
    <PhilosophySection>
      <div className='philosophyHeader'>
        <h3>Philosophy</h3>
      </div>
      <div className='philosophyContent'>
        <p className='philosophyText'>
          I like to both design and code out of an simple idea and progressively
          add layers until the <span>customers expectations</span> is met.
        </p>
        <p className='philosophyText'>
          I love simplicity and beeing able to develope something elegant with
          focus on the <span>user experience</span> and great interaction
          design.
        </p>
        <p className='philosophyText'>
          <span>Responsivenss</span> is such an important factor in the modern
          day, so of course all of my layouts will work on any device.
        </p>
      </div>
    </PhilosophySection>
  );
}

export default Philosophy;
