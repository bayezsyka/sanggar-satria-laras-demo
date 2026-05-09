import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { siteData } from "../../constants/siteData";

export const ServiceSection = () => {
  return (
    <section className="py-20 bg-putih-hangat border-t border-krem">
      <Container>
        <SectionHeader 
          title="Layanan & Format Pementasan" 
          subtitle="Kami menghadirkan berbagai format pementasan dan kegiatan budaya yang disesuaikan dengan kebutuhan acara Anda."
        />
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {siteData.layanan.map((layanan, index) => (
            <div 
              key={index}
              className="bg-krem text-coklat-gelap px-6 py-3 rounded-full font-medium border border-soga/20 hover:border-soga hover:bg-soga hover:text-putih-hangat transition-all duration-300 shadow-sm"
            >
              {layanan}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServiceSection;
