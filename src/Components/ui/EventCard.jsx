import Badge from "./Badge";
import Card from "./Card";

const eventDateFormatter = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const EventCard = ({ event, isArchive }) => (
  <Card className="h-full">
    <div className="flex flex-wrap items-center gap-2">
      <Badge>{event.category}</Badge>
      <Badge className="bg-soga/10 text-soga">{event.format}</Badge>
      {isArchive ? <Badge className="bg-coklat-gelap/10 text-coklat-gelap">Arsip kegiatan</Badge> : null}
    </div>
    <div className="mt-5 space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-soga/80">
        {eventDateFormatter.format(new Date(event.date))}
      </p>
      <h3 className="font-serif text-2xl text-coklat-gelap">{event.title}</h3>
      <p className="text-sm leading-7 text-soga">{event.description}</p>
    </div>
    <dl className="mt-5 grid gap-3 text-sm text-soga sm:grid-cols-2">
      <div>
        <dt className="font-semibold text-coklat-gelap">Lokasi</dt>
        <dd className="mt-1 leading-6">{event.location}</dd>
      </div>
      <div>
        <dt className="font-semibold text-coklat-gelap">Lakon / format</dt>
        <dd className="mt-1 leading-6">{event.lakon}</dd>
      </div>
    </dl>
  </Card>
);

export default EventCard;
