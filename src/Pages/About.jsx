import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";
import Container from "../Components/ui/Container";
import SectionHeader from "../Components/ui/SectionHeader";
import Card from "../Components/ui/Card";
import { siteData } from "../constants/siteData";

export const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-putih-hangat font-sans text-coklat-gelap">
      <Navbar />
      <main className="flex-grow py-16 lg:py-24">
        <Container>
          <SectionHeader 
            title="Tentang Sanggar Putra Satria Laras" 
            subtitle="Menjaga denyut seni wayang, dakwah, dan kearifan lokal agar tetap hidup lintas generasi."
          />

          <div className="max-w-4xl mx-auto space-y-16">
            <section className="prose prose-lg prose-brown max-w-none text-soga">
              <p className="text-xl leading-relaxed text-coklat-gelap font-medium mb-6">
                Berpusat di Desa Bengle, Kecamatan Talang, Kabupaten Tegal, Sanggar Putra Satria Laras 
                merupakan ruang pelestarian, pembelajaran, dan pementasan seni wayang.
              </p>
              <p className="leading-relaxed">
                Kami hadir dengan misi memadukan nilai tradisi luhur, dakwah Islam yang membumi, humor segar, 
                serta pesan moral yang dekat dengan keseharian masyarakat. Melalui pendekatan yang adaptif, 
                sanggar ini berupaya memastikan kesenian wayang tidak sekadar menjadi artefak masa lalu, 
                melainkan tetap relevan dan dinikmati oleh berbagai kalangan di era modern.
              </p>
            </section>

            <section className="bg-krem rounded-3xl p-8 md:p-12 border border-soga/10 shadow-sm relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-emas-redup/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex flex-col items-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-soga/20 flex items-center justify-center border-4 border-putih-hangat shadow-md mb-4 overflow-hidden">
                    {/* Placeholder for Dalang's image */}
                    <span className="text-soga font-medium text-center px-4 text-sm">
                      Dokumentasi Sanggar
                    </span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold font-serif text-coklat-gelap mb-2">
                    {siteData.tokoh.nama}
                  </h3>
                  <p className="text-emas-redup font-medium mb-4">Dalang Wayang Santri</p>
                  <p className="text-soga leading-relaxed">
                    {siteData.tokoh.deskripsi}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-bold font-serif text-coklat-gelap mb-8 text-center">
                Nilai yang Kami Perjuangkan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <h4 className="text-xl font-bold font-serif text-coklat-gelap mb-3">1. Merawat Tradisi</h4>
                  <p className="text-soga text-sm leading-relaxed">
                    Menjaga keaslian pakem kesenian lokal sambil terus melakukan inovasi agar wayang 
                    dapat terus diterima oleh masyarakat dari masa ke masa.
                  </p>
                </Card>
                <Card>
                  <h4 className="text-xl font-bold font-serif text-coklat-gelap mb-3">2. Dakwah Budaya</h4>
                  <p className="text-soga text-sm leading-relaxed">
                    Menjadikan wayang sebagai media penyampaian pesan agama dan moral yang damai, 
                    egaliter, dan mudah dipahami tanpa menggurui.
                  </p>
                </Card>
                <Card>
                  <h4 className="text-xl font-bold font-serif text-coklat-gelap mb-3">3. Ruang Belajar</h4>
                  <p className="text-soga text-sm leading-relaxed">
                    Membuka pintu seluas-luasnya bagi generasi muda yang tertarik mempelajari 
                    seni pedalangan, karawitan, maupun manajemen pementasan.
                  </p>
                </Card>
              </div>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default About;
