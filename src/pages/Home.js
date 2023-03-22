import React from 'react'
import Cartel1 from "../images/cartel1.webp";
import Articulo from '../componentes/Articulo';
import imgArt from '../images/polo.webp';
import '../css/home.css';


const Home = () => {
  const articulos = ['Juan','S/129','sad','asdsa','','','',''];
  return (
    <>
      <div className='contenedor pb-3'>

        <div className='carrusel'>
          <img src={Cartel1} alt='cartel'/>
        </div>

        <div className='d-flex justify-content-evenly bg-black text-white'>
          <h4>¡CELEBRA A PAPÁ!</h4>
          <h4>¡FELIZ DIA PAPÁ!</h4>
        </div>
        <h1 className='p-4 text-center'>Tendencia</h1>
        
        <div className='container contenedor-articulos p-4'>
          {
          articulos.map((element, index) => 
          <Articulo key={index}
          nombre = {'nombre'}
          precio = {'precio'}
          imagen = {imgArt} />
          )
        }
        </div>
        
      
      </div>

    </>
  )
};

export default Home;
