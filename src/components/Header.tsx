import React, { useState, useEffect } from 'react';
import './Header.css';
import { useMediaQuery } from '../utils/useMediaQuery';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const matches = useMediaQuery('(min-width: 768px)');

  const handleMenuClick = () => {
    if (matches) {
      return;
    }
    setToggle(false);
    setMenuClicked(true);
  };

  // overflow hidden check is toggle is true
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [toggle]);
  return (
    <header>
      <nav className='nav-container'>
        <div className='logo-container'>
          <a href="/">
            <p className='heading'>
              <span className='span_hash'>#</span>CoachSamoZuo
            </p>
            <p className='subheading'>Make's a difference</p>
          </a>
        </div>
        <div className='contact-wrapper'>
          <a href='mailto:kontakt@maciejmartowicz.pl'>
            <i className='fa-solid fa-envelope'></i>
          </a>
          <a href='tel:+48602649588 '>
            <i className='fa-solid fa-phone'></i>
          </a>
        </div>
        {/* check if we are on mobile or not */}
        {matches && (
          <div className='nav-links-mobile'>
            <a className='link' href='/about'>
              O mnie
            </a>
            <a className='link' href='/portoflio'>
              Portfolio
            </a>
            <a className='link' href='/blog'>
              Blog
            </a>
            <a className='link' href='#contact'>
              Kontakt
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
            <a className='link-mobile' href='/about'>
              O mnie
            </a>
            <a className='link-mobile' href='/cooperate'>
              Portfolio
            </a>
            <a className='link-mobile' href='/blog'>
              Blog
            </a>
            <a className='link-mobile' href='#contact' onClick={handleMenuClick}>
              Kontakt
            </a>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
