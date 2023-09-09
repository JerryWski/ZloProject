import React, { useState } from 'react';
import './Header.css';
import { useMediaQuery } from '../utils/useMediaQuery';

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const matches = useMediaQuery('(min-width: 768px)');
  console.log(matches);
  return (
    <header>
      <nav className='nav-container'>
        <div className='logo-container'>
          <p className='heading'>
            <span className='span_hash'>#</span>Coach SamoZło
          </p>
          <p className='subheading'>Make's a difference</p>
        </div>
        {/* check if we are on mobile or not */}
        {matches && (
          <div className='nav-links-mobile'>
            <a className='link' href='/consulting'>
              Consulting
            </a>
            <a className='link' href='/strategy'>
              Strategie
            </a>
            <a className='link' href='/acacdemy'>
              Akademia
            </a>
            <a className='link' href='/cooperate'>
              Współpraca
            </a>
          </div>
        )}

        {!matches && (
          <div
            onClick={() => setToggle((prevToggle) => !prevToggle)}
            className='hamburger'
          >
            <span className='burger-line'></span>
            <span className='burger-line'></span>
            <span className='burger-line'></span>
          </div>
        )}
        {toggle && !matches && (
          <div className='nav-links'>
            <a className='link-mobile' href='/consulting'>
              Consulting
            </a>
            <a className='link-mobile' href='/strategy'>
              Strategie
            </a>
            <a className='link-mobile' href='/acacdemy'>
              Akademia
            </a>
            <a className='link-mobile' href='/cooperate'>
              Współpraca
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
