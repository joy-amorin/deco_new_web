import Image from "next/image";

const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="py-16">
      <div className="w-full mx-auto px-2 md:px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-start md:gap-8">
          
          {/* Texto a la izquierda */}
          <div className="text-center md:text-left md:w-2/3 md:order-1 mb-16 max-w-3xl">

            <h2 className="text-3xl text-[#C00101] mb-4 mt-6">
              Transforma tus eventos con nuestros stands
            </h2>
            <p className="text-black text-base md:text-base leading-relaxed mb-4">
              En Deco Producciones, nos especializamos en ofrecer stands de comida y bebida que se adaptan a la 
              temática y estilo de cualquier evento, desde reuniones privadas hasta eventos corporativos, ofreciendo 
              una variedad de opciones para los invitados. Nos esforzamos por ofrecer un servicio cercano que añade un toque especial a cada ocasión.
            </p>
            <p className="text-black text-base md:text-base leading-relaxed mb-4">
              Nuestro profesionalismo nos ha permitido colaborar con reconocidas empresas y marcas 
              como <b>Huggies</b>, <b>Jetour</b>, <b>Tata</b>, <b>Darnel</b>, entre otras, garantizando siempre un servicio de calidad ajustado a las 
              necesidades de nuestros clientes. Además de Montevideo, nuestros stands han estado presentes en 
              localidades como Sauce, Colonia, Minas, Ciudad de la Costa y Maldonado.
            </p>
            <p className="text-black text-base md:text-base leading-relaxed">
              Nuestro objetivo es aportar valor a cada evento, añadiendo un toque distintivo que enriquece la
              experiencia de los asistentes.
            </p>
          </div>

          {/* Imagen a la derecha */}
          <div className="flex-shrink-0 mb-8 md:mb-0 md:order-2 w-full max-w-[320px] h-100 relative mx-auto md:w-[320px] mt-6">

            <Image
              src="/about/about_picture.jpg"
              alt="Stands de comida y bebida"
              fill
              className="rounded-lg object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
