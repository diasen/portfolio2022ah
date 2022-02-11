import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  background: #3c3e50;
`;

function Contact() {
  return (
    <ContactContainer>
      <h2>Contact</h2>
      <p>
        I’m currently looking for a internship, traineeship, practicum or
        similar to help out, grow and learn as a Developer. Please dont hesitate
        to contact me.
      </p>
    </ContactContainer>
  );
}

export default Contact;
