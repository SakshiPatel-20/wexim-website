import React, { useState, useEffect } from 'react';
import './Navbar.css';
import '../App.css';
import BlackLogo from '../images/logo-black.png';
import WhiteLogo from '../images/logo-white.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setNavScroll(window.scrollY >= 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    
  }, []);
  

  const mobileMenu = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#team', text: 'Team' },
    { href: '#work', text: 'Work' },
    { href: '#price', text: 'Pricing' },
    { href: '#app', text: 'App' },
    { href: '#blog', text: 'Blog' },
    { href: '#contact', text: 'Contact' },
  ];

  const mobileIcons = [
    {
      class: 'facebook-text-hvr',
      icon: 'fa-brands fa-facebook-f'
    },
    {
      class: 'instagram-text-hvr',
      icon: 'fa-brands fa-instagram'
    },
    {
      class: 'twitter-text-hvr',
      icon: 'fa-brands fa-twitter'
    },
  ];

  return (
    <>
      <nav className={`navbar navbar-top-default navbar-expand-lg navbar-simple nav-line ${navScroll ? 'fixed' : ''}`}>
        <div className="container">
          <div className="collapse navbar-collapse">
            <div className="navbar-nav w-100 alt-font">
              {mobileMenu.slice(0, 4).map((item, index) => (
                <a key={index} className={`nav-link scroll`} href={item.href}>
                  {item.text}
                </a>
              ))}
              <div className="nav-link scroll logo-image">
                <img src={navScroll ? BlackLogo : WhiteLogo} alt="Logo" />
              </div>
              {mobileMenu.slice(4).map((item, index) => (
                <a key={index + 4} className={`nav-link scroll`} href={item.href}>
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className='mobile-menu' onClick={toggleMenu}>
          <img src={navScroll ? BlackLogo : WhiteLogo} />
          <span className="menu-line">
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </span>
        </div>
      </nav>

      {isMenuOpen && (
        <div className='side-menu-div'>
          <div className="side-menu side-menu-active">
            <div className="inner-wrapper">
              <span className="btn-close" onClick={toggleMenu}></span>
              <nav className="side-nav w-100">
                <ul className="navbar-nav">
                  {mobileMenu.map((menu, menuKey) => (
                    <li className="nav-item" key={menuKey}>
                      <a className={`nav-link scroll`} href={menu.href} onClick={toggleMenu}>
                        {menu.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="side-footer text-white w-100">
                <ul className="social-icons-simple">
                  {mobileIcons.map((mobIcon, index) => (
                    <li key={index}>
                      <a className={mobIcon.class}><i className={mobIcon.icon}></i></a>
                    </li>
                  ))}
                </ul>
                <p className="text-white">© 2019 Wexim. Made With Love by Themesindustry</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
