import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/apartamentos', label: 'Apartamentos' },
  { to: '/favoritos', label: 'Favoritos' },
  { to: '/contacto', label: 'Contacto' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={closeMenu}>
          Nombre de la marca
        </NavLink>

        <button
          type="button"
          className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="main-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-menu"
          className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}
          aria-label="Navegación principal"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar