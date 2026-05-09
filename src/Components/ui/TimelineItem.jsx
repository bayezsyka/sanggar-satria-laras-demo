const TimelineItem = ({ year, title, description }) => (
  <div className="relative pl-10">
    <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-4 border-putih-hangat bg-emas-redup shadow-sm" />
    <div className="absolute left-[7px] top-5 h-[calc(100%-0.75rem)] w-px bg-soga/15" />
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-soga/80">{year}</p>
    <h3 className="mt-2 font-serif text-2xl text-coklat-gelap">{title}</h3>
    <p className="mt-3 text-sm leading-7 text-soga">{description}</p>
  </div>
);

export default TimelineItem;
