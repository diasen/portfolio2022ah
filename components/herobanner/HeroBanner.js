import Image from 'next/image';
import { HeroSection, HeroSectionText, HeroSectionImg, Heading } from './style';

const HeroBanner = () => {
  return (
    <HeroSection>
      <HeroSectionImg>
        <Image
          alt='logo'
          src='/images/profilepic.JPG'
          height={220}
          width={200}
        ></Image>
      </HeroSectionImg>
      <HeroSectionText>
        <Heading>Hi, I’m Alexander.</Heading>
        <p>
          I'm currently completing my Front-end development degree at Noroff.
        </p>
      </HeroSectionText>
    </HeroSection>
  );
};

export default HeroBanner;
