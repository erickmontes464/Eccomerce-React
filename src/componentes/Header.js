import React, { useState, useEffect } from 'react'
import '../css/header.css';
import {NavLink, Link} from 'react-router-dom'
import Logo from '../images/logo.PNG';
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";
import { CgShoppingCart } from "react-icons/cg";
import { FaArrowCircleUp } from "react-icons/fa";


const Header = () => {
  
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', mostrarBoton);
    return () => {
      window.removeEventListener('scroll', mostrarBoton);
    };
  }, []);

  const mostrarBoton = () => {
    /* Si el usuario ha desplazado hacia abajo más de 100 píxeles, mostramos el botón */
    if (window.pageYOffset > 100) { 
      setVisible(true);
    } else { /* De lo contrario, lo ocultamos */
      setVisible(false);
    }
  };

/* Desplazamos suavemente hacia arriba cuando se hace clic en el botón */
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <>
    <header className='header-top-strip'>

    </header>
      <div className='d-flex justify-content-around' id='vinculo'>
        <img className='logo' src={Logo} alt='Logo'/>   
        <div className='head-right'>
          <a href='/'>LOGIN</a>
          <span>|</span>
          <a href='/'>MI CUENTA</a>
          <span>|</span>
          <a href='/'>AYUDA</a>
        </div>
      </div>
      <div className='nav'>
        <NavLink to={'/'}>Inicio</NavLink>
        <NavLink to={'/categorias'}>Categorias</NavLink>
        <NavLink to={'/'}>Sobre Nosotros</NavLink>
        <NavLink to={'/'}><AiOutlineSearch /></NavLink>
        <NavLink to={'/'}><RiAccountCircleFill /></NavLink>
        <NavLink to={'/'}><CgShoppingCart /></NavLink>
        <NavLink to={'/'}><AiOutlineHeart /></NavLink>
      </div>
      {visible && <button className='btn-hight btn btn-dark pt-0' onClick={handleClick}><FaArrowCircleUp /></button>}
    </>
  )
}

export default Header
