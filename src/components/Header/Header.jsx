import React from 'react';
import './Header.css';
import '../Navi/Navi.css';
import Nav from '../Navi/Navi';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Nav />
    {/* <nav className="navigation">
      <a className="navigation__link" href="#about">About</a>
      <a className="navigation__link" href="#services">Services</a>
      <a className="navigation__link" href="#contact">Contact</a>
    </nav> */}
  </header>
);

export default Header;
