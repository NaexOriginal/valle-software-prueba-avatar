import { Link, animateScroll as scroll } from "react-scroll"


export const NavBarSticky = () => {
  return (
    <header className='fixed top-0 w-full flex justify-center p-5 bg-gray-900 text-white z-50'>
      <nav>
        <ul className='flex items-center space-x-12'>
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
            <img 
              src="/LogoValleDelSoftware.svg" 
              alt="Logo Valle Software" 
              onClick={() => scroll.scrollToTop()}
              className='w-12 h-12'
            />
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
      </nav>
    </header>
  )
}
