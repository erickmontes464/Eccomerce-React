import React from 'react'
import '../css/header.css';
import {NavLink, Link} from 'react-router-dom'
import Logo from '../images/logo.PNG';
import { AiOutlineSearch } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

const Header = () => {
  return (
    <>
    <header className='header-top-strip'>

    </header>
      <div className='d-flex justify-content-around'>
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
    </>
  )
}

export default Header
