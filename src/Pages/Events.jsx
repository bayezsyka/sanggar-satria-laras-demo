import { useState } from "react";
import Container from "../Components/ui/Container";
import EmptyState from "../Components/ui/EmptyState";
import EventCard from "../Components/ui/EventCard";
import PageHero from "../Components/ui/PageHero";
import SectionHeader from "../Components/ui/SectionHeader";
import { eventCategories, eventData } from "../constants/eventData";
import { usePageTitle } from "../hooks/usePageTitle";

const Events = () => {
  usePageTitle("events");

  const [activeCategory, setActiveCategory] = useState("Semua");
  const filteredEvents =
    activeCategory === "Semua"
      ? eventData
      : eventData.filter((event) => event.category === activeCategory || event.format === activeCategory);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <>
      <PageHero
        description="Jadwal budaya pada tahap ini masih statis dan dikelola dari file constants. Struktur datanya sudah siap untuk dikembangkan tanpa mengubah tampilan inti."
        eyebrow="Jadwal Budaya"
        title="Agenda pementasan dan arsip kegiatan budaya."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Filter kegiatan"
            title="Pilih kategori acara sesuai kebutuhan."
            subtitle="Kategori dapat disaring di sisi klien tanpa API: Semua, Wayang Santri, Ngaji Budaya, Festival, dan Edukasi."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {eventCategories.map((category) => (
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
            {filteredEvents.length ? (
              <div className="grid gap-6 xl:grid-cols-2">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={`${event.title}-${event.date}`}
                    event={event}
                    isArchive={new Date(event.date) < today}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                actionLabel="Lihat semua jadwal"
                actionTo="/jadwal"
                description="Belum ada data kegiatan pada kategori ini. Anda dapat kembali ke semua jadwal atau menghubungi sanggar untuk kebutuhan acara baru."
                title="Belum ada kegiatan untuk kategori ini"
              />
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Events;
