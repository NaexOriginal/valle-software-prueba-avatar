import { Link, animateScroll as scroll } from "react-scroll"


export const NavBarSticky = () => {
  return (
    <header className='flex justify-center p-5 bg-sky-950 bg-opacity-10 z-50'>
      <nav>
        <ul className='flex items-center space-x-12'>
          <li>
            <Link
              activeClass
              to="Sobre-Nosotros"
              smooth={true}
              offset={-70}
              duration={1000}
              className="cursor-pointer"
            >
              Sobre Nosotros
            </Link>
          </li>
            
          <li>
            <Link
              activeClass
              to="Servicios"
              smooth={true}
              offset={-70}
              duration={1000}
              className="cursor-pointer"
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
              activeClass
              to="Equipo"
              smooth={true}
              offset={-70}
              duration={1000}
              className="cursor-pointer"
            >
              Equipo            
            </Link>
          </li>

          <li>
            <Link
              activeClass
              to="Contactanos"
              smooth={true}
              offset={-70}
              duration={1000}
              className="cursor-pointer"
            >
              Contacta con Nosotros
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
