import { Link } from "react-router-dom";
import { siteData } from "../../constants/siteData";

export const Footer = () => {
  return (
    <footer className="bg-coklat-gelap text-putih-hangat py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-emas-redup mb-4">
              {siteData.namaSanggar}
            </h3>
            <p className="text-krem text-sm mb-4 leading-relaxed">
              {siteData.tagline}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4 text-emas-redup">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-krem hover:text-putih-hangat transition-colors text-sm">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="text-krem hover:text-putih-hangat transition-colors text-sm">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="text-krem hover:text-putih-hangat transition-colors text-sm">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4 text-emas-redup">Hubungi Kami</h4>
            <address className="not-italic text-sm text-krem space-y-2">
              <p>{siteData.kontak.alamat}</p>
              <p>WA: {siteData.kontak.whatsapp}</p>
              <p>Email: {siteData.kontak.email}</p>
            </address>
          </div>
        </div>
        <div className="border-t border-soga/30 mt-8 pt-8 text-center text-sm text-krem/70">
          <p>&copy; {new Date().getFullYear()} {siteData.namaSanggar}. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
