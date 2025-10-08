import React from "react";
import { AiOutlineMail, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="text-center py-20 px-6 flex flex-col items-center"
    >
      <h2 className="text-3xl text-[#C00101] mb-8">
        Contacto
      </h2>

      <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-6">
        {/* WhatsApp */}
        <a
          href="https://wa.me/59895962760"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-800 hover:text-[#dc3545] transition-colors text-lg"
        >
          <AiOutlineWhatsApp className="text-2xl text-[#C00101]" />
          <span>095 962 760</span>
        </a>

        {/* Email */}
        <a
          href="mailto:decoproducciones@gmail.com"
          className="flex items-center gap-2 text-gray-800 hover:text-[#dc3545] transition-colors text-lg break-all justify-center"
        >
          <AiOutlineMail className="text-2xl text-[#C00101]" />
          <span>decoproducciones@gmail.com</span>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/decoproducciones.uy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-800 hover:text-[#dc3545] transition-colors text-lg"
        >
          <AiOutlineInstagram className="text-2xl text-[#C00101]" />
          <span>@decoproducciones.uy</span>
        </a>
      </div>
    </section>
  );
}
