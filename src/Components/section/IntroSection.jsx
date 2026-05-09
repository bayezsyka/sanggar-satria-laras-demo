import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import { siteData } from "../../constants/siteData";

export const IntroSection = () => {
  return (
    <section className="py-20 bg-krem/30">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader 
              title="Profil Sanggar" 
              className="text-left"
            />
            <p className="text-lg text-soga leading-relaxed mb-6">
              {siteData.deskripsi}
            </p>
            <div className="bg-putih-hangat p-6 rounded-2xl border border-krem shadow-sm mt-8 relative">
              <div className="absolute top-0 left-6 -translate-y-1/2 bg-emas-redup text-putih-hangat px-4 py-1 rounded-full text-sm font-medium">
                Filosofi
              </div>
              <p className="text-coklat-gelap italic font-serif text-lg leading-relaxed pt-2">
                "{siteData.filosofi}"
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-serif text-coklat-gelap mb-6">Nilai Utama</h3>
            {siteData.nilaiUtama.map((nilai, index) => (
              <Card key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-krem rounded-full flex items-center justify-center text-soga font-bold text-xl font-serif">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-coklat-gelap mb-2 font-serif">
                    {nilai.judul}
                  </h4>
                  <p className="text-soga">
                    {nilai.deskripsi}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IntroSection;
