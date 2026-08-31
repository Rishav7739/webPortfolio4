import React, { useState } from 'react'
import './Navbar.css'

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="header-navbar fixed-top">
      <nav className={`container-xxl navbar navbar-expand-lg py-3 ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'}`}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-3" href="#">
            Rishav Raj
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item mx-2">
                <a className="nav-link" href="#skills" onClick={closeMenu}>
                  SKILLS
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#portfolio" onClick={closeMenu}>
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#about" onClick={closeMenu}>
                  ABOUT
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#cv" onClick={closeMenu}>
                  CURRICULUM VITAE
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#contact" onClick={closeMenu}>
                  CONTACT
                </a>
              </li>
              <li className="nav-item">
                <button className="theme-toggle-btn" onClick={toggleTheme} title="Toggle Dark/Light Mode">
                  {theme === 'dark' ? (
                    <>
                      <i className="fa-solid fa-sun text-warning"></i> Light Mode
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-moon text-primary"></i> Dark Mode
                    </>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
