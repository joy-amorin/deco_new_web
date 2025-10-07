"use client";
import React, { useState } from "react";
import { images } from "@/data/gallerySectionData";

export default function Gallery() {
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="galeria" className="px-6 py-12">
      <h2 className="text-3xl text-[#C00101] mt-10 mb-10 text-center">
        Galería
      </h2>

      {/* Grid compacto: primeras 8 imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.slice(0, 8).map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-md cursor-pointer"
            onClick={() => setSelectedImgIndex(index)}
          >
            <img
              src={img.src}
              alt={img.alt} 
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
            onClick={handlePrev}
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
            onClick={handleNext}
            className="absolute right-5 text-white text-3xl font-bold hover:text-gray-400 transition-colors"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
