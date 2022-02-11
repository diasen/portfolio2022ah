import React from 'react';
import {
  SkillSection,
  SkillContainer,
  SkillDevelopment,
  SkillDesign,
  SkillBlock,
  SkillHeading,
  SkillBlockText,
} from './style';
import Image from 'next/image';

function Skill() {
  return (
    <SkillSection>
      <SkillHeading>
        <h2>Skill</h2>
      </SkillHeading>
      <SkillContainer>
        <SkillDevelopment>
          <SkillBlock>
            <h3>Development</h3>
          </SkillBlock>
          <SkillBlock>
            <Image
              alt='html logo'
              src='/images/hmtl.png'
              height={50}
              width={50}
            ></Image>
            <SkillBlockText>HTML5</SkillBlockText>
          </SkillBlock>

          <SkillBlock>
            <Image
              alt='css logo'
              src='/images/css.png'
              height={50}
              width={50}
            ></Image>
            <SkillBlockText>CSS3</SkillBlockText>
          </SkillBlock>

          <SkillBlock>
            <Image
              alt='javascript logo'
              src='/images/javascript.svg'
              height={50}
              width={50}
            ></Image>
            <SkillBlockText>Javascript</SkillBlockText>
          </SkillBlock>

          <SkillBlock>
            <Image
              alt='wordpress logo'
              src='/images/wordpress.png'
              height={50}
              width={50}
            ></Image>
            <SkillBlockText>Wordpress</SkillBlockText>
          </SkillBlock>

          <SkillBlock>
            <Image
              alt='boostrap logo'
              src='/images/bootstrap.svg'
              height={50}
              width={50}
            ></Image>
            <SkillBlockText>Boostrap</SkillBlockText>
          </SkillBlock>

          <SkillBlock>
            <Image
              alt='react logo'
              src='/images/react.svg'
              height={50}
              width={50}
            ></Image>
            <SkillBlockText>React</SkillBlockText>
          </SkillBlock>
        </SkillDevelopment>

        <SkillDesign>
          <SkillBlock>
            <h3>Design</h3>
          </SkillBlock>
          <SkillBlock>
            <Image
              alt='figma logo'
              src='/images/figma.svg'
              height={50}
              width={50}
            ></Image>
            <SkillBlockText>Figma</SkillBlockText>
          </SkillBlock>

          <SkillBlock>
            <Image
              alt='adobe xd logo'
              src='/images/adobexd.svg'
              height={50}
              width={50}
            ></Image>
            <SkillBlockText>Adobe XS</SkillBlockText>
          </SkillBlock>
        </SkillDesign>
      </SkillContainer>
    </SkillSection>
  );
}

export default Skill;
