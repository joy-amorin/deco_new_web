"use client"
import React from 'react';
import { marcas } from '@/data/marcasData';

export default function MarcasGaleria() {
  const tercio = Math.ceil(marcas.length / 3);
  const fila1 = marcas.slice(0, tercio);
  const fila2 = marcas.slice(tercio, tercio * 2);
  const fila3 = marcas.slice(tercio * 2);

  return (
    <section
      id="marcas"
      className="py-16 px-4 overflow-hidden"
      aria-labelledby="marcas-titulo"
    >
      <div className="text-center mb-12">
        <h2
          id="marcas-titulo"
          className="text-4xl text-[#C00101] mb-3"
        >
          Nos han elegido
        </h2>
        <p className="text-gray-700 text-lg font-medium">
          Eventos de <span className="text-[#C00101]">{marcas.length}+</span> marcas
        </p>
      </div>

      {/* Carruseles accesibles */}
      <div className="relative space-y-6" role="list" aria-label="Marcas que confiaron en nosotros">
        {/* Fila 1 */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll-right-infinite">
            {[...fila1, ...fila1].map((marca, index) => (
              <div
                key={`fila1-${index}`}
                role="listitem"
                tabIndex="0"
                aria-label={`Marca ${marca}`}
                className="flex-shrink-0 px-6 py-3 bg-white text-black border border-[#C00101] rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#C00101]/20 hover:border-[#dc3545] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#dc3545] cursor-pointer whitespace-nowrap"
              >
                {marca}
              </div>
            ))}
          </div>
        </div>

        {/* Fila 2 */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll-left-infinite">
            {[...fila2, ...fila2].map((marca, index) => (
              <div
                key={`fila2-${index}`}
                role="listitem"
                tabIndex="0"
                aria-label={`Marca ${marca}`}
                className="flex-shrink-0 px-6 py-3 bg-white text-black border border-[#C00101] rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#C00101]/20 hover:border-[#dc3545] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#dc3545] cursor-pointer whitespace-nowrap"
              >
                {marca}
              </div>
            ))}
          </div>
        </div>

        {/* Fila 3 */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll-right-slow-infinite">
            {[...fila3, ...fila3].map((marca, index) => (
              <div
                key={`fila3-${index}`}
                role="listitem"
                tabIndex="0"
                aria-label={`Marca ${marca}`}
                className="flex-shrink-0 px-6 py-3 bg-white text-black border border-[#C00101] rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#C00101]/20 hover:border-[#dc3545] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#dc3545] cursor-pointer whitespace-nowrap"
              >
                {marca}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 text-base">
          Llevamos sabor a cualquier evento
        </p>
      </div>

      <style jsx>{`
        @keyframes scrollRightInfinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollLeftInfinite {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-right-infinite {
          display: inline-flex;
          animation: scrollRightInfinite 30s linear infinite;
          will-change: transform;
        }

        .animate-scroll-left-infinite {
          display: inline-flex;
          animation: scrollLeftInfinite 35s linear infinite;
          will-change: transform;
        }

        .animate-scroll-right-slow-infinite {
          display: inline-flex;
          animation: scrollRightInfinite 40s linear infinite;
          will-change: transform;
        }

        /* Más rápido en móviles */
        @media (max-width: 640px) {
          .animate-scroll-right-infinite {
            animation-duration: 25s;
          }
          .animate-scroll-left-infinite {
            animation-duration: 25s;
          }
          .animate-scroll-right-slow-infinite {
            animation-duration: 25s;
          }
        }

        .animate-scroll-right-infinite:hover,
        .animate-scroll-left-infinite:hover,
        .animate-scroll-right-slow-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
