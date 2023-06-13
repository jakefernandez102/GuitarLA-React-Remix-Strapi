export async function getCurso () {

    const resp = await fetch( `${ process.env.API_URL }/curso?populate=imagen` );
    return resp.json();
}