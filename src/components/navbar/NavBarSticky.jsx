import { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

export const NavBarSticky = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='fixed top-0 w-full bg-gray-900 text-white z-50'>
      <nav className='flex justify-between items-center p-5'>
        <div className='flex items-center justify-center space-x-4 md:space-x-6 w-full'>
          <button
            className='md:hidden text-white focus:outline-none'
            onClick={toggleMenu}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
            </svg>
          </button>
          <Link
            to="Sobre-Nosotros"
            smooth={true}
            offset={-100}
            duration={1000}
            className="hidden md:block cursor-pointer font-bold"
          >
            Sobre Nosotros
          </Link>
          <Link
            to="Servicios"
            smooth={true}
            offset={-70}
            duration={1000}
            className="hidden md:block cursor-pointer font-bold"
          >
            Servicios
          </Link>
          <img
            src="/LogoValleDelSoftware.svg"
            alt="Logo Valle Software"
            onClick={() => scroll.scrollToTop()}
            className='w-12 h-12 cursor-pointer mx-auto'
          />
          <Link
            to="Equipo"
            smooth={true}
            offset={-70}
            duration={1000}
            className="hidden md:block cursor-pointer font-bold"
          >
            Equipo
          </Link>
          <Link
            to="Contactanos"
            smooth={true}
            offset={-70}
            duration={1000}
            className="hidden md:block cursor-pointer font-bold"
          >
            Contacta con Nosotros
          </Link>
        </div>
      </nav>
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 w-full bg-gray-900 text-center`}>
        <Link
          to="Sobre-Nosotros"
          smooth={true}
          offset={-100}
          duration={1000}
          className="block py-2 cursor-pointer font-bold"
          onClick={toggleMenu}
        >
          Sobre Nosotros
        </Link>
        <Link
          to="Servicios"
          smooth={true}
          offset={-70}
          duration={1000}
          className="block py-2 cursor-pointer font-bold"
          onClick={toggleMenu}
        >
          Servicios
        </Link>
        <Link
          to="Equipo"
          smooth={true}
          offset={-70}
          duration={1000}
          className="block py-2 cursor-pointer font-bold"
          onClick={toggleMenu}
        >
          Equipo
        </Link>
        <Link
          to="Contactanos"
          smooth={true}
          offset={-70}
          duration={1000}
          className="block py-2 cursor-pointer font-bold"
          onClick={toggleMenu}
        >
          Contacta con Nosotros
        </Link>
      </div>
    </header>
  );
};