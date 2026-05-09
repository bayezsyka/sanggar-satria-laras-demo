export const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-putih-hangat rounded-2xl border border-krem shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
