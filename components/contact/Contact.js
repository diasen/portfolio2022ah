import React from 'react';
import { ContactContainer, ContactHeader, ContactText } from './style';

function Contact() {
  const contactList = [
    {
      title: 'Github',
      image: '/images/github.svg',
      link: 'https://github.com/diasen',
    },
    {
      title: 'LinkedIn',
      image: '/images/linkedin.svg',
      link: 'https://www.linkedin.com/in/alexander-hansen-ab83ab8a/',
    },
    {
      title: 'Sarpsborg, Norway',
      image: '/images/location.svg',
      link: 'https://www.google.no/maps/place/Sarpsborg/@59.2869724,11.0542963,13z/data=!4m5!3m4!1s0x46440684290c5355:0xd56a373f7b084e89!8m2!3d59.2840729!4d11.1094028',
    },
    {
      title: 'Alexanderdias.hansen@gmail.com',
      image: '/images/envelope.svg',
      link: 'mailto:Alexanderdias.hansen@gmail.com',
    },
  ];
  return (
    <ContactContainer>
      <div className='contactHeader'>
        <h3>Contact</h3>
      </div>
      <div className='contactText'>
        <p>
          I’m currently looking for a internship, traineeship, practicum or
          similar to help out, grow and learn as a Developer. Please dont
          hesitate to
          <a className='emailTag' href='mailto:alexanderdias.hansen@gmail.com'>
            <span> contact me</span>.
          </a>
        </p>
      </div>
      <div className='contactBlock'>
        {contactList.map(({ image, title, link }) => (
          <div key={title} className='contactCard'>
            <img src={image} className='contactImg' />
            <p className='skillBlockText'>
              <a href={link}>{title} </a>
            </p>
          </div>
        ))}
      </div>
    </ContactContainer>
  );
}

export default Contact;
