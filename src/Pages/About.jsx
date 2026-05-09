import ContactCTA from "../Components/section/ContactCTA";
import Card from "../Components/ui/Card";
import Container from "../Components/ui/Container";
import PageHero from "../Components/ui/PageHero";
import SectionHeader from "../Components/ui/SectionHeader";
import TimelineItem from "../Components/ui/TimelineItem";
import { aboutData } from "../constants/profileData";
import { usePageTitle } from "../hooks/usePageTitle";

const About = () => {
  usePageTitle("about");

  return (
    <>
      <PageHero
        actions={[{ label: "Hubungi Sanggar", to: "/kontak" }]}
        description={aboutData.hero.description}
        eyebrow={aboutData.hero.eyebrow}
        title={aboutData.hero.title}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-5">
              <SectionHeader
                eyebrow="Sejarah ringkas"
                title="Berdiri sebagai pengabdian budaya yang berpijak pada manfaat."
                subtitle="Sanggar dirancang sebagai ruang yang tidak hanya menjaga bentuk pertunjukan, tetapi juga menjaga makna dan kesinambungan pengetahuannya."
              />
              <div className="space-y-4 text-base leading-8 text-soga">
                {aboutData.history.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <Card className="bg-krem/70">
              <h2 className="font-serif text-3xl text-coklat-gelap">{aboutData.philosophy.title}</h2>
              <p className="mt-4 text-sm leading-7 text-soga">{aboutData.philosophy.description}</p>
              <div className="mt-8 grid gap-4">
                {aboutData.roles.map((role) => (
                  <div key={role} className="rounded-[22px] border border-soga/10 bg-white/70 p-4 text-sm leading-7 text-soga">
                    {role}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Timeline singkat"
            title="Perjalanan yang dibangun bertahap, dari rumah budaya ke diplomasi kebudayaan."
            subtitle="Lini waktu ini merangkum arah tumbuh sanggar dari pijakan awal hingga penguatan agenda Desa Bangga Budaya."
          />
          <div className="mt-10 grid gap-8">
            {aboutData.timeline.map((item, index) => (
              <TimelineItem key={`${item.year}-${index}`} description={item.description} title={item.title} year={item.year} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <Card className="bg-coklat-gelap text-putih-hangat">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emas-redup/85">
              {aboutData.muruah.title}
            </p>
            <p className="mt-4 max-w-4xl text-base leading-8 text-putih-hangat/82">
              {aboutData.muruah.description}
            </p>
          </Card>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
};

export default About;
