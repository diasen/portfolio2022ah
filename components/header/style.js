import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  flex: 0 0 80px;
  height: 59px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 67px 52px 0 0;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
  max-width: 563px;
`;

export const NavItem = styled.div`
  font-weight: bold;
  text-transform: uppercase;

  a {
    color: var(--color-white);
    text-decoration: none;
    font-family: var(--font-heading);
    font-size: 1.125rem;
  }
`;

export const Logo = styled.p`
  font-family: var(--font-logo);
  font-size: 54px;
`;
