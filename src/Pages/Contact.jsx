import ContactCTA from "../Components/section/ContactCTA";
import Badge from "../Components/ui/Badge";
import Button from "../Components/ui/Button";
import Card from "../Components/ui/Card";
import Container from "../Components/ui/Container";
import PageHero from "../Components/ui/PageHero";
import SectionHeader from "../Components/ui/SectionHeader";
import { siteData } from "../constants/siteData";
import { usePageTitle } from "../hooks/usePageTitle";
import { createWhatsAppLink } from "../lib/whatsapp";

const Contact = () => {
  usePageTitle("contact");

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteData.mapQuery)}`;

  return (
    <>
      <PageHero
        actions={[
          {
            label: "Chat WhatsApp",
            href: createWhatsAppLink(
              "Halo Sanggar Putra Satria Laras, saya ingin bertanya tentang kerja sama atau pementasan."
            ),
            target: "_blank",
            rel: "noreferrer",
          },
        ]}
        description="Halaman kontak ini dirancang untuk kebutuhan undangan pementasan, kerja sama budaya, edukasi, dokumentasi, media, dan riset kebudayaan."
        eyebrow="Kontak"
        title="Hubungi sanggar melalui narahubung resmi dan kanal publik yang jelas."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr]">
            <Card className="h-full">
              <SectionHeader
                eyebrow="Informasi resmi"
                title="Alamat, narahubung, email, dan sosial media."
              />
              <div className="mt-8 grid gap-4 text-sm leading-7 text-soga">
                <div className="rounded-[22px] border border-soga/10 bg-krem/65 p-5">
                  <p className="font-semibold text-coklat-gelap">Alamat lengkap</p>
                  <p className="mt-2">{siteData.address.line}</p>
                </div>
                <div className="rounded-[22px] border border-soga/10 bg-white/75 p-5">
                  <p className="font-semibold text-coklat-gelap">Narahubung</p>
                  <p className="mt-2">{siteData.contact.contactPerson}</p>
                  <p>{siteData.contact.whatsappDisplay}</p>
                </div>
                <div className="rounded-[22px] border border-soga/10 bg-white/75 p-5">
                  <p className="font-semibold text-coklat-gelap">Email</p>
                  <a className="mt-2 inline-block text-soga underline decoration-emas-redup/60 underline-offset-4" href={`mailto:${siteData.contact.email}`}>
                    {siteData.contact.email}
                  </a>
                </div>
                <div className="rounded-[22px] border border-soga/10 bg-white/75 p-5">
                  <p className="font-semibold text-coklat-gelap">Sosial media</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {siteData.socials.map((social) => (
                      <Badge key={social.label} className="bg-krem text-coklat-gelap">
                        {social.label}: {social.value}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button
                    href={createWhatsAppLink(
                      "Halo Sanggar Putra Satria Laras, saya ingin menghubungi narahubung resmi sanggar."
                    )}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Hubungi WhatsApp
                  </Button>
                  <Button href={mapsLink} rel="noreferrer" target="_blank" variant="outline">
                    Buka Google Maps
                  </Button>
                </div>
              </div>
            </Card>

            <div className="grid gap-6">
              <Card className="h-full bg-krem/75">
                <SectionHeader
                  eyebrow="Untuk keperluan"
                  title="Pilih kebutuhan yang paling dekat dengan agenda Anda."
                />
                <div className="mt-6 flex flex-wrap gap-3">
                  {siteData.contactPurposes.map((purpose) => (
                    <Badge key={purpose} className="bg-white text-coklat-gelap">
                      {purpose}
                    </Badge>
                  ))}
                </div>
              </Card>
              <Card className="overflow-hidden p-0">
                <div className="culture-pattern flex min-h-[320px] items-end bg-[linear-gradient(145deg,rgba(43,29,20,0.94),rgba(138,90,50,0.9)_55%,rgba(199,161,90,0.78))] p-6">
                  <div className="rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur">
                    <p className="text-sm uppercase tracking-[0.18em] text-putih-hangat/75">Embed map placeholder</p>
                    <p className="mt-3 font-serif text-3xl text-putih-hangat">Desa Bengle, Talang, Kabupaten Tegal</p>
                    <p className="mt-3 text-sm leading-7 text-putih-hangat/82">
                      Placeholder ini sengaja tidak memakai Google Maps API. Tombol menuju pencarian alamat tetap tersedia agar siap untuk hosting statis.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
};

export default Contact;
