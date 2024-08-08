import { Link } from 'react-scroll';

import '../ui/background.css';

export const Footer = () => {
  return (
    <div className='bg-black-custom'>
      <footer className='flex flex-col items-center w-full pt-5 px-4'>
        <img 
          src="/LogoValleDelSoftware.svg" 
          alt="Logo Valle Software" 
          className="h-16 w-16 sm:h-20 sm:w-20 relative z-10"
        />

        <ul className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-12 pt-4'>
          <li>
            <Link
              to="Sobre-Nosotros"
              smooth={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer font-bold text-center"
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
              className="cursor-pointer font-bold text-center"
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
              className="cursor-pointer font-bold text-center"
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
              className="cursor-pointer font-bold text-center"
            >
              Contacta con Nosotros
            </Link>
          </li>
        </ul>

        <p className='pt-5 text-center text-sm'>©2024 Todos los Derechos Reservados por Valle del Software</p>
      </footer>
    </div>
  )
}
