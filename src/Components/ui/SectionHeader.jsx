export const SectionHeader = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-coklat-gelap mb-4 font-serif">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-soga max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-emas-redup mx-auto mt-6 rounded-full opacity-70"></div>
    </div>
  );
};

export default SectionHeader;
