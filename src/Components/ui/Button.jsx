import { Link } from "react-router-dom";

export const Button = ({ 
  children, 
  variant = "primary", 
  to, 
  href, 
  className = "", 
  onClick,
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-soga";
  
  const variants = {
    primary: "bg-coklat-gelap text-putih-hangat hover:bg-soga",
    secondary: "bg-soga text-putih-hangat hover:bg-coklat-gelap",
    outline: "bg-transparent border-soga text-soga hover:bg-soga hover:text-putih-hangat"
  };

  const combinedClassName = `${baseStyle} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
