import React from 'react'

export const NavBarSticky = () => {
  return (
    <header className='flex justify-between p-5'>
      <div>
        <h1 className='text-4xl font-bold'>Logo</h1>
      </div>

      <nav>
        <ul className='flex space-x-12'>
          <li>
            <a href="#">Sobre Nosotros</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Equipo</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
