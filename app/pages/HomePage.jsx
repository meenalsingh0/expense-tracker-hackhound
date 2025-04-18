import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";
import About from './_components/About';
export default function HomePage(){
  return (
    <div>
        <Navbar />
        <HeroSection />
        <About />
    </div>
    )
}