import Image from 'next/image';
import { Wrapper, BtnContainer } from './style';

const HeroBanner = () => {
  return (
    <Wrapper>
      <Image
        alt='logo'
        src='/images/profilepic.JPG'
        height={220}
        width={200}
      ></Image>
      <BtnContainer>
        <h1>Hi, I’m Alexander.</h1>
        <p>
          I'm currently completing my Front-end development degree at Noroff.
        </p>
      </BtnContainer>
    </Wrapper>
  );
};

export default HeroBanner;
