import { serviceData } from "../../constants/serviceData";
import Button from "../ui/Button";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import ServiceCard from "../ui/ServiceCard";

const HomeServicesPreview = () => (
  <section className="py-16 sm:py-20">
    <Container>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          eyebrow="Preview Layanan"
          title="Pementasan dan program budaya yang siap dikembangkan."
          subtitle="Seluruh layanan masih dikelola secara publik dan statis, tetapi strukturnya sudah siap dikembangkan menjadi katalog yang lebih dinamis di masa depan."
        />
        <Button to="/layanan" variant="outline">
          Lihat semua layanan
        </Button>
      </div>
      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {serviceData.slice(0, 4).map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </Container>
  </section>
);

export default HomeServicesPreview;
