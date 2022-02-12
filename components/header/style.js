import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  flex: 0 0 80px;
  height: 59px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 67px 52px 0 0;
  border: 1px solid hotpink;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 563px;
`;

export const NavItem = styled.div`
  font-weight: bold;
  text-transform: uppercase;

  a {
    color: var(--color-white);
    text-decoration: none;
  }
`;

export const Logo = styled.p`
  font-family: var(--font-logo);
  font-size: 54px;
`;
