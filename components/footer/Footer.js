import React from 'react';

function Footer() {
  return (
    <div id='footer'>
      <div class='footer__container'>
        <a href='/index.html'>
          <img class='logo__footer' src='/img/logo3.svg' alt='' />
        </a>
        <p>
          Copyright © 2021 Alexander Hansen • Web Designer & Developer based in
          Sarpsborg
        </p>
        <div class='soMe'>
          <a href='https://github.com/diasen'>
            <i class='fab fa-github-square'></i>
          </a>
          <a href='/contact.html'>
            <i class='far fa-envelope'></i>
          </a>
          <a href='https://www.linkedin.com/in/alexander-hansen-ab83ab8a/'>
            <i class='fab fa-linkedin'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
