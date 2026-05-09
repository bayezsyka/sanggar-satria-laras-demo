import Badge from "./Badge";

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
  className = "",
}) => {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start";
  const titleColor = tone === "light" ? "text-putih-hangat" : "text-coklat-gelap";
  const subtitleColor = tone === "light" ? "text-putih-hangat/78" : "text-soga";
  const badgeClass = tone === "light" ? "border-white/15 bg-white/10 text-emas-redup" : "";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment} ${className}`.trim()}>
      {eyebrow ? <Badge className={badgeClass}>{eyebrow}</Badge> : null}
      <div className="space-y-3">
        <h2 className={`font-serif text-3xl leading-tight sm:text-4xl ${titleColor}`.trim()}>
          {title}
        </h2>
        {subtitle ? (
          <p className={`text-base leading-7 sm:text-lg ${subtitleColor}`.trim()}>{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
};

export default SectionHeader;
