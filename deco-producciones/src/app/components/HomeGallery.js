"use client";
import Image from "next/image";
import { homeGalleryImages } from "@/data/galleryData";
import "swiper/css";

export default function HomeGallery() {
  const principalImage = homeGalleryImages.find((img) => img.classes === "wide tall");
  const otherImages = homeGalleryImages.filter((img) => img.classes !== "wide tall");

  return (
    <section id="inicio" className="py-10">
      <div className="w-full mx-auto px-2 md:px-4 lg:px-8">

        {/* Título */}
        <h1 className="text-4xl text-[#C00101] mb-8 text-left mt-12">
          Deco Producciones
        </h1>

        {/* Mobile: 3 fotos apiladas */}
        <div className="grid grid-cols-1 gap-3 md:hidden mb-6">
          {[homeGalleryImages[2], homeGalleryImages[1], homeGalleryImages[0]].map((image, index) => (
            <div key={index} className="relative w-full aspect-[4/3] rounded-xl shadow-lg overflow-hidden">
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Desktop + Tablets: Grid responsive */}
        <div className="hidden md:block w-full">
          <div className="grid gap-2 grid-cols-5 md:auto-rows-[150px] lg:auto-rows-[200px] w-full">

            <div className="relative rounded-xl shadow-lg overflow-hidden">
              <Image src={otherImages[0]?.src} alt={otherImages[0]?.alt} fill className="object-cover" />
            </div>

            <div className="relative rounded-xl shadow-lg overflow-hidden">
              <Image src={otherImages[1]?.src} alt={otherImages[1]?.alt} fill className="object-cover" />
            </div>

            {/* Foto principal */}
            <div className="col-span-2 row-span-2 relative rounded-xl shadow-xl overflow-hidden">
              <Image src={principalImage?.src} alt={principalImage?.alt} fill className="object-cover" priority />
            </div>

            <div className="relative rounded-xl shadow-lg overflow-hidden">
              <Image src={otherImages[4]?.src} alt={otherImages[4]?.alt} fill className="object-cover" />
            </div>

            <div className="relative rounded-xl shadow-lg overflow-hidden">
              <Image src={otherImages[2]?.src} alt={otherImages[2]?.alt} fill className="object-cover" />
            </div>

            <div className="relative rounded-xl shadow-lg overflow-hidden">
              <Image src={otherImages[3]?.src} alt={otherImages[3]?.alt} fill className="object-cover" />
            </div>

            <div className="relative rounded-xl shadow-lg overflow-hidden">
              <Image src={otherImages[5]?.src} alt={otherImages[5]?.alt} fill className="object-cover" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
