import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='py-3'>
      <ul className='nav flex-column'>
        <span className='text-center text-body-secondary'>
          Made by <a href='https://github.com/weeklies'>@weeklies</a>
        </span>
        <span className='text-center text-body-secondary py-3'>
          <a href='https://github.com/weeklies/resume-generator'>Source</a>
        </span>
      </ul>
    </footer>
  );
};

export default Footer;
