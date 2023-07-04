import React, { useState } from 'react';

import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

import goni from '../../assets/img/laGoneta.png'
import burbujasVideo from '../../assets/img/burbujas.mp4';
import naming from '../../assets/img/naming.png'

import './Home.scss';

const Home = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className='home-container'>
      {/* Contenido de la página */}
      <video muted autoPlay loop>
        <source src={burbujasVideo} type="video/mp4" />
      </video>
      <div className="content-container">
        <img src={naming} alt="title" />

        {/* Navbar */}
        <nav className='navbar'>
          <ul className={`nav-links ${menuVisible ? 'active' : ''}`}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/sobre-mi'>Sobre mí</Link>
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

        {/* Resto del contenido */}
        <div className="inicio-image">
          <img src={goni} className='imagen-gon' />
        </div>

        <div className="redes-container">
          <div className="redes-icono">
            <a href="https://www.linkedin.com/in/gonzalo-marti-peirats/" target="_blank">
              <FaLinkedin size={50} />
            </a>
          </div>
          <div className="redes-icono">
            <a href="https://github.com/Goner10" target="_blank">
              <FaGithub size={50} />
            </a>
          </div>
          <div className="redes-icono">
            <a href="https://www.instagram.com/teslamotors/" target="_blank">
              <FaInstagram size={50} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
