import { createServiceInquiryMessage, createWhatsAppLink } from "../../lib/whatsapp";
import Badge from "./Badge";
import Button from "./Button";
import Card from "./Card";

const ServiceCard = ({ service }) => {
  const whatsappLink = createWhatsAppLink(createServiceInquiryMessage(service.title));

  return (
    <Card className="flex h-full flex-col gap-5">
      <div className="space-y-4">
        <Badge>Layanan</Badge>
        <div className="space-y-3">
          <h3 className="font-serif text-2xl text-coklat-gelap">{service.title}</h3>
          <p className="text-sm leading-7 text-soga">{service.shortDescription}</p>
          <p className="text-sm leading-7 text-soga/90">{service.longDescription}</p>
        </div>
      </div>

      <div className="grid gap-4 text-sm text-soga sm:grid-cols-3">
        <div>
          <p className="font-semibold text-coklat-gelap">Cocok untuk</p>
          <ul className="mt-2 space-y-2 leading-6">
            {service.cocokUntuk.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-coklat-gelap">Highlight</p>
          <ul className="mt-2 space-y-2 leading-6">
            {service.highlight.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-coklat-gelap">Kebutuhan umum</p>
          <ul className="mt-2 space-y-2 leading-6">
            {service.kebutuhanUmum.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto">
        <Button href={whatsappLink} target="_blank" rel="noreferrer" variant="primary">
          {service.ctaText}
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;
