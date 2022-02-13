import React from 'react';
import { FooterSection } from './style';
import Image from 'next/image';

function Footer() {
  const socialList = [
    {
      image: '/images/github.svg',
      link: 'https://github.com/diasen',
    },
    {
      image: '/images/envelope.svg',
      link: 'mailto:Alexanderdias.hansen@gmail.com',
    },
    {
      image: '/images/linkedin.svg',
      link: 'https://www.linkedin.com/in/alexander-hansen-ab83ab8a/',
    },
  ];
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
          {socialList.map(({ image, title, link }) => (
            <div key={title} className='contactCard'>
              <img src={image} className='socialImg' />
              <p className='skillBlockText'>
                <a href={link}>{title} </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </FooterSection>
  );
}

export default Footer;
