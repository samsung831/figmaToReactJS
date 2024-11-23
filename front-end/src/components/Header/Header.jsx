import React from 'react';
import "./Header.css";

const Header = () => {
  return <header>
    <div className='wrapper'>
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