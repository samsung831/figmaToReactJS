import React from 'react';
import "./Header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return <header>
    <div className='wrapper'>
      <Navbar />
      <div className='cta'>
        <p className='course-name'>Sound Desing Masterclass</p>
        <h1>Lear the Art of Sound Design</h1>
        <a href='#' className='demo-btn'>
          Demo Lesson
        </a>
      </div>
    </div>
  </header>
};

export default Header