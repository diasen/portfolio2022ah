import styled from 'styled-components';

export const PhilosophySection = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;

  .philosophyHeader {
    width: 90%;
    margin: 0 auto;
  }

  h3 {
    font-size: 5.063rem;
    margin: 20px 0;
  }

  .philosophyContent {
    justify-content: center;
    align-item: center;
    margin-top: 50px;
  }

  .philosophyText {
    margin: 20px auto;
    text-align: center;
    width: 90%;
  }

  span {
    color: var(--color-tertiary);
    font-size: 1.325rem;
    font-weight: bold;
  }
`;
