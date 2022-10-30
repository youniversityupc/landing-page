import YOUniversity from '../../public/youniversity.svg';
import GooglePlayBadge from '../../public/google-play-badge.svg';
import { SectionComponent } from '../types/sections';
import clsx from 'clsx';

export const HeroSection: SectionComponent = (props) => {
  const { id, className } = props;
  return (
    <section id={id} className={clsx(className, "flex flex-col lg:flex-row py-24 lg:px-16")}>
      <div className="px-8 lg:px-0 z-10 flex flex-col justify-center w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <YOUniversity className="h-16 lg:h-32 w-auto" />
          <h1 className="mt-4 lg:mt-0 lg:ml-4 text-4xl lg:text-7xl text-primary font-semibold">
            YOUniversity
          </h1>
        </div>
        <div className="mt-8 lg:mt-16 text-3xl lg:text-5xl text-primary-darker font-medium text-center">
          <span className="block">
            La <span className="text-primary font-bold">universidad</span> a
          </span>
          <span className="block">
            <span className="text-primary font-bold">tu</span> manera
          </span>
        </div>
        <div className="mt-4 lg:mt-8 text-xl text-gray-600 font-medium text-center">
          La organización que siempre quisiste, ahora en tu teléfono.
        </div>
        <div className="mt-8 flex justify-center items-center">
          <GooglePlayBadge className="h-14 w-auto" />
        </div>
      </div>
    </section>
  );
};
