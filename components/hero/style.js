import styled from 'styled-components';

export const HeroSection = styled.div`
  height: 400px;
  margin-top: 80px;

  .imgContainer {
    width: 100%;
  }

  .profilePic {
    width: 15%;
    border-radius: 90%;
    display: block;
    margin: 20px auto 20px auto;
  }

  h1 {
    text-align: center;
    color: white;
    font-family: 'Oswald', sans-serif;
    font-size: 3rem;
    font-weight: normal;
    margin: 0;
  }

  p {
    text-align: center;
    margin: 10;
    font-weight: lighter;
  }
`;
