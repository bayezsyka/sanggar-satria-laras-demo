import { siteData } from "../../constants/siteData";
import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

const HomeHighlights = () => (
  <section className="py-16 sm:py-20">
    <Container>
      <SectionHeader
        align="center"
        eyebrow="Sorotan"
        title="Wajah portal budaya yang berwibawa dan membumi."
        subtitle="Empat fokus utama ini menjadi dasar bagaimana sanggar menata pementasan, pendidikan, dan kerja kebudayaan secara publik."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {siteData.homeHighlights.map((item, index) => (
          <Card key={item.title} className="h-full bg-white/75">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-soga/70">
              0{index + 1}
            </p>
            <h3 className="mt-4 font-serif text-2xl text-coklat-gelap">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-soga">{item.description}</p>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

export default HomeHighlights;
