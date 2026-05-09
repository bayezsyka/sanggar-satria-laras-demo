import { useState } from "react";
import Container from "../Components/ui/Container";
import EmptyState from "../Components/ui/EmptyState";
import GalleryCard from "../Components/ui/GalleryCard";
import PageHero from "../Components/ui/PageHero";
import SectionHeader from "../Components/ui/SectionHeader";
import { galleryCategories, galleryData } from "../constants/galleryData";
import { usePageTitle } from "../hooks/usePageTitle";

const Gallery = () => {
  usePageTitle("gallery");

  const [activeCategory, setActiveCategory] = useState("Semua");
  const filteredGallery =
    activeCategory === "Semua"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHero
        description="Aset foto asli belum dimasukkan. Karena itu, halaman ini memakai placeholder visual yang elegan dan siap diganti dengan gambar dokumentasi sesungguhnya di masa depan."
        eyebrow="Galeri"
        title="Placeholder galeri budaya yang sudah siap menerima dokumentasi asli."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Kategori"
            title="Pementasan, tokoh wayang, ruang sanggar, hingga dokumentasi."
            subtitle="Struktur data galeri memakai properti title, category, image, description, dan alt agar mudah dikembangkan."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {galleryCategories.map((category) => (
              <button
                key={category}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-coklat-gelap text-putih-hangat"
                    : "border border-soga/15 bg-white/70 text-coklat-gelap hover:bg-krem"
                }`}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-10">
            {filteredGallery.length ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredGallery.map((item) => (
                  <GalleryCard key={`${item.title}-${item.category}`} item={item} />
                ))}
              </div>
            ) : (
              <EmptyState
                actionLabel="Tampilkan semua kategori"
                actionTo="/galeri"
                description="Belum ada placeholder untuk kategori ini. Struktur galeri tetap bisa ditambah dari folder constants kapan saja."
                title="Kategori galeri masih kosong"
              />
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Gallery;
