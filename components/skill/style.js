import styled from 'styled-components';

export const SkillSection = styled.div`
  min-height: 400px;
  margin-bottom: 100px;

  .skillHeading {
    display: flex;
    width: 90%;
    margin: auto auto;
  }

  .skillContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .skillDevelopment {
    display: flex
    flex-direction: column;
  }

  h4 {
    font-size: 3.375rem;
    margin: 20px 0;
  }

  h6 {
    font-size: 1.5rem;
  }

  .skillBlockText {
    font-size: 1rem;
    text-align:center;
  }

  .skillDesign {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .skillBlock {
    display: flex;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .skillCard {
    margin: 10px 10px
  }

  .skillImg {
    height: 100px;
    width: 100px;
  }

  @media (max-width: 768px) {
    .skillBlock {
      display: flex;
     justify-content: center;
    }

    .skillSubheading {
      width: 90%;
      margin: auto auto;
    }
  }
`;
