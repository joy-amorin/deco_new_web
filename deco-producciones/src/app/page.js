import Navbar from "./components/Navbar";
import HomeGallery from "./sections/HomeGallery";
import About from "./sections/About";
import Servicios from "./sections/Servicios";
import MarcasGaleria from "./sections/Marcas";
import Gallery from "./sections/Gallery";
import ContactCard from "./components/ContactCard";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HomeGallery />
      <About />
      <Servicios />
       < Gallery />
      <MarcasGaleria />
      <ContactCard />
     

    </div>
  );
}
