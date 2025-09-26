import Navbar from "./components/Navbar";
import HomeGallery from "./components/HomeGallery";

export default function Home() {
  return (
    <div className="bg-[#f8f5f5] min-h-screen">
      <Navbar />
      <HomeGallery />
    </div>
  );
}
