import { Link } from '@remix-run/react';

import { formatearFecha } from '../utils/helpers';

const Post = ({post}) => {
    //   console.log(post)
    // console.log('desde post',post.id)
    
    const { id } = post;
    const { contenido,imagen, titulo, url,  publishedAt } = post.attributes;
    
    return (
        <article className="post">
            <img className="imagen" src={imagen.data[0].attributes.formats.small.url} alt={`Imagen blog ${titulo}`} />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className='fecha'>{formatearFecha(publishedAt)}</p>
                <p className="resumen">{contenido}</p>
                <Link className='enlace' to={`/blogs/${url}`}>Leer Post</Link>
            </div>
        </article>
  )
}

export default Post
