import Button from "./Button";
import Card from "./Card";

const EmptyState = ({
  title,
  description,
  actionLabel,
  actionTo,
}) => (
  <Card className="mx-auto max-w-2xl text-center">
    <div className="space-y-4">
      <h3 className="font-serif text-3xl text-coklat-gelap">{title}</h3>
      <p className="text-sm leading-7 text-soga">{description}</p>
      {actionLabel && actionTo ? (
        <div className="pt-2">
          <Button to={actionTo} variant="outline">
            {actionLabel}
          </Button>
        </div>
      ) : null}
    </div>
  </Card>
);

export default EmptyState;
