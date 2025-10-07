"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { serviciosData } from "@/data/serviciosData";

// Imágenes por categoría
const imagenesCategoria = {
  "Dulces y postres": "/services/helados_en_cucurucho_coloridos.jpg",
  "Bebidas": "/services/jugos_naturales_coloridos.jpg",
  "Comida rápida": "/services/hamburguesas_jugosas_y_papa_fritas.jpg",
};

const Servicios = () => {
  const [categoriaAbierta, setCategoriaAbierta] = useState(null);
  const categoriaRefs = useRef({});
  const [isMobile, setIsMobile] = useState(false);

  // Detecta tamaño de pantalla
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const toggleCategoria = (categoria) => {
    setCategoriaAbierta(categoriaAbierta === categoria ? null : categoria);

    if (isMobile && categoriaRefs.current[categoria]) {
      categoriaRefs.current[categoria].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Bloque desplegable reutilizable
  const CartaServicios = ({ categoria }) => (
    <div className="mt-4 animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h3 className="text-2xl text-gray-800 font-semibold mb-6 pb-3 border-b-2 border-gray-200">
          {categoria}
        </h3>

        <ul className="space-y-4">
          {serviciosData[categoria].map((servicio, index) => (
            <li key={index} className="py-2 border-b last:border-0">
              <span className="block text-gray-900 font-semibold mb-2">
                {servicio.nombre}
              </span>

              {servicio.variantes ? (
                servicio.variantes.map((v, i) => (
                  <div
                    key={i}
                    className="menu-line flex justify-between items-center text-gray-700 text-sm mb-1"
                  >
                    <span className="description flex-1 pr-2">
                      {v.descripcion}
                    </span>
                    <span className="price flex-shrink-0 ml-2">{v.precio}</span>
                  </div>
                ))
              ) : (
                <div className="menu-line flex justify-between items-center text-gray-700 text-sm">
                  <span className="description flex-1 pr-2">
                    {servicio.detalle}
                  </span>
                  <span className="price flex-shrink-0 ml-2">
                    {servicio.precio || ""}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section id="servicios" className="py-16 px-6">
      <h2 className="text-3xl text-[#C00101] mb-12 mt-6 text-center">
        Nuestros Servicios
      </h2>

      <div className="max-w-6xl mx-auto">
        {/* Grid de categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {Object.entries(serviciosData).map(([categoria], idx) => (
            <div
              key={idx}
              className="flex flex-col"
              ref={(el) => (categoriaRefs.current[categoria] = el)}
            >
              <button
                onClick={() => toggleCategoria(categoria)}
                className={`relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer ${
                  categoriaAbierta === categoria
                    ? "ring-4 ring-[#C00101] shadow-2xl"
                    : ""
                }`}
              >
                <div className="aspect-[4/3] relative group">
                  <Image
                    src={imagenesCategoria[categoria]}
                    alt={categoria}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-xl md:text-2xl text-center font-semibold">
                      {categoria}
                    </h3>
                  </div>
                </div>
              </button>

              {/* En móviles, desplegable debajo de la imagen */}
              {isMobile && categoriaAbierta === categoria && (
                <CartaServicios categoria={categoria} />
              )}
            </div>
          ))}
        </div>

        {/* En escritorio, desplegable centrado y ancho debajo del grid */}
        {!isMobile && categoriaAbierta && (
        <div className="mt-8 w-full flex justify-center">
          <div className="w-full max-w-[1000px]">
            <CartaServicios categoria={categoriaAbierta} />
          </div>
        </div>
        )}

      </div>
    </section>
  );
};

export default Servicios;
