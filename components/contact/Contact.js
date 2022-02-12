import React from 'react';
import { ContactContainer, ContactHeader, ContactText } from './style';

function Contact() {
  return (
    <ContactContainer>
      <div className='contactHeader'>
        <h3>Contact</h3>
      </div>
      <div className='contactText'>
        <p>
          I’m currently looking for a internship, traineeship, practicum or
          similar to help out, grow and learn as a Developer. Please dont
          hesitate to contact me.
        </p>
      </div>
    </ContactContainer>
  );
}

export default Contact;
