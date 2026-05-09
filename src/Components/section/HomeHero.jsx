import { siteData } from "../../constants/siteData";
import Button from "../ui/Button";
import Container from "../ui/Container";
import StatCard from "../ui/StatCard";

const HomeHero = () => (
  <section className="relative overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-20">
    <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-emas-redup/20 blur-3xl" />
    <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-soga/12 blur-3xl" />
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-soga/15 bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-soga">
            Portal Budaya Publik
          </span>
          <div className="space-y-5">
            <h1 className="font-serif text-5xl leading-tight text-coklat-gelap sm:text-6xl lg:text-7xl">
              {siteData.hero.title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-soga sm:text-lg">
              {siteData.hero.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to={siteData.hero.primaryCta.to}>{siteData.hero.primaryCta.label}</Button>
            <Button to={siteData.hero.secondaryCta.to} variant="outline">
              {siteData.hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="rounded-[32px] border border-soga/12 bg-coklat-gelap p-6 shadow-[0_28px_70px_rgba(43,29,20,0.18)]">
          <div className="culture-pattern relative overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(145deg,rgba(138,90,50,0.95),rgba(43,29,20,0.96)_58%,rgba(127,143,99,0.78))] p-8">
            <div className="relative z-10 space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emas-redup/90">
                Sanggar Putra Satria Laras
              </p>
              <div className="space-y-3">
                <p className="font-serif text-3xl leading-tight text-putih-hangat sm:text-4xl">
                  Wayang dirawat sebagai ruang pementasan, pendidikan, dan dakwah budaya.
                </p>
                <p className="text-sm leading-7 text-putih-hangat/80">
                  Dari Desa Bengle, Sanggar Putra Satria Laras membangun portal budaya yang siap dipakai publik untuk mengenal karya, layanan, jadwal, hingga kerja sama kebudayaan.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-putih-hangat/70">Filosofi</p>
                  <p className="mt-2 font-serif text-2xl text-putih-hangat">Tontonan dan tuntunan</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-putih-hangat/70">Fokus</p>
                  <p className="mt-2 font-serif text-2xl text-putih-hangat">Pementasan dan edukasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {siteData.homeStats.map((item) => (
          <StatCard key={item.title} description={item.description} title={item.title} value={item.value} />
        ))}
      </div>
    </Container>
  </section>
);

export default HomeHero;
