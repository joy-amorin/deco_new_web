import Navbar from "./components/Navbar";
import HomeGallery from "./sections/HomeGallery";
import About from "./sections/About";
import Servicios from "./sections/Servicios";
import MarcasGaleria from "./sections/Marcas";
import Gallery from "./sections/Gallery";

export default function Home() {
  return (
    <div className="bg-[#f8f5f5] min-h-screen">
      <Navbar />
      <HomeGallery />
      <About />
      <Servicios />
       < Gallery />
      <MarcasGaleria />
     

    </div>
  );
}
