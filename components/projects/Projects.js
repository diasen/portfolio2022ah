import React from 'react';
import { ProjectsSection } from './style';

function Projects() {
  const projectsList = [
    {
      title: 'Padel House - E-commerce padel store',
      description:
        'This is my third semester project. I was asked to create a e-commerce website with product(s) of our choosing. Padel tennis have recently become a national phenomenon and I personally find it enjoyable.',
      link: 'https://festive-shannon-1f0e8b.netlify.app/',
      image: '/images/padelhouse.png',
    },
    {
      title: 'The Gourmet Journal - Food & wine blog',
      description:
        'This is my second semester project. My criteria was to make an blog page where we could choose our own theme. I have a passion for food and wine, so the choise were simple.',
      link: 'https://eloquent-ptolemy-c81500.netlify.app',
      image: '/images/gourmetjournal.png',
    },
    {
      title: 'Community Science Museum',
      description:
        'This is my first semester project and were asked to develop a website for the new Community science museum. The page should appeal to both a young and grown up audience, displaying everything they can offer.',
      link: 'https://hopeful-goodall-2dbf41.netlify.app',
      image: '/images/comunitySm.jpg',
    },
    {
      title: 'Rainydays - Clothing Store',
      description:
        ' This is my first ever project as a Front-End student in the subject Design 1. I got some different themes to choose from and I had to design and create a fully working prototype in Adobe XD.',
      link: 'https://vigilant-dubinsky-f88f55.netlify.app',
      image: '/images/rainydays.JPG',
    },

    {
      title: 'Donationly - Simplyfied donating page',
      description:
        ' This is my course assignment in Iteraction design. I was asked to make an donating page that would make it easier to donate any amount divided betweene different providers.',
      link: 'https://vibrant-minsky-cea1c1.netlify.app/index.html',
      image: '/images/donationly.jpg',
    },
    {
      title: 'JS Frameworks - Course assignment',
      description:
        ' In this project I was asked to create an app with login functionality. The app should have the following parths: /details" "/contact" "/login" "/admin" The admin path wont appear in your navigation.',
      link: 'https://peaceful-nougat-3f1a65.netlify.app/',
      image: '/images/jsframeworksca.png',
    },
    {
      title: 'Husløs Pizza - Food/restaurant',
      description:
        ' This is my last project exam. I managed to get a real world client and developed fully functional website for his restaurant',
      link: 'https://storied-sable-f9d3e1.netlify.app/',
      image: '/images/huslos.png',
    },
  ];
  return (
    <ProjectsSection>
      <div className='projectsHeading'>
        <h4>Projects</h4>
      </div>
      <div className='projectsContainer'>
        <div className='projectBlock'>
          {projectsList.map(({ link, title, description, image }) => (
            <div className='card' key={title}>
              <img alt='project image' src={image} />
              <div className='text'>
                <h2 className='hover-text'>{title}</h2>
                <p className='hover-text'>{description}</p>
                <p className='hover-text'>
                  <a href={link}>
                    <span>Click here</span> to go to the site
                  </a>
                </p>
                <p className='hover-text githubRepo'>
                  <a href={link}>or click here to see Github repo</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProjectsSection>
  );
}

export default Projects;
