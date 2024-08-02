import { Link } from 'react-scroll';

import '../ui/background.css';

export const Footer = () => {
  return (
    <div className='bg-black-custom'>
      <footer className='flex flex-col items-center w-full pt-5'>
        <img src="/LogoValleDelSoftware.svg" alt="Logo Valle Software" className="h-20 w-20 relative z-10"/>

        <ul className='flex items-center space-x-12 pt-4'>
          <li>
            <Link
              to="Sobre-Nosotros"
              smooth={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer font-bold"
            >
              Sobre Nosotros
            </Link>
          </li>
            
          <li>
            <Link
              to="Servicios"
              smooth={true}
              offset={-70}
              duration={1000}
              className="cursor-pointer font-bold"
            >
              Servicios
            </Link>
          </li>

          <li>
            <Link
              to="Equipo"
              smooth={true}
              offset={-70}
              duration={1000}
              className="cursor-pointer font-bold"
            >
              Equipo            
            </Link>
          </li>

          <li>
            <Link
              to="Contactanos"
              smooth={true}
              offset={-70}
              duration={1000}
              className="cursor-pointer font-bold"
            >
              Contacta con Nosotros
            </Link>
          </li>
        </ul>

        <p className='p-5'>©2024 Todos los Derechos Reservados por Valle del Software</p>
      </footer>
    </div>
  )
}
