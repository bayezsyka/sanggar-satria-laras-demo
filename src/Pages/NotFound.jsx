import Button from "../Components/ui/Button";
import Container from "../Components/ui/Container";
import { usePageTitle } from "../hooks/usePageTitle";

const NotFound = () => {
  usePageTitle("notFound");

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl rounded-[32px] border border-soga/10 bg-white/80 p-10 text-center shadow-[0_22px_60px_rgba(43,29,20,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-soga/75">404</p>
          <h1 className="mt-4 font-serif text-5xl text-coklat-gelap">Halaman tidak ditemukan.</h1>
          <p className="mt-4 text-base leading-8 text-soga">
            Rute yang Anda buka tidak tersedia di portal budaya ini. Kembali ke beranda atau buka halaman kontak untuk menghubungi sanggar.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/">Kembali ke beranda</Button>
            <Button to="/kontak" variant="outline">
              Buka kontak
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
