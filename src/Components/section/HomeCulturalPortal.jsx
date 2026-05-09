import { articleData } from "../../constants/articleData";
import { galleryData } from "../../constants/galleryData";
import { wayangSantriData } from "../../constants/profileData";
import { videoData } from "../../constants/videoData";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";
import GalleryCard from "../ui/GalleryCard";
import SectionHeader from "../ui/SectionHeader";
import VideoCard from "../ui/VideoCard";

const HomeCulturalPortal = () => (
  <section className="py-16 sm:py-20">
    <Container>
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="bg-coklat-gelap text-putih-hangat">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emas-redup">
            Wayang Santri
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight">
            Format unggulan yang dekat dengan masyarakat dan tidak kehilangan bobot nilai.
          </h2>
          <p className="mt-4 text-sm leading-7 text-putih-hangat/80">
            {wayangSantriData.overview[1]}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {wayangSantriData.characters.map((character) => (
              <div key={character.name} className="rounded-[24px] border border-white/10 bg-white/8 p-5">
                <p className="font-serif text-2xl text-putih-hangat">{character.name}</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-putih-hangat/78">
                  {character.traits.slice(0, 3).map((trait) => (
                    <li key={trait}>{trait}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/wayang-santri">Pelajari Wayang Santri</Button>
            <Button to="/video" variant="outline-light">
              Lihat sinema dan video
            </Button>
          </div>
        </Card>

        <div className="space-y-8">
          <div>
            <SectionHeader
              eyebrow="Portal Budaya"
              title="Galeri, video, dan wawasan budaya dalam satu alur."
              subtitle="Beranda dirancang bukan sebagai landing page tipis, tetapi sebagai pintu masuk menuju arsip visual, sinema wayang, dan tulisan budaya."
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <GalleryCard item={galleryData[0]} />
            <VideoCard video={videoData[1]} />
          </div>
          <Card className="bg-krem/80">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-soga/80">Wawasan budaya</p>
            <div className="mt-4 grid gap-4">
              {articleData.slice(0, 3).map((article) => (
                <div key={article.slug} className="rounded-[22px] border border-soga/10 bg-white/70 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-soga/75">{article.category}</p>
                  <h3 className="mt-2 font-serif text-2xl text-coklat-gelap">{article.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-soga">{article.excerpt}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button to="/wawasan" variant="ghost">
                Jelajahi semua tulisan
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  </section>
);

export default HomeCulturalPortal;
