import { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import useNavBarAnimation from '../../hooks/navBarAnimation/useNavBarAnimation'; // Importa el hook de scroll

import './navbarAnimation.css';

export const NavBarSticky = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolling = useNavBarAnimation(); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`fixed w-full text-white z-50 ${scrolling ? 'navbar-background' : ''}`}>
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
            offset={-50}
            duration={1000}
            className="nav-link hidden md:block cursor-pointer"
          >
            Sobre Nosotros
          </Link>
          <Link
            to="Servicios"
            smooth={true}
            offset={-70}
            duration={1000}
            className="nav-link hidden md:block cursor-pointer"
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
            className="nav-link hidden md:block cursor-pointer"
          >
            Equipo
          </Link>
          <Link
            to="Contactanos"
            smooth={true}
            offset={-70}
            duration={1000}
            className="nav-link hidden md:block cursor-pointer"
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
          className="nav-link block py-2 cursor-pointer"
          onClick={toggleMenu}
        >
          Sobre Nosotros
        </Link>
        <Link
          to="Servicios"
          smooth={true}
          offset={-70}
          duration={1000}
          className="nav-link block py-2 cursor-pointer"
          onClick={toggleMenu}
        >
          Servicios
        </Link>
        <Link
          to="Equipo"
          smooth={true}
          offset={-70}
          duration={1000}
          className="nav-link block py-2 cursor-pointer"
          onClick={toggleMenu}
        >
          Equipo
        </Link>
        <Link
          to="Contactanos"
          smooth={true}
          offset={-70}
          duration={1000}
          className="nav-link block py-2 cursor-pointer"
          onClick={toggleMenu}
        >
          Contacta con Nosotros
        </Link>
      </div>
    </nav>
  );
};
