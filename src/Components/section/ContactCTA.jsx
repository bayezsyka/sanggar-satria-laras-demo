import { createWhatsAppLink } from "../../lib/whatsapp";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";

const ContactCTA = () => (
  <section className="py-16 sm:py-20">
    <Container>
      <Card className="bg-krem/90">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-soga/80">Kontak kerja sama</p>
            <h2 className="font-serif text-3xl text-coklat-gelap sm:text-4xl">
              Butuh undangan pementasan, kunjungan budaya, atau kolaborasi riset?
            </h2>
            <p className="text-sm leading-7 text-soga">
              Hubungi Bagus sebagai narahubung resmi untuk membahas kebutuhan acara, format layanan, dan koordinasi awal.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              href={createWhatsAppLink(
                "Halo Sanggar Putra Satria Laras, saya ingin bertanya tentang peluang kerja sama budaya."
              )}
              rel="noreferrer"
              target="_blank"
            >
              Chat WhatsApp
            </Button>
            <Button to="/kontak" variant="outline">
              Lihat detail kontak
            </Button>
          </div>
        </div>
      </Card>
    </Container>
  </section>
);

export default ContactCTA;
