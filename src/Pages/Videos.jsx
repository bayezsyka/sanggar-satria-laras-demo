import Container from "../Components/ui/Container";
import PageHero from "../Components/ui/PageHero";
import SectionHeader from "../Components/ui/SectionHeader";
import VideoCard from "../Components/ui/VideoCard";
import { videoData } from "../constants/videoData";
import { usePageTitle } from "../hooks/usePageTitle";

const Videos = () => {
  usePageTitle("videos");

  return (
    <>
      <PageHero
        description="Halaman video ini belum memakai YouTube API. Data tetap statis agar mudah diisi tautan resmi ketika arsip video publik telah siap."
        eyebrow="Sinema & Video"
        title="Katalog awal untuk karya sinema, dokumenter, dan rekaman pementasan."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Arsip audiovisual"
            title="Sinema Wayang Santri hingga dokumentasi pementasan."
            subtitle="Jika tautan YouTube sudah tersedia, kartu video akan menampilkan tombol langsung untuk menonton."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {videoData.map((video) => (
              <VideoCard key={video.title} video={video} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Videos;
