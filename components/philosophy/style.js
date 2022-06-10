import styled from 'styled-components';

export const PhilosophySection = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;

  .philosophyHeader {
    width: 90%;
    margin: 0 auto;
  }

  h4 {
    font-size: 3.375rem;
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
    font-size: 1.125rem;
  }

  span {
    color: var(--color-tertiary);
    font-size: 1.475rem;
    font-weight: normal;
  }
`;
