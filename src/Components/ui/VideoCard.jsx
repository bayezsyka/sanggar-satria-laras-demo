import Badge from "./Badge";
import Button from "./Button";
import Card from "./Card";

const VideoCard = ({ video }) => (
  <Card className="flex h-full flex-col gap-5">
    <div className="video-shell flex aspect-video items-end rounded-[22px] p-5">
      <div className="max-w-[14rem] rounded-3xl border border-white/15 bg-coklat-gelap/35 p-4 backdrop-blur">
        <p className="font-serif text-2xl text-putih-hangat">{video.title}</p>
        <p className="mt-2 text-sm text-putih-hangat/75">{video.category}</p>
      </div>
    </div>
    <div className="space-y-3">
      <Badge>{video.category}</Badge>
      <h3 className="font-serif text-2xl text-coklat-gelap">{video.title}</h3>
      <p className="text-sm leading-7 text-soga">{video.description}</p>
    </div>
    <div className="mt-auto">
      {video.link ? (
        <Button href={video.link} target="_blank" rel="noreferrer" variant="secondary">
          Tonton di YouTube
        </Button>
      ) : (
        <span className="inline-flex rounded-full border border-soga/15 bg-krem px-4 py-2 text-sm font-medium text-soga">
          {video.status}
        </span>
      )}
    </div>
  </Card>
);

export default VideoCard;
