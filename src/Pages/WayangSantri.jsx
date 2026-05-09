import ContactCTA from "../Components/section/ContactCTA";
import Badge from "../Components/ui/Badge";
import Button from "../Components/ui/Button";
import Card from "../Components/ui/Card";
import Container from "../Components/ui/Container";
import PageHero from "../Components/ui/PageHero";
import SectionHeader from "../Components/ui/SectionHeader";
import { wayangSantriData } from "../constants/profileData";
import { createWhatsAppLink } from "../lib/whatsapp";
import { usePageTitle } from "../hooks/usePageTitle";

const WayangSantri = () => {
  usePageTitle("wayangSantri");

  return (
    <>
      <PageHero
        actions={[
          {
            label: "Undang Wayang Santri",
            href: createWhatsAppLink(
              "Halo Sanggar Putra Satria Laras, saya ingin bertanya tentang pementasan Wayang Santri untuk acara saya."
            ),
            target: "_blank",
            rel: "noreferrer",
          },
        ]}
        description={wayangSantriData.hero.description}
        eyebrow={wayangSantriData.hero.eyebrow}
        title={wayangSantriData.hero.title}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4 text-base leading-8 text-soga">
              <SectionHeader
                eyebrow="Gagasan pementasan"
                title="Wayang, dakwah Islam, humor, kritik sosial, dan kearifan lokal dalam satu panggung."
              />
              {wayangSantriData.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Card className="bg-krem/75">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-soga/80">Laras Abu Nawas</p>
              <h2 className="mt-3 font-serif text-3xl text-coklat-gelap">Inovasi musik yang memberi warna khas.</h2>
              <p className="mt-4 text-sm leading-7 text-soga">{wayangSantriData.larasAbuNawas}</p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Lupit dan Slenteng"
            title="Dua watak yang saling melengkapi di panggung Wayang Santri."
            subtitle="Perbedaan karakter dipakai sebagai jalan dialektika yang akrab bagi penonton."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {wayangSantriData.characters.map((character) => (
              <Card key={character.name} className="h-full">
                <h3 className="font-serif text-3xl text-coklat-gelap">{character.name}</h3>
                <p className="mt-4 text-sm leading-7 text-soga">{character.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {character.traits.map((trait) => (
                    <Badge key={trait} className="bg-krem text-coklat-gelap">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="bg-coklat-gelap text-putih-hangat">
              <SectionHeader
                eyebrow="Instrumen"
                tone="light"
                title="Tradisi Jawa, identitas Islam, ritme, dan warna modern."
                subtitle="Perangkat musik dibangun untuk menjaga akar, sekaligus membuka kemungkinan atmosfer pementasan yang lebih luas."
              />
            </Card>
            <div className="grid gap-5 sm:grid-cols-2">
              {wayangSantriData.instruments.map((group) => (
                <Card key={group.group}>
                  <p className="font-serif text-2xl text-coklat-gelap">{group.group}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} className="bg-krem text-coklat-gelap">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <SectionHeader
                eyebrow="Lakon populer"
                title="Cerita yang akrab, tajam, dan mudah diingat."
              />
              <div className="mt-6 flex flex-wrap gap-3">
                {wayangSantriData.lakon.map((item) => (
                  <Badge key={item} className="bg-krem text-coklat-gelap">
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card className="bg-krem/70">
              <SectionHeader
                eyebrow="Wayang Tokoh Viral"
                title="Tradisi yang tetap bercakap dengan generasi muda."
              />
              <p className="mt-6 text-sm leading-7 text-soga">{wayangSantriData.tokohViral}</p>
              <div className="mt-6">
                <Button to="/galeri" variant="outline">
                  Lihat galeri budaya
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
};

export default WayangSantri;
