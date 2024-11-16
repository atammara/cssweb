"use client"
import React, { useState } from 'react';
import '../../style/header.css';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Image src="/logo.png" alt="Logo" />
      </div>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="/" className="nav-item">Home</a>
        <a href="/living" className="nav-item">Living Room</a>
        <a href="/Explore" className="nav-item">Home Furniture</a>
        <a href="/Contact" className="nav-item">Contact Us</a>
      </nav>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Navbar;
