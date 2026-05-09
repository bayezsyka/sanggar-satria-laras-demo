import Badge from "./Badge";
import Card from "./Card";

const GalleryCard = ({ item }) => (
  <Card className="overflow-hidden p-0">
    <div
      aria-label={item.alt}
      className="culture-pattern flex aspect-[4/3] items-end bg-[linear-gradient(135deg,rgba(43,29,20,0.9),rgba(138,90,50,0.88)_45%,rgba(199,161,90,0.82))] p-5"
      role="img"
    >
      <div className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur">
        <p className="font-serif text-2xl text-putih-hangat">{item.category}</p>
        <p className="mt-2 text-sm leading-6 text-putih-hangat/80">{item.title}</p>
      </div>
    </div>
    <div className="space-y-3 p-6">
      <Badge>{item.category}</Badge>
      <h3 className="font-serif text-2xl text-coklat-gelap">{item.title}</h3>
      <p className="text-sm leading-7 text-soga">{item.description}</p>
    </div>
  </Card>
);

export default GalleryCard;
