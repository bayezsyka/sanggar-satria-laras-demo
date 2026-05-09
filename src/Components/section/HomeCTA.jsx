import { createWhatsAppLink } from "../../lib/whatsapp";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";

const HomeCTA = () => (
  <section className="pb-20 pt-8">
    <Container>
      <Card className="overflow-hidden bg-[linear-gradient(135deg,rgba(43,29,20,0.98),rgba(138,90,50,0.96))] p-0 text-putih-hangat">
        <div className="culture-pattern grid gap-6 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emas-redup/85">Siap berkolaborasi</p>
            <h2 className="font-serif text-4xl leading-tight">Undang sanggar untuk pementasan, edukasi, atau kerja kebudayaan.</h2>
            <p className="max-w-2xl text-sm leading-7 text-putih-hangat/82">
              Dari agenda desa hingga kolaborasi dokumenter, Sanggar Putra Satria Laras membuka ruang kerja yang rapi, komunikatif, dan relevan untuk kebutuhan publik.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button
              href={createWhatsAppLink(
                "Halo Sanggar Putra Satria Laras, saya ingin berdiskusi tentang pementasan atau kerja sama budaya."
              )}
              rel="noreferrer"
              target="_blank"
            >
              Hubungi via WhatsApp
            </Button>
            <Button to="/kontak" variant="outline-light">
              Buka halaman kontak
            </Button>
          </div>
        </div>
      </Card>
    </Container>
  </section>
);

export default HomeCTA;
