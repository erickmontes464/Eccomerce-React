import React from 'react'
import "../css/footer.css";
import { BsFacebook, BsWhatsapp, BsTelegram, BsYoutube,BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className='d-flex justify-content-around pt-4'> 
        <ul>
          <p>Sobre Nosotros</p>
          <p>Nuestra Ventajas</p>
          <p>Nuestras Tiendas</p>
          <p>Preguntas Frecuentes</p>
        </ul>
        <ul>
          <p>Comprar con Confianza</p>
          <p>Política de Devoluciones</p>
          <p>Política de Privacidad</p>
          <p>Políticas Comerciales</p>
          <p>Políticas de Envio</p>
        </ul>
        <ul>
          <p className='none'>!RECIBE NUESTRAS PROMOCIONES¡</p>
          <input type="text" className='input-footer mb-3' placeholder='Ingresa Email'/>
          <button className='btn btn-light w-100'>SUSCRIBETE AHORA</button>
          <div className='d-flex justify-content-evenly redes-footer mt-2'>
            <a href='/'><BsFacebook /></a>
            <a href='/'><BsWhatsapp /></a>
            <a href='/'><BsTelegram /></a>
            <a href='/'><BsYoutube /></a>
            <a href='/'><BsInstagram /></a>
          </div>  
            
        </ul>
      </div>
        
      <hr className='m-1'/>
      <span className='d-flex justify-content-center pb-1'> © Fashion Shop</span>
    </footer>
  )
}

export default Footer
