"use client";
import React, { useState, useEffect } from "react";
import { images } from "@/data/gallerySectionData";

export default function Gallery() {
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);

  const handlePrev = () => {
    setSelectedImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Escuchar el teclado solo cuando el lightbox está activo
  useEffect(() => {
    if (selectedImgIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedImgIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImgIndex]);

  return (
    <section id="galeria" className="px-6 py-12">
      <h2 className="text-3xl text-[#C00101] mb-10 mt-10 text-center">
        Galería
      </h2>

      {/* Grid compacto: primeras 4 imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.slice(0, 4).map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-md cursor-pointer"
            onClick={() => setSelectedImgIndex(index)}
          >
            <img
              src={img.src}
              alt={img.alt} // accesibilidad
              className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImgIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImgIndex(null)}
        >
          {/* Flecha izquierda */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-5 text-white text-3xl font-bold hover:text-gray-400 transition-colors"
          >
            ‹
          </button>

          {/* Imagen */}
          <img
            src={images[selectedImgIndex].src}
            alt={images[selectedImgIndex].alt}
            className="max-h-[90%] max-w-[90%] rounded-2xl shadow-2xl"
          />

          {/* Flecha derecha */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-5 text-white text-3xl font-bold hover:text-gray-400 transition-colors"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
