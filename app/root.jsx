import { isRouteErrorResponse, Link, Links, LiveReload, Meta, Outlet, Scripts, useRouteError } from '@remix-run/react';
import { useEffect, useState } from 'react';
import Footer from '~/components/footer';
import Header from '~/components/header';
import styles from '~/styles/index.css';
import normalize from '~/styles/normalize.css';

export function meta(){

    return(
        [
            {
                charset:'utf-8',
                title:'GuitarLA - Remix',
                viewport:"width=device-width,initial-scale=1"
            }
        ]
    )
}



export function links(){
    return [
        {
            rel:'preconnect',
            href:'https://fonts.googleapis.com'
        },
        {
            rel:'preconnect',
            href:'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel:'stylesheet',
            href:'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: normalize
        },
        {
            rel: 'stylesheet',
            href: styles
        },

    ]
}

export default function App(){

    const carritoLS = typeof window !== 'undefined' ?  JSON.parse(localStorage.getItem('carrito')) ?? [] : null;
    const [carrito,setCarrito] = useState(carritoLS);

    useEffect(() => {
        localStorage.setItem('carrito',JSON.stringify(carrito))
    },[carrito])

    const agregarCarrito = guitarra =>{
        if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
            //iterar sobre el arreglo e identificar el elemento duplicado
            const carritoActualizado = carrito.map(guitarraState => {
                if(guitarraState.id === guitarra.id){
                    //reescribir la cantidad
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState;
            })
            //agregar al carrito
            setCarrito(carritoActualizado)
        } else{
            //registro nuevo, agregar al carrito 
            setCarrito([...carrito,guitarra])
        }
    }

    const actualizarCantidad = guitarra =>{
        const carritoActualizado = carrito.map(guitarraState => {
            if(guitarraState.id === guitarra.id){
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoActualizado);
    }

    const eliminarGuitarra = id =>{
        const carritoActualizado = carrito.filter(guitarraState => guitarraState.id != id );
        setCarrito(carritoActualizado);
    }

    return(
        <Document>
            <Outlet
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra
                }}
            />
        </Document>
    )

}
function Document({children}){
    return (
        <html lang="es">

            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header/>
                {children}

                <Footer/>
            </body>

            <Scripts/>
            <LiveReload/>
        </html>
    )
}

/**Manejo de errores */
export function CatchBoundary(){
   const error = useRouteError()

   if(isRouteErrorResponse(error)){
    return(
        <Document>
            <p className="error">
                {error.status} {error.statusText}
            </p>
            <Link className='error_enlace' to='/'>Deseas ir a la pagina de incio?</Link>
        </Document>
    )
   }
}

export function ErrorBoundary(){

    const error = useRouteError();
    // console.log('si me ejecute')
    if(isRouteErrorResponse(error)){
        return(
            <Document>
                <p className='error'>{error.status} {error.statusText}</p>
                <Link className='error_enlace' to='/'>Deseas ir a la pagina de incio?</Link>
            </Document>
        )
    }
}