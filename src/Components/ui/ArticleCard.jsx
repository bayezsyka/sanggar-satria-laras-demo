import Badge from "./Badge";
import Card from "./Card";

const ArticleCard = ({ article }) => (
  <Card className="flex h-full flex-col gap-4">
    <div className="flex flex-wrap items-center gap-2">
      <Badge>{article.category}</Badge>
      <span className="text-sm text-soga/75">{article.readingTime}</span>
    </div>
    <div className="space-y-3">
      <h3 className="font-serif text-2xl text-coklat-gelap">{article.title}</h3>
      <p className="text-sm leading-7 text-soga">{article.excerpt}</p>
    </div>
    <p className="mt-auto text-sm font-semibold text-emas-redup">Detail artikel statis dapat dikembangkan dari slug lokal nanti.</p>
  </Card>
);

export default ArticleCard;
