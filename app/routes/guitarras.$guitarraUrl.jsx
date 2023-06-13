import { useLoaderData, useOutletContext } from '@remix-run/react';
import { useState } from 'react';

import { getGuitarra } from '../models/guitarras.server';
import styles from '../styles/guitarras.css';

export async function loader({params}){
  // console.log(params)
  const{guitarraUrl} = params;
  // console.log(guitarraUrl)
  const guitarra = await getGuitarra(guitarraUrl);
  // console.log('length: ',guitarra)
  
  if(guitarra.data.length === 0){
    throw new Response('',{
      status:404,
      statusText:'Guitarra No encontrada'
    })
  }


  return guitarra;
}


export function meta({ data }) {

  // console.log('esta es mi DAATAA: ',data)

  if (!data || !data.data || data.data.length === 0) {
    return [
      {
        title: "GuitarLA - Guitarra no encontrada",
      },
    ];
  }
  
  if(data.data.length > 0){
    const nombre = data.data[0].attributes.nombre;
    return [
      {
        title: `GuitarLA - ${nombre}`,
      },
    ];
  }
}


export function links(){
  return [
    {
      rel:'stylesheet',
      href:styles
    }
  ]
}




const Guitarra = () => {
  
  const [cantidad,setCantidad]=useState(0);
  const {agregarCarrito} = useOutletContext();

  const guitarra = useLoaderData();
  const {nombre, precio, descipcion,imagen} = guitarra.data[0].attributes;

  const handleSubmit = e => {
    e.preventDefault();

    if(cantidad < 1){
      alert('Debes seleccionar una cantidad')
      return;
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen:imagen.data[0].attributes.url,
      nombre,
      precio,
      cantidad
    }
    agregarCarrito(guitarraSeleccionada);
  }

  return (
    <main className='contenedor guitarra'>
      <img className='imagen' src={imagen.data[0].attributes.url} alt={`imagen de la guitarra ${nombre}`} />
      
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descipcion}</p>
        <p className="precio">${precio}</p>

        <form onSubmit={handleSubmit} className='formulario'>
          <label htmlFor='cantidad'>Cantidad</label>
          <select
                onChange={e => setCantidad(parseInt(e.target.value))}
                name="cantidad" 
                id="cantidad"
          >
            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input  type="submit" 
                  value='Agregar al carrito'
          />
        </form>
      </div>
    </main>
  )
}

export default Guitarra
