import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";
import HeroSection from "../Components/section/HeroSection";
import IntroSection from "../Components/section/IntroSection";
import ServiceSection from "../Components/section/ServiceSection";
import ContactSection from "../Components/section/ContactSection";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-putih-hangat font-sans text-coklat-gelap">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <IntroSection />
        <ServiceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
