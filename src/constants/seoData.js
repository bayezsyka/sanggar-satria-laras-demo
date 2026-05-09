import { siteData } from "./siteData";

export const seoData = {
  default: {
    title: siteData.defaultTitle,
    description: siteData.defaultDescription,
    path: "/",
  },
  home: {
    title: siteData.defaultTitle,
    description: siteData.defaultDescription,
    path: "/",
  },
  about: {
    title: `Tentang Sanggar | ${siteData.name}`,
    description:
      "Sejarah, filosofi, peran, dan muruah Sanggar Putra Satria Laras sebagai ruang pelestarian wayang dan pengabdian budaya di Tegal.",
    path: "/tentang",
  },
  kiHaryo: {
    title: `Ki Haryo Susilo Enthus Susmono | ${siteData.name}`,
    description:
      "Profil Ki Haryo Susilo Enthus Susmono sebagai dalang Wayang Santri, pelestari budaya, dan Ketua Dewan Kebudayaan Daerah Kabupaten Tegal 2025-2030.",
    path: "/ki-haryo",
  },
  wayangSantri: {
    title: `Wayang Santri | ${siteData.name}`,
    description:
      "Mengenal Wayang Santri, Lupit dan Slenteng, Laras Abu Nawas, instrumen, lakon, dan inovasi wayang tokoh viral dari Sanggar Putra Satria Laras.",
    path: "/wayang-santri",
  },
  services: {
    title: `Layanan Pementasan | ${siteData.name}`,
    description:
      "Layanan Wayang Santri, Wayang Kulit, Ngaji Budaya, Sinema, edukasi, dan kolaborasi budaya dari Sanggar Putra Satria Laras.",
    path: "/layanan",
  },
  events: {
    title: `Jadwal Budaya | ${siteData.name}`,
    description:
      "Jadwal budaya, arsip kegiatan, dan agenda pementasan statis Sanggar Putra Satria Laras.",
    path: "/jadwal",
  },
  gallery: {
    title: `Galeri | ${siteData.name}`,
    description:
      "Galeri statis Sanggar Putra Satria Laras berisi placeholder pementasan, tokoh wayang, edukasi, dan dokumentasi budaya.",
    path: "/galeri",
  },
  videos: {
    title: `Sinema & Video | ${siteData.name}`,
    description:
      "Katalog video statis untuk Sinema Wayang Santri, The Walisongo, lakon populer, dan dokumentasi pementasan.",
    path: "/video",
  },
  articles: {
    title: `Wawasan Budaya | ${siteData.name}`,
    description:
      "Artikel ringkas tentang wayang sebagai tuntunan, karakter Lupit dan Slenteng, Laras Abu Nawas, Desa Bangga Budaya, dan inovasi wayang tokoh viral.",
    path: "/wawasan",
  },
  contact: {
    title: `Kontak | ${siteData.name}`,
    description:
      "Hubungi Sanggar Putra Satria Laras untuk undangan pementasan, kerja sama budaya, edukasi, dokumentasi, media, dan riset kebudayaan.",
    path: "/kontak",
  },
  notFound: {
    title: `Halaman Tidak Ditemukan | ${siteData.name}`,
    description:
      "Halaman yang Anda cari tidak tersedia. Kembali ke portal budaya Sanggar Putra Satria Laras.",
    path: "/404",
  },
};
