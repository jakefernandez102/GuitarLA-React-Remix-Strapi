import { useLoaderData } from 'react-router';

import Curso from '../components/curso';
import ListadoGuitarras from '../components/listado-guitarras';
import ListadoPosts from '../components/listado-posts';
import { getCurso } from '../models/curso.server';
import { getGuitarras } from '../models/guitarras.server';
import { getPosts } from '../models/posts.server';
import stylesPosts from '../styles/blog.css';
import stylesCurso from '../styles/curso.css';
import stylesGuitarras from '../styles/guitarras.css';

export function meta(){

}

export function links(){
  return[
    {
      rel:'stylesheet',
      href:stylesGuitarras
    },
    {
      rel:'stylesheet',
      href:stylesPosts
    },
    {
      rel:'stylesheet',
      href:stylesCurso
    },
  ]
}

export async function loader(){

  const [guitarras,posts,curso]= await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])

  //******es lo mismo pero mejora el performance con el anterior
  // const guitarras = await getGuitarras();
  // const posts = await getPosts()
  // console.log(guitarras)
  // console.log(posts)

  return {
    guitarras:guitarras.data,
    posts:posts.data,
    curso:curso.data
  }
}

const Index = () => {
  
  const {guitarras,posts,curso} = useLoaderData();
  
  // console.log(guitarras)
  // console.log(posts)

  return (
    <>
      <main className="contenedor">
      <ListadoGuitarras
        guitarras={guitarras}
      />
      </main>
    
    <Curso
      curso={curso.attributes}
    />

    <section className='contenedor'>
      <ListadoPosts
        posts={posts}
      />
    </section>


    </>
  )
}

export default Index
