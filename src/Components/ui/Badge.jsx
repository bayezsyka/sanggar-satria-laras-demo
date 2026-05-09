const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-flex w-fit rounded-full border border-emas-redup/30 bg-emas-redup/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-soga ${className}`.trim()}
  >
    {children}
  </span>
);

export default Badge;
