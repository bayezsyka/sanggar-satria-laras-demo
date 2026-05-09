const Card = ({ children, className = "" }) => {
  const hasBg = className.includes("bg-");
  return (
    <div
      className={`rounded-[28px] border border-soga/10 p-6 shadow-[0_20px_50px_rgba(43,29,20,0.08)] backdrop-blur ${hasBg ? "" : "bg-white/80"} ${className}`.trim()}
    >
      {children}
    </div>
  );
};

export default Card;
