import ContactCTA from "../Components/section/ContactCTA";
import Container from "../Components/ui/Container";
import PageHero from "../Components/ui/PageHero";
import SectionHeader from "../Components/ui/SectionHeader";
import ServiceCard from "../Components/ui/ServiceCard";
import { serviceData } from "../constants/serviceData";
import { usePageTitle } from "../hooks/usePageTitle";

const Services = () => {
  usePageTitle("services");

  return (
    <>
      <PageHero
        description="Setiap layanan disusun sebagai data statis terstruktur agar mudah diperkaya menjadi katalog dinamis di tahap berikutnya, tanpa membutuhkan backend untuk versi publik ini."
        eyebrow="Layanan Pementasan"
        title="Ragam pementasan, edukasi, dan kolaborasi budaya."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Katalog layanan"
            title="Kartu detail yang siap dipakai publik."
            subtitle="Setiap layanan memiliki deskripsi, kecocokan acara, highlight, kebutuhan umum, dan CTA WhatsApp dengan pesan awal yang berbeda."
          />
          <div className="mt-10 grid gap-6">
            {serviceData.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
};

export default Services;
