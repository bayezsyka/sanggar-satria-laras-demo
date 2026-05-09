import Button from "./Button";
import Container from "./Container";

const PageHero = ({ eyebrow, title, description, actions = [] }) => (
  <section className="relative flex min-h-[50vh] flex-col justify-center overflow-hidden border-b border-soga/10 bg-[radial-gradient(circle_at_top_left,rgba(199,161,90,0.15),transparent_40%),linear-gradient(180deg,var(--color-krem)_0%,var(--color-putih-hangat)_100%)] py-20 sm:py-24">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(90deg,transparent_0%,rgba(199,161,90,0.18)_50%,transparent_100%)] opacity-70" />
    <Container>
      <div className="max-w-4xl space-y-6">
        {eyebrow ? (
          <span className="inline-flex rounded-full border border-soga/15 bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-soga">
            {eyebrow}
          </span>
        ) : null}
        <div className="space-y-4">
          <h1 className="font-serif text-4xl leading-tight text-coklat-gelap sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-soga sm:text-lg">{description}</p>
        </div>
        {actions.length ? (
          <div className="flex flex-wrap gap-3">
            {actions.map((action) => (
              <Button
                key={action.label}
                href={action.href}
                rel={action.rel}
                target={action.target}
                to={action.to}
                variant={action.variant}
              >
                {action.label}
              </Button>
            ))}
          </div>
        ) : null}
      </div>
    </Container>
  </section>
);

export default PageHero;
