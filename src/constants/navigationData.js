export const navigationData = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    children: [
      { label: "Tentang Sanggar", href: "/tentang" },
      { label: "Ki Haryo", href: "/ki-haryo" },
      { label: "Wayang Santri", href: "/wayang-santri" },
    ],
  },
  {
    label: "Program",
    children: [
      { label: "Layanan", href: "/layanan" },
      { label: "Jadwal", href: "/jadwal" },
    ],
  },
  {
    label: "Media",
    children: [
      { label: "Galeri", href: "/galeri" },
      { label: "Video", href: "/video" },
      { label: "Wawasan", href: "/wawasan" },
    ],
  },
  { label: "Kontak", href: "/kontak" },
];
