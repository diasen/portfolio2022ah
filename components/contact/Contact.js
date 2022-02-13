import React from 'react';
import { ContactContainer } from './style';
import { FaGithubSquare, FaLocationArrow, FaLinkedin } from 'react-icons/fa';
import { BsMailbox } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { IconContext } from 'react-icons';

function Contact() {
  return (
    <ContactContainer id='contact'>
      <div className='contactHeader'>
        <h4>Contact</h4>
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
        <div className='contactCard'>
          <IconContext.Provider value={{ className: 'react-icons' }}>
            <FaGithubSquare />
          </IconContext.Provider>
          <a href='https://github.com/diasen'>Github</a>
        </div>
        <div className='contactCard'>
          <IconContext.Provider value={{ className: 'react-icons' }}>
            <FaLinkedin />
          </IconContext.Provider>
          <a href='https://www.linkedin.com/in/alexander-hansen-ab83ab8a/'>
            LinkedIn
          </a>
        </div>
        <div className='contactCard'>
          <IconContext.Provider value={{ className: 'react-icons' }}>
            <MdLocationOn />
          </IconContext.Provider>
          <a href='https://www.google.no/maps/place/Sarpsborg/@59.2870162,11.0542963,13z/data=!3m1!4b1!4m5!3m4!1s0x46440684290c5355:0xd56a373f7b084e89!8m2!3d59.2840729!4d11.1094028'>
            Sarpsborg,Norway
          </a>
        </div>
        <div className='contactCard'>
          <IconContext.Provider value={{ className: 'react-icons' }}>
            <BsMailbox />
          </IconContext.Provider>
          <a href='https://github.com/diasen'>alexanderdias.hansen@gmail.com</a>
        </div>
      </div>
    </ContactContainer>
  );
}

export default Contact;
