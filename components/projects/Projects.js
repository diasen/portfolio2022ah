import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.div`
  background: var(--color-secondary);
  height: 600px;
`;

const ProjectsContainer = styled.div`
  border: 1px solid #red;
`;

function Projects() {
  return (
    <ProjectsSection>
      <h2>Projects</h2>
      <ProjectsContainer>
        <div class='card'>
          <img src='/img/padelhouse.png' />
          <div class='text'>
            <h2 class='hover-text'>Padel House - E-commerce padel store</h2>
            <p class='hover-text'>
              This is my third semester project. We were asked to create a
              e-commerce website with product(s) of our choosing. Padel tennis
              have recently become a national phenomenon and I personally find
              it enjoyable.
            </p>
            <p class='hover-text'>
              <a href='https://festive-shannon-1f0e8b.netlify.app/'>
                <span>Click here</span> to go to site
              </a>
            </p>
          </div>
        </div>
      </ProjectsContainer>
    </ProjectsSection>
  );
}

export default Projects;
