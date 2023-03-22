import React from 'react'
import { FiShoppingCart, FiSearch, FiHeart } from "react-icons/fi";
import '../css/articulo.css';

function Articulo({ nombre, precio, imagen }) {
  return (
    <div className='container-articulo'>
      <div className='articulo'>
        <img className='w-100 h-100' src={imagen} alt='art1' />
        <div className='icons'>
          <span><FiShoppingCart /></span>
          <span><FiSearch /></span>
          <span><FiHeart /></span>
        </div> 
      </div>
      <div className='name-art'>
        <span>Polo blanco para hombre</span><br></br>
        <p>S/ 60.00</p>
      </div>
    </div>      
  )
}

export default Articulo;

