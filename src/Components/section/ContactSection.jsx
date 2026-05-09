import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { siteData } from "../../constants/siteData";

export const ContactSection = () => {
  const waLink = `https://wa.me/62${siteData.kontak.whatsapp.substring(1)}?text=Halo%20Sanggar%20Putra%20Satria%20Laras%2C%20saya%20ingin%20bertanya%20tentang%20pementasan.`;

  return (
    <section className="py-24 bg-krem/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emas-redup/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-soga/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      
      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto bg-putih-hangat p-10 md:p-14 rounded-3xl shadow-lg border border-soga/10">
          <SectionHeader 
            title="Mari Bersinergi" 
            subtitle="Punya rencana kegiatan budaya atau pementasan? Mari berdiskusi dengan kami untuk mewujudkan acara yang berkesan dan penuh makna."
            className="mb-8"
          />
          <Button href={waLink} variant="primary" className="text-lg px-8 py-4">
            Hubungi via WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
