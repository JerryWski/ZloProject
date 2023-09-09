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

        <div className='list-wrapper'>
          <ul className='lists-mobile'>
            <li>Consulting</li>
            <li>Strategie</li>
            <li>Akademia</li>
            <li>Współpraca</li>
          </ul>
        </div>

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
        
      </nav>
    </header>
  );
};

export default Header;
