import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";
import Container from "../Components/ui/Container";
import SectionHeader from "../Components/ui/SectionHeader";
import Card from "../Components/ui/Card";
import Button from "../Components/ui/Button";
import { siteData } from "../constants/siteData";

export const Contact = () => {
  const waLink = `https://wa.me/62${siteData.kontak.whatsapp.substring(1)}?text=Halo%20Sanggar%20Putra%20Satria%20Laras%2C%20saya%20ingin%20bertanya%20tentang%20pementasan.`;

  return (
    <div className="flex flex-col min-h-screen bg-putih-hangat font-sans text-coklat-gelap">
      <Navbar />
      <main className="flex-grow py-16 lg:py-24">
        <Container>
          <SectionHeader 
            title="Hubungi Sanggar" 
            subtitle="Untuk undangan pementasan, kerja sama budaya, dokumentasi, atau diskusi kegiatan, silakan hubungi narahubung resmi sanggar."
          />

          <div className="max-w-3xl mx-auto mt-12">
            <Card className="p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emas-redup/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="space-y-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-start gap-4 pb-8 border-b border-krem">
                  <div className="w-12 h-12 bg-soga/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-soga" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-serif text-coklat-gelap mb-1">Alamat Sanggar</h3>
                    <p className="text-soga leading-relaxed">{siteData.kontak.alamat}</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start gap-4 pb-8 border-b border-krem">
                  <div className="w-12 h-12 bg-soga/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-soga" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-serif text-coklat-gelap mb-1">Email Resmi</h3>
                    <a href={`mailto:${siteData.kontak.email}`} className="text-soga hover:text-emas-redup transition-colors">
                      {siteData.kontak.email}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start gap-4 pb-8 border-b border-krem">
                  <div className="w-12 h-12 bg-soga/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-soga" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-serif text-coklat-gelap mb-1">Media Sosial</h3>
                    <div className="text-soga space-y-1">
                      <p>Instagram / Twitter: {siteData.kontak.mediaSosial.instagram}</p>
                      <p>Facebook: {siteData.kontak.mediaSosial.facebook}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between bg-krem/30 p-6 rounded-2xl">
                  <div className="mb-4 sm:mb-0 text-center sm:text-left">
                    <h3 className="text-lg font-bold font-serif text-coklat-gelap mb-1">WhatsApp Narahubung</h3>
                    <p className="text-soga">Sdr. {siteData.kontak.narahubung} - {siteData.kontak.whatsapp}</p>
                  </div>
                  <Button href={waLink} variant="primary">
                    Chat WhatsApp
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
