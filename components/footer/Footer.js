import React from 'react';
import {
  FooterSection,
  FooterLogo,
  CopyrightContainer,
  SocialContainer,
  SocialBlock,
  SocialIcons,
} from './style';
import Image from 'next/image';

function Footer() {
  return (
    <FooterSection>
      <FooterLogo>
        <Image
          alt='logo'
          src='/images/logo3.svg'
          height={50}
          width={50}
        ></Image>
      </FooterLogo>
      <CopyrightContainer>
        <p>
          Copyright © 2021 Alexander Hansen • Oslo based Web Designer &
          Developer
        </p>
      </CopyrightContainer>
      <SocialContainer>
        <SocialBlock>
          <a href='https://github.com/diasen'>
            <SocialIcons class='fa-brands fa-github-square'></SocialIcons>
          </a>
        </SocialBlock>
        <SocialBlock>
          <a href='mailto:alexanderdias.hansen@gmail.com'>
            <SocialIcons class='fa-solid fa-envelope'></SocialIcons>
          </a>
        </SocialBlock>
        <SocialBlock>
          <a href='https://www.linkedin.com/in/alexander-hansen-ab83ab8a/'>
            <SocialIcons class='fa-brands fa-linkedin'></SocialIcons>
          </a>
        </SocialBlock>
      </SocialContainer>
    </FooterSection>
  );
}

export default Footer;
