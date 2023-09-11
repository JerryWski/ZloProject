import React, { useState } from 'react';
import './Header.css';
import { useMediaQuery } from '../utils/useMediaQuery';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const matches = useMediaQuery('(min-width: 768px)');
  return (
    <header>
      <nav className='nav-container'>
        <div className='logo-container'>
          <p className='heading'>
            <span className='span_hash'>#</span>CoachSamoZuo
          </p>
          <p className='subheading'>Make's a difference</p>
        </div>
        {/* check if we are on mobile or not */}
        {matches && (
          <div className='nav-links-mobile'>
            <a className='link' href='/about'>
              O mnie
            </a>
            <a className='link' href='/blog'>
              Blog
            </a>
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
            <motion.span
              animate={{ rotateZ: toggle ? 45 : 0, y: toggle ? 8 : 0 }}
              className='burger-line'
            ></motion.span>
            <motion.span
              animate={{ width: toggle ? 0 : 32 }}
              className='burger-line'
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggle ? -45 : 0,
                y: toggle ? -8 : 0,
                width: toggle ? 34 : 30,
              }}
              className='burger-line'
            ></motion.span>
          </div>
        )}
        {toggle && !matches && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            transition={{ stiffness: 50 }}
            initial={{ opacity: 0, x: 45 }}
            className='nav-links'
          >
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
              Portfolio
            </a>
            <a className='link-mobile' href='/blog'>
              Blog
            </a>
            <a className='link-mobile' href='/about'>
              Kontakt
            </a>
            
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
