import { Link } from "react-router-dom";
import { navigationData } from "../../constants/navigationData";
import { serviceData } from "../../constants/serviceData";
import { siteData } from "../../constants/siteData";
import Container from "../ui/Container";

const Footer = () => (
  <footer className="border-t border-soga/10 bg-coklat-gelap py-16 text-putih-hangat">
    <Container>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="font-serif text-3xl text-emas-redup">{siteData.name}</p>
          <p className="max-w-md text-sm leading-7 text-putih-hangat/78">
            Portal budaya publik untuk pementasan, edukasi, dokumentasi, dan kerja sama kebudayaan dari Desa Bengle, Kabupaten Tegal.
          </p>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emas-redup/90">
            {siteData.motto}
          </p>
        </div>

        <div>
          <p className="font-semibold text-emas-redup">Navigasi cepat</p>
          <ul className="mt-4 space-y-3 text-sm text-putih-hangat/80">
            {navigationData.slice(0, 5).map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-putih-hangat" to={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-emas-redup">Layanan utama</p>
          <ul className="mt-4 space-y-3 text-sm text-putih-hangat/80">
            {serviceData.slice(0, 4).map((service) => (
              <li key={service.slug}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-sm text-putih-hangat/80">
          <p className="font-semibold text-emas-redup">Kontak</p>
          <p>{siteData.address.line}</p>
          <p>Bagus · {siteData.contact.whatsappDisplay}</p>
          <p>{siteData.contact.email}</p>
          <p>Instagram/Twitter: {siteData.contact.instagram}</p>
          <p>Facebook: {siteData.contact.facebook}</p>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-putih-hangat/65">
        Copyright © {new Date().getFullYear()} {siteData.name}. Merawat tradisi, menghidupkan tuntunan.
      </div>
    </Container>
  </footer>
);

export default Footer;
