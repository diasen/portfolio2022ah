import styled from 'styled-components';

export const ContactContainer = styled.div`
  min-height: 400px;

  .contactHeader {
    width: 90%;
    margin: 0 auto;
  }

  h4 {
    font-size: 3.375rem;
    margin: 20px 0;
  }

  .contactText {
    margin: 50px auto;
    text-align: center;
    width: 90%;
    font-size: 1.125rem;
  }

  p {
    margin: 20px;
  }

  span {
    color: var(--color-tertiary);
  }

  .contactBlock {
    display: flex;
    width: 90%;
    margin: auto auto;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .contactCard {
    display: flex;
    flex-direction: row;

    a {
      text-decoration: none;
      font-family: var(--font-body);
      margin-left: 10px;
    }
  }

  .contactInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .react-icons {
    font-size: 50px;
    color: white;
  }
`;
