import imagen from '../../public/img/nosotros.jpg';
import nosotros from '../styles/nosotros.css';

export function meta(){
  return[
    {
      title:'GuitarLA - Nosotros',
      description:'Venta de guitarras, blog de musica'
    }
  ]
}

export function links(){

  return [
    {
      rel:'stylesheet',
      href:nosotros
    },
    {
      rel:'preload',
      href:imagen,
      as: 'image'
    }
  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">
        Nosotros
      </h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen nosotros" />

        <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, accusamus in voluptate debitis odit libero impedit unde animi architecto dolore iure, magni ipsam porro voluptas nisi explicabo consectetur eum expedita!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, accusamus in voluptate debitis odit libero impedit unde animi architecto dolore iure, magni ipsam porro voluptas nisi explicabo consectetur eum expedita!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, accusamus in voluptate debitis odit libero impedit unde animi architecto dolore iure, magni ipsam porro voluptas nisi explicabo consectetur eum expedita!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, accusamus in voluptate debitis odit libero impedit unde animi architecto dolore iure, magni ipsam porro voluptas nisi explicabo consectetur eum expedita!
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
