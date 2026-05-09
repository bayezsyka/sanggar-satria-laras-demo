import { Link } from "react-router-dom";

const variantClasses = {
  primary:
    "bg-emas-redup text-coklat-gelap hover:bg-emas-redup/90 shadow-[0_14px_34px_rgba(43,29,20,0.16)]",
  secondary:
    "bg-coklat-gelap text-white hover:bg-coklat-gelap/92 shadow-[0_14px_34px_rgba(43,29,20,0.16)]",
  outline:
    "border border-soga/30 bg-white/70 text-coklat-gelap hover:border-emas-redup hover:bg-krem",
  "outline-light":
    "border border-white/20 bg-white/5 text-white hover:bg-white/12",
  ghost:
    "bg-transparent text-coklat-gelap hover:bg-krem/70",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emas-redup focus-visible:ring-offset-2 focus-visible:ring-offset-putih-hangat";

const Button = ({
  children,
  variant = "primary",
  className = "",
  to,
  href,
  target,
  rel,
  ...props
}) => {
  const classes = `${baseClasses} ${variantClasses[variant] ?? variantClasses.primary} ${className}`.trim();

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noreferrer" : undefined)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
