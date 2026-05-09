import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { siteData } from "../../constants/siteData";

export const HeroSection = () => {
  return (
    <div className="relative bg-putih-hangat overflow-hidden border-b border-krem">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMnYtNGg0VjRoLTR6TTM2IDY0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00ek0xOCAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMnYtNGg0VjRoLTR6TTE4IDY0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00eiIgZmlsbD0iIzhhNWEzMiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-50 pointer-events-none"></div>
      <Container className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-coklat-gelap leading-tight mb-6">
            {siteData.tagline}
          </h1>
          <p className="text-lg sm:text-xl text-soga mb-10 leading-relaxed">
            {siteData.heroText}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              href={`https://wa.me/62${siteData.kontak.whatsapp.substring(1)}?text=Halo%20Sanggar%20Putra%20Satria%20Laras%2C%20saya%20ingin%20bertanya%20tentang%20pementasan.`}
              variant="primary"
            >
              Hubungi Sanggar
            </Button>
            <Button to="/tentang" variant="outline">
              Tentang Kami
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
