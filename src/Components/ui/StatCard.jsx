import Card from "./Card";

const StatCard = ({ title, value, description }) => (
  <Card className="h-full bg-white/75">
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-soga/80">{title}</p>
    <h3 className="mt-3 font-serif text-2xl text-coklat-gelap">{value}</h3>
    <p className="mt-3 text-sm leading-6 text-soga">{description}</p>
  </Card>
);

export default StatCard;
