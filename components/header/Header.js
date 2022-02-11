import React from 'react';
import { Wrapper, Nav, NavItem, Logo } from './style';
import Image from 'next/image';

function Header() {
  const navList = [
    {
      link: '#projects',
      title: 'Projects',
    },
    {
      link: '#about',
      title: 'About',
    },
    {
      link: '#contact',
      title: 'Contact',
    },
  ];

  return (
    <Wrapper>
      <Logo>
        {' '}
        <Image
          alt='logo'
          src='/images/logo3.svg'
          height={120}
          width={200}
        ></Image>
      </Logo>
      <Nav>
        {navList.map(({ link, title }) => (
          <NavItem key={link}>
            <a href={link}>{title}</a>
          </NavItem>
        ))}
      </Nav>
    </Wrapper>
  );
}

export default Header;
