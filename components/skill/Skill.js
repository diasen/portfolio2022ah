import React from 'react';
import {
  SkillSection,
  SkillContainer,
  SkillDevelopment,
  SkillDesign,
} from './style';
import Image from 'next/image';

function Skill() {
  return (
    <SkillSection>
      <h2>Skill</h2>
      <SkillContainer>
        <SkillDevelopment>
          <Image
            alt='logo'
            src='/images/profilepic.JPG'
            height={220}
            width={200}
          ></Image>
          <Image
            alt='css logo'
            src='/public/images/css.png'
            height={100}
            width={100}
          ></Image>
          <Image
            alt='javascript logo'
            src='/public/images/javascript.svg'
            height={100}
            width={100}
          ></Image>
          <Image
            alt='wordpress logo'
            src='/public/images/wordpress.png'
            height={100}
            width={100}
          ></Image>
          <Image
            alt='boostrap logo'
            src='/public/images/bootstrap.svg'
            height={100}
            width={100}
          ></Image>
          <Image
            alt='react logo'
            src='/public/images/react.svg'
            height={100}
            width={100}
          ></Image>
        </SkillDevelopment>
        <SkillDesign>
          <Image
            alt='figma logo'
            src='/public/images/figma.svg'
            height={100}
            width={100}
          ></Image>
          <Image
            alt='adobe xd logo'
            src='/public/images/adobexd.svg'
            height={100}
            width={100}
          ></Image>
        </SkillDesign>
      </SkillContainer>
    </SkillSection>
  );
}

export default Skill;
