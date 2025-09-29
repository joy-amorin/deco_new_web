import Navbar from "./components/Navbar";
import HomeGallery from "./sections/HomeGallery";
import About from "./sections/About";
import Servicios from "./sections/Servicios";

export default function Home() {
  return (
    <div className="bg-[#f8f5f5] min-h-screen">
      <Navbar />
      <HomeGallery />
      <About />
      <Servicios />

    </div>
  );
}
