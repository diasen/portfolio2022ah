import React from 'react';
import { FooterSection } from './style';
import Image from 'next/image';
import { FaGithubSquare, FaRegEnvelope, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Footer() {
  return (
    <FooterSection>
      <div className='footerLogo'>
        <Image
          alt='logo'
          src='/images/logo3.svg'
          height={50}
          width={50}
        ></Image>
      </div>
      <div className='copyrightContainer'>
        <p>
          Copyright © 2021 Alexander Hansen • Sarpsborg based Frontend Developer
        </p>
      </div>
      <div className='socialContainer'>
        <div className='socialBlock'>
          <div className='contactCard'>
            <p className='skillBlockText'>
              <a href='https://github.com/diasen'>
                <IconContext.Provider value={{ className: 'react-icons' }}>
                  <FaGithubSquare />
                </IconContext.Provider>
              </a>
            </p>
          </div>
          <div className='contactCard'>
            <p className='skillBlockText'>
              <a href='mailto:Alexanderdias.hansen@gmail.com'>
                <IconContext.Provider value={{ className: 'react-icons' }}>
                  <FaRegEnvelope />
                </IconContext.Provider>
              </a>
            </p>
          </div>
          <div className='contactCard'>
            <p className='skillBlockText'>
              <a href='https://www.linkedin.com/in/alexander-hansen-ab83ab8a/'>
                <IconContext.Provider value={{ className: 'react-icons' }}>
                  <FaLinkedin />
                </IconContext.Provider>
              </a>
            </p>
          </div>
        </div>
      </div>
    </FooterSection>
  );
}

export default Footer;
