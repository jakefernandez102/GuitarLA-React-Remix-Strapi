import { Link } from '@remix-run/react';

import Logo from '../../public/img/logo.svg';
import Navegacion from './navegacion';

const Header = () => {




  return (
    <header className="header">
        <div className="contenedor barra">
            <Link className="logo" to='/'>
                <img 
                    alt='Imagen logotipo' className='logo' 
                    src={Logo}>
                </img>
            </Link>

            <Navegacion/>
        </div>
    </header>
  )
}

export default Header
