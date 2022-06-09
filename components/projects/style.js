import styled from 'styled-components';

export const ProjectsSection = styled.div`
  min-height: 600px;
  margin-bottom: 100px;

  .projectsHeading {
    width: 90%;
    margin: 50px auto;
  }

  h4 {
    font-size: 3.375rem;
    margin: 20px 0;
  }

  .projectBlock {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .projectsContainer {
    display: flex;
    flex-wrap: wrap;
  }

  .card {
    width: 450px;
    height: 310px;
    margin: 20px;
    display: inline-block;
    background-size: cover;
    position: relative;
    transition: all 0.4s ease-out;
    overflow: hidden;
    color: white;
    font-family: 'Roboto';
    border-radius: 10px;
  }

  .card img {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    transition: all 0.4s ease-out;
  }

  .card .text {
    position: absolute;
    padding: 20px;
    height: calc(100% - 60px);
  }

  .card h2 {
    font-weight: bold;
    margin: 1px 0 0 0;
    font-size: 1.25rem;
    transform: translateX(200px);
    font-family: 'Oswald', sans-serif;
  }

  .card p {
    font-weight: normal;
    margin: 20px 0 0 0;
    line-height: 25px;
    font-size: 1rem;
    transform: translateX(-200px);
    transition-delay: 0.2s;
    font-family: 'Open Sans', sans-serif;
  }

  .hover-text {
    opacity: 0;
    transition: all 0.6s ease-in-out;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
  }

  .card:hover {
    box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.64);
    transform: scale(1.05);
  }

  .card:hover img {
    opacity: 0.2;
  }

  .card:hover .hover-text {
    transform: translateX(0);
    opacity: 1;
  }

  .card:hover span {
    opacity: 1;
    transform: translateY(0px);
  }

  .hover-text a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    color: white;
    text-align: center;
    font-size: 1.15rem;
  }

  .hover-text span {
    color: #f25c05;
    font-size: 1.375rem;
  }

  .site-links {
    display: flex;
    flex-direction: column;
  }

  .gitCode-link {
    font-weight: lighter;
  }

  .githubRepo {
    font-size: 0.9rem !important;
    font-weight: light;
  }
`;
