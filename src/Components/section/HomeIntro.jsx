import { aboutData } from "../../constants/profileData";
import { siteData } from "../../constants/siteData";
import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

const HomeIntro = () => (
  <section className="py-16 sm:py-20">
    <Container>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <SectionHeader
            eyebrow="Pengantar Sanggar"
            title="Rumah wayang yang merawat tradisi sekaligus membaca zaman."
            subtitle="Sanggar Putra Satria Laras menjadi ruang pelestarian, pembelajaran, produksi, pementasan, dan dakwah budaya melalui seni wayang."
          />
          <div className="space-y-4 text-base leading-8 text-soga">
            {aboutData.history.slice(0, 2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <Card className="bg-krem/70">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-soga/80">Jejak utama</p>
          <dl className="mt-6 space-y-5">
            <div>
              <dt className="text-sm font-semibold text-coklat-gelap">Alamat</dt>
              <dd className="mt-1 text-sm leading-7 text-soga">{siteData.address.line}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-coklat-gelap">Tokoh utama</dt>
              <dd className="mt-1 text-sm leading-7 text-soga">
                Ki Haryo Susilo Enthus Susmono, dalang Wayang Santri dari Tegal dan putra Ki Enthus Susmono.
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-coklat-gelap">Ruang kerja budaya</dt>
              <dd className="mt-1 text-sm leading-7 text-soga">
                Pementasan, pelatihan, Rumah Wayang 2, dokumentasi, sinema wayang, dan kolaborasi riset kebudayaan.
              </dd>
            </div>
          </dl>
        </Card>
      </div>
    </Container>
  </section>
);

export default HomeIntro;
