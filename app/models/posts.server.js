export async function getPosts () {
    const respuesta = await fetch( `${ process.env.API_URL }/blogs?populate=imagen` );
    const resultado = await respuesta.json();

    return resultado;
}

export async function getPost ( url ) {

    console.log( 'URL: ', url );
    const resp = await fetch( `${ process.env.API_URL }/blogs?filters[url]=${ url }&populate=imagen` );
    return await resp.json();
}