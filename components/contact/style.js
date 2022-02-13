import styled from 'styled-components';

export const ContactContainer = styled.div`
  min-height: 400px;

  .contactHeader {
    width: 90%;
    margin: 0 auto;
  }

  h3 {
    font-size: 5.063rem;
    margin: 20px 0;
  }

  .contactText {
    margin: 50px auto;
    text-align: center;
    width: 80%;
  }

  p {
    margin: 20px;
  }

  span {
    color: var(--color-tertiary);
  }

  .emailTag {
    text-decoration: none;
  }

  .contactBlock {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .contactCard {
    display: flex;
  }

  .contactImg {
    height: 50px;
    color: white;
  }
`;
