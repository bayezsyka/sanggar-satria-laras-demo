import ContactCTA from "../Components/section/ContactCTA";
import Badge from "../Components/ui/Badge";
import Card from "../Components/ui/Card";
import Container from "../Components/ui/Container";
import PageHero from "../Components/ui/PageHero";
import SectionHeader from "../Components/ui/SectionHeader";
import TimelineItem from "../Components/ui/TimelineItem";
import { kiHaryoData } from "../constants/profileData";
import { usePageTitle } from "../hooks/usePageTitle";

const KiHaryo = () => {
  usePageTitle("kiHaryo");

  return (
    <>
      <PageHero
        actions={[{ label: "Lihat Wayang Santri", to: "/wayang-santri" }]}
        description={kiHaryoData.hero.description}
        eyebrow={kiHaryoData.hero.eyebrow}
        title={kiHaryoData.hero.title}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="bg-krem/75">
              <div className="culture-pattern flex aspect-[4/5] items-end rounded-[24px] bg-[linear-gradient(180deg,rgba(138,90,50,0.24),rgba(43,29,20,0.95))] p-6">
                <div className="rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.18em] text-putih-hangat/75">Peran</p>
                  <p className="mt-2 font-serif text-3xl text-putih-hangat">Dalang Wayang Santri dan penggerak kebudayaan Tegal.</p>
                </div>
              </div>
            </Card>
            <div className="space-y-5">
              <SectionHeader
                eyebrow="Perjalanan"
                title="Identitas pementasan yang tumbuh dari pengalaman, bukan dari sensasi."
                subtitle="Penulisan profil ini menjaga nada yang santun dan berimbang: menempatkan perjalanan Ki Haryo sebagai proses pengabdian budaya yang matang."
              />
              <div className="space-y-4 text-base leading-8 text-soga">
                {kiHaryoData.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Jejak perjalanan"
            title="Fase yang membentuk cara bertutur di atas panggung."
            subtitle="Dari masa kecil hingga menemukan identitas lewat Wayang Santri."
          />
          <div className="mt-10 grid gap-8">
            {kiHaryoData.journey.map((item, index) => (
              <TimelineItem key={`${item.year}-${index}`} description={item.description} title={item.title} year={item.year} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="h-full">
              <SectionHeader
                eyebrow="Gaya pementasan"
                title="Egaliter, humoris, dan tetap menajamkan persoalan."
              />
              <div className="mt-6 flex flex-wrap gap-3">
                {kiHaryoData.performanceStyles.map((item) => (
                  <Badge key={item} className="bg-krem text-coklat-gelap">
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card className="h-full bg-coklat-gelap text-putih-hangat">
              <SectionHeader
                eyebrow="Peran kebudayaan"
                tone="light"
                title="Kebijakan budaya, regenerasi, dan kesejahteraan seniman."
                subtitle="Peran Ki Haryo tidak berhenti di panggung, tetapi masuk ke kerja kelembagaan dan percakapan kebijakan budaya."
              />
              <div className="mt-6 grid gap-3 text-sm leading-7 text-putih-hangat/82">
                {kiHaryoData.culturalRoles.map((item) => (
                  <div key={item} className="rounded-[20px] border border-white/10 bg-white/8 p-4">
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
};

export default KiHaryo;
