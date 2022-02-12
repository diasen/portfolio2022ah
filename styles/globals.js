import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyle = createGlobalStyle`
:root {
    --font-heading: 'Merriweather', serif;
    --font-body: 'Roboto', sans-serif;
  
    /* FONT SIZES */
    --font-size-base: 16px;
    --font-size-xxs: 0.296rem;
    --font-size-xs: 0.444rem;
    --font-size-sm: 0.667rem;
    --font-size: 1rem;
    --font-size-md: 1.5rem;
    --font-size-lg: 2.25rem;
    --font-size-xl: 3.375rem;
    --font-size-xxl: 5.068rem;
    --font-size-huge: 7.594rem;
    --font-size-jumbo: 11.391rem;
  
    /* SPACING */
    --size-xxs: 4px;
    --size-xs: 7px;
    --size-sm: 11px;
    --size: 16px;
    --size-md: 24px;
    --size-lg: 36px;
    --size-xl: 54px;
    --size-xxl: 81px;
    --size-huge: 121px;
    --size-jumbo: 182px;
  
    /* COLORS */
    --color-primary: #242734;
    --color-secondary: #3C3E50;
    --color-tertiary: #EE5C30;
    --color-white: #F6F6F6;
    --color-black: #262626;
  
    --c-action: var(--color-secondary);
    --c-danger: rgb(190, 47, 47);
    --c-success: var(--color-primary);
    --c-info: var(--color-tertiary);
    --c-bg: var(--color-primary);
    --c-text: var(--color-black);
    --c-text--inverse: var(--color-white);
    --c-disabled: var(--color-quaternary);
  
    /* RADIUS */
    --radius-base: 6px;
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 10px;
  
    /* Animation speed */
    --speed-base: 300ms;
    --speed-fast: 120ms;
    --speed-medium: 200ms;
    --speed-slow: 500ms;
  
    --animate-duration: var(--speed-base);
    --animate-delay: var(--speed-fast);
  
    /* Z-index */
    --z-base: 300;
    --z-ground: 400;
    --z-cieling: 1000;
    --z-sky: 9999;
  
    /* Elevation */
    --shadow-base: 0 2px 2px 0 rgb(0 0 0 / 14%);
    --shadow-1: 0 3px 4px 0 rgb(0 0 0 / 14%);
    --shadow-2: 0 5px 6px 0 rgb(0 0 0 / 16%);
    --shadow-3: 0 8px 10px 0 rgb(0 0 0 / 22%);


    ${media.greaterThan('huge')`
    --font-size-base: 18px;
    --size-xxs: 6px;
    --size-xs: 8px;
    --size-sm: 13px;
    --size: 20px;
    --size-md: 30px;
    --size-lg: 40px;
    --size-xl: 58px;
    --size-xxl: 92px;
    --size-huge: 130px;
    --size-jumbo: 150px;
    `};

  
 
  
   html {
      margin: 0;
	    width: 100%;
	    height: 100%;
      padding:0;
  }

    body, #root, .App {
    height: 100%;
    > div {
      height: 100%;
    }
  }

  body {
    margin:0;
    padding:0;
    background: #092756;
    background: -moz-radial-gradient(
        0% 100%,
        ellipse cover,
        rgba(104, 128, 138, 0.4) 10%,
        rgba(138, 114, 76, 0) 40%
      ),
      -moz-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
            100%),
      -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -webkit-radial-gradient(
        0% 100%,
        ellipse cover,
        rgba(104, 128, 138, 0.4) 10%,
        rgba(138, 114, 76, 0) 40%
      ),
      -webkit-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(
              42,
              60,
              87,
              0.4
            )
            100%),
      -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -o-radial-gradient(
        0% 100%,
        ellipse cover,
        rgba(104, 128, 138, 0.4) 10%,
        rgba(138, 114, 76, 0) 40%
      ),
      -o-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
            100%),
      -o-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -ms-radial-gradient(
        0% 100%,
        ellipse cover,
        rgba(104, 128, 138, 0.4) 10%,
        rgba(138, 114, 76, 0) 40%
      ),
      -ms-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
            100%),
      -ms-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -webkit-radial-gradient(
        0% 100%,
        ellipse cover,
        rgba(104, 128, 138, 0.4) 10%,
        rgba(138, 114, 76, 0) 40%
      ),
      linear-gradient(
        to bottom,
        rgba(57, 173, 219, 0.25) 0%,
        rgba(42, 60, 87, 0.4) 100%
      ),
      linear-gradient(135deg, #670d10 0%, #092756 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
  }
  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  p{
    color: var(--color-white);
    font-family: var(--font-body)
  }
  
  a {
    color: var(--color-white);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-white);
    font-family: var(--font-heading);
  }

`;
export default GlobalStyle;
