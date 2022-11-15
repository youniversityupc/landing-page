import clsx from "clsx";
import { SectionComponent } from "../types/sections";

const videos = [
  {
    title: "About-the-Team",
    id: "rN2Ju5j-V18",
  },
  {
    title: "About-the-Product",
    id: "KcVo6hQy4Wc",
  },
];

export const VideosSection: SectionComponent = (props) => {
  const { id, className } = props;
  return (
    <section
      id={id}
      className={clsx(className, "flex flex-col py-8 space-y-8")}
    >
      {videos.map((video, index) => (
        <div key={index} className="flex flex-col items-center px-4 space-y-8">
          <span className="font-semibold text-xl md:text-3xl">
            {video.title}
          </span>
          <div className="responsive-video max-w-md">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={`${video.title} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ))}
    </section>
  );
};
