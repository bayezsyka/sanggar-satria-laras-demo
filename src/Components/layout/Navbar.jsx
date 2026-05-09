import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navigationData } from "../../constants/navigationData";
import { siteData } from "../../constants/siteData";
import { createWhatsAppLink } from "../../lib/whatsapp";
import Button from "../ui/Button";
import Container from "../ui/Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const contactLink = createWhatsAppLink(
    "Halo Sanggar Putra Satria Laras, saya ingin menghubungi sanggar untuk informasi lebih lanjut."
  );

  return (
    <header className="sticky top-0 z-50 border-b border-soga/10 bg-putih-hangat/90 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link className="group flex items-center gap-3" to="/">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-soga/15 bg-coklat-gelap text-lg font-bold tracking-[0.2em] text-emas-redup shadow-sm">
            PSL
          </span>
          <div>
            <p className="font-serif text-xl text-coklat-gelap transition group-hover:text-soga">
              {siteData.shortName}
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-soga/75">Portal Budaya Tegal</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigationData.map((item) => {
            if (item.children) {
              return (
                <div key={item.label} className="group relative">
                  <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-soga transition hover:bg-white/60 hover:text-coklat-gelap">
                    {item.label}
                    <svg className="h-4 w-4 opacity-70 transition duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                    <div className="flex w-48 flex-col rounded-2xl border border-soga/10 bg-white/95 p-2 shadow-[0_10px_40px_rgba(43,29,20,0.08)] backdrop-blur-xl">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.href}
                          to={child.href}
                          className={({ isActive }) =>
                            `block rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                              isActive ? "bg-krem text-coklat-gelap" : "text-soga hover:bg-krem/50 hover:text-coklat-gelap"
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={item.href}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive ? "bg-krem text-coklat-gelap" : "text-soga hover:bg-white/60 hover:text-coklat-gelap"
                  }`
                }
                to={item.href}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={contactLink} rel="noreferrer" target="_blank">
            Hubungi
          </Button>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Buka menu navigasi"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-soga/15 bg-white/70 text-coklat-gelap lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <span className="text-lg">{isOpen ? "×" : "≡"}</span>
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-soga/10 bg-putih-hangat/98 lg:hidden">
          <Container className="flex flex-col gap-3 py-4">
            {navigationData.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} className="flex flex-col gap-1">
                    <p className="px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-soga/60">
                      {item.label}
                    </p>
                    {item.children.map((child) => {
                      const isActive = pathname === child.href;
                      return (
                        <NavLink
                          key={child.href}
                          to={child.href}
                          onClick={() => setIsOpen(false)}
                          className={`rounded-2xl px-4 py-3 pl-6 text-sm font-medium transition ${
                            isActive
                              ? "bg-coklat-gelap text-putih-hangat"
                              : "bg-white/60 text-coklat-gelap hover:bg-krem"
                          }`}
                        >
                          {child.label}
                        </NavLink>
                      );
                    })}
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <NavLink
                  key={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-coklat-gelap text-putih-hangat"
                      : "bg-white/60 text-coklat-gelap hover:bg-krem"
                  }`}
                  onClick={() => setIsOpen(false)}
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              );
            })}
            <Button href={contactLink} rel="noreferrer" target="_blank" className="mt-2 w-full">
              Hubungi
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
