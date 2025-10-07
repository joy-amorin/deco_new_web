import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ContactCard() {
  return (
    <section id="contacto" className="flex justify-center relative -top-14 my-16 px-4">
      <div className=" rounded-2xl border border-black bg-[#ede9e9] shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        {/* Título */}
        <h2 className="text-3xl mb-6 text-gray-900">Contacto</h2>

        {/* Iconos de contacto con texto */}
        <div className="flex flex-col gap-4 w-full">
          {/* WhatsApp */}
          <a
            href="https://wa.me/59895962760"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-[#dc3545] transition-colors text-lg"
          >
            <FaWhatsapp className="text-2xl  text-[#C00101]" />
            095962760
          </a>
          
           {/* Email */}
            <a
            href="mailto:decoproducciones@gmail.com"
            className="flex items-center gap-3 text-gray-700 hover:text-[#dc3545] transition-colors text-lg break-all"
            >
            <AiOutlineMail className="text-2xl  text-[#C00101] flex-shrink-0" />
            <span>{`decoproducciones@gmail.com`}</span>
            </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/decoproducciones.uy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-[#dc3545] transition-colors text-lg break-all"
          >
            <FaInstagram className="text-2xl text-[#C00101] flex-shrink-0" />
            @decoproducciones.uy
          </a>
        </div>
      </div>
    </section>
  );
}
