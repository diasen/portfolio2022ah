import React from 'react';
import { SkillSection } from './style';

function Skill() {
  const skillList = [
    {
      title: 'HTML5',
      image: '/images/hmtl.png',
    },
    {
      title: 'CSS3',
      image: '/images/css.png',
    },
    {
      title: 'Javascript',
      image: '/images/javascript.svg',
    },
    {
      title: 'Wordpress',
      image: '/images/wordpress.png',
    },
    {
      title: 'Boostrap',
      image: '/images/bootstrap.svg',
    },
    {
      title: 'React',
      image: '/images/React.svg',
    },
    {
      title: 'Next.js',
      image: '/images/Nextjs-logo.svg',
    },
  ];

  const designList = [
    {
      title: 'Adobe XD',
      image: '/images/adobexd.svg',
    },
    {
      title: 'Figma',
      image: '/images/figma.svg',
    },
  ];

  return (
    <SkillSection id='skills'>
      <div className='skillHeading'>
        <h4>Skills</h4>
      </div>
      <div className='skillContainer'>
        <div className='skillDesign'>
          <div className='skillSubheading'>
            <h6>Development</h6>
          </div>
          <div className='skillBlock'>
            {skillList.map(({ image, title }) => (
              <div key={title} className='skillCard'>
                <img alt='skill Logo' src={image} className='skillImg' />
                <p className='skillBlockText'>{title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='skillDevelopment'>
          <div className='skillSubheading'>
            <h6>Design</h6>
          </div>
          <div className='skillBlock'>
            {designList.map(({ image, title }) => (
              <div key={title} className='skillCard'>
                <img alt='skill Logo' src={image} className='skillImg' />
                <p className='skillBlockText'>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SkillSection>
  );
}

export default Skill;
