"use client"
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" navbar bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            className="h-10 w-auto"
            src="/navbar/Deco-logo.png"
            alt="Deco Producciones Logo"
          />
        </div>

          {/* Botón hamburguesa para móviles */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-[#C00101] hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Enlaces de navegación */}
          <div
          className={`${
            isOpen
              ? "absolute top-16 left-0 w-full bg-white shadow-md"
              : "hidden"
          } md:static md:flex md:justify-end`}
        >
          <ul className="navbar navbar-nav flex flex-col md:flex-row md:space-x-2 items-center p-4 md:p-0">
            <li>
              <a href="#inicio" className="nav-link text-[#C00101] py-2 block"
              onClick={() => setIsOpen(false)}
              >
                Inicio
              </a>
            </li>
            <li>
              <a href="#quienes-somos" className="nav-link text-[#C00101] py-2 block"
              onClick={() => setIsOpen(false)}
              >
                Quienes somos
              </a>
            </li>
            <li>
              <a href="#servicios" className="nav-link text-[#C00101] py-2 block"
              onClick={() => setIsOpen(false)}
              >
                Servicios
              </a>
            </li>
            <a href="#galeria" className="nav-link text-[#C00101] py-2 block"
            onClick={() => setIsOpen(false)}
            >
                Galeria
              </a>
            <li>
              <a href="#marcas" className="nav-link text-[#C00101] py-2 block"
              onClick={() => setIsOpen(false)}
              >
                Marcas
              </a>
            </li>
            <li>
              <a href="#contacto" className="nav-link text-[#C00101] py-2 block"
              onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/95962760"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C00101] text-white px-4 py-2 rounded hover:bg-[#dc3545] mt-2 md:mt-0"
              >
                Reserva tu stand
              </a>
            </li>
          </ul>
        </div>

        </div>
      </div>
    </nav>
  );
}
