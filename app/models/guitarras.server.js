export async function getGuitarras () {
    const respuesta = await fetch( `${ process.env.API_URL }/guitarras?populate=imagen` );
    const resultado = await respuesta.json();

    return resultado;
}

export async function getGuitarra ( url ) {

    // console.log( 'url: ', url );
    const resp = await fetch( `${ process.env.API_URL }/guitarras?filters[url]=${ url }&populate=imagen` );
    return await resp.json();
}