import React, { useState }  from 'react'

import { Link } from 'react-router-dom'; 


import './About.scss'

const About = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };

  return (
    <>
    <div>
    <nav className='navbar'>
          <ul className={`nav-links ${menuVisible ? 'active' : ''}`}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>Sobre mí</Link>
            </li>
            <li>
              <Link to='/contacto'>Contacto</Link>
            </li>
          </ul>
          <div className='burger' onClick={toggleMenu}>
            <div className={`line1 ${menuVisible ? 'line1-active' : ''}`}></div>
            <div className={`line2 ${menuVisible ? 'line2-active' : ''}`}></div>
            <div className={`line3 ${menuVisible ? 'line3-active' : ''}`}></div>
          </div>
        </nav>
</div>
        </>

  )
}

export default About