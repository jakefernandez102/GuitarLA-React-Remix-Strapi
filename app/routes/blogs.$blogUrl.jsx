import { useLoaderData } from '@remix-run/react';

import { getPost } from '../models/posts.server';
import styles from '../styles/blog.css';
import { formatearFecha } from '../utils/helpers';

export function meta({data}){

  if(!data){
    console.log('data del meta: ',data)
    return[
      {
        title:'GuitarLA - Entrada no encontrada'
      }
    ]
  }
  return [
    {
      title:`GuitarLA - ${data.data[0].attributes.titulo}`
    }
  ]
}

export function links(){
  return [
    {
      rel:'stylesheet',
      href:styles
    }
  ]
}

export async function loader({params}){
  const { blogUrl} = params;
  // console.log('POSTURL',blogUrl);
  const post = await getPost(blogUrl);
  // console.log('POST SELECCIONADO',post)

  if(post.data.length === 0){
    throw new Response('',{
      status:404,
      statusText:'Entrada no encontrada'
    })
  }

  return post
}



const Blogs = () => {

  const post = useLoaderData();
  // console.log('Componenete BLOGS',post)
  // console.log( post.data.attributes)
  const {titulo,contenido,updatedAt, imagen } = post.data[0].attributes;
  
  return (
    <article className=' contenedor post mt-3'>
       <img className="imagen" src={imagen.data[0].attributes.formats.medium.url} alt={`Imagen blog ${titulo}`} />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className='fecha'>{formatearFecha(updatedAt)}</p>
                <p className="texto">{contenido}</p>
            </div>
    </article>
  )
}

export default Blogs;
