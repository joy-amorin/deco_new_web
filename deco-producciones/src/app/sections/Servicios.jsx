"use client";
import React, { useState } from "react";
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

  const toggleCategoria = (categoria) => {
    setCategoriaAbierta(categoriaAbierta === categoria ? null : categoria);
  };

  return (
    <section id="servicios" className="py-16 px-6">
      <h2 className="text-3xl text-[#C00101] mb-12 text-center">
        Nuestros Servicios
      </h2>

      <div className="max-w-6xl mx-auto">
        {/* Grid de categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {Object.entries(serviciosData).map(([categoria], idx) => (
            <div key={idx} className="flex flex-col">
              {/* Tarjeta de categoría con imagen */}
              <button
                onClick={() => toggleCategoria(categoria)}
                className={`relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer ${
                  categoriaAbierta === categoria ? "ring-4 ring-[#C00101] shadow-2xl" : ""
                }`}
              >
                {/* Contenedor con aspecto */}
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
                  {/* Overlay con degradado */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                  {/* Nombre de la categoría */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-xl md:text-2xl text-center font-semibold">
                      {categoria}
                    </h3>
                  </div>
                </div>


              </button>
            </div>
          ))}
        </div>

        {/* Contenido desplegable */}
        {categoriaAbierta && (
          <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-2xl text-gray-800 font-semibold mb-6 pb-3 border-b-2 border-gray-200">
                {categoriaAbierta}
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviciosData[categoriaAbierta].map((servicio, index) => (
                  <li
                    key={index}
                    className="p-4 hover:bg-gray-50 rounded-lg transition-colors border border-gray-100"
                  >
                    <div className="flex flex-col gap-2">
                      <h4 className="text-gray-900 font-semibold text-base">
                        {servicio.nombre}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {servicio.detalle}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Servicios;