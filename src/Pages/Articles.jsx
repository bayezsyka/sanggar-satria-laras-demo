import Container from "../Components/ui/Container";
import PageHero from "../Components/ui/PageHero";
import SectionHeader from "../Components/ui/SectionHeader";
import ArticleCard from "../Components/ui/ArticleCard";
import { articleData } from "../constants/articleData";
import { usePageTitle } from "../hooks/usePageTitle";

const Articles = () => {
  usePageTitle("articles");

  return (
    <>
      <PageHero
        description="Bagian ini disiapkan sebagai blog ringan berbasis data lokal. Saat ini tampil sebagai daftar artikel statis dengan ringkasan yang siap dikembangkan menjadi halaman detail jika dibutuhkan."
        eyebrow="Wawasan Budaya"
        title="Tulisan ringkas untuk memperluas pemahaman publik tentang wayang dan kebudayaan."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Artikel awal"
            title="Dari filsafat wayang sampai cara tradisi membaca zaman."
            subtitle="Seluruh artikel diambil dari data statis dan sengaja ditata seperti portal wawasan budaya, bukan sekadar daftar tautan kosong."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articleData.map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Articles;
