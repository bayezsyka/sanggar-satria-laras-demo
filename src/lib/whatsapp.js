import { siteData } from "../constants/siteData";

export const createWhatsAppLink = (message) => {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${siteData.contact.whatsappNumber}?text=${encodedMessage}`;
};

export const createServiceInquiryMessage = (serviceTitle) =>
  `Halo Sanggar Putra Satria Laras, saya ingin bertanya tentang layanan ${serviceTitle} untuk acara saya.`;
