import Head from 'next/head';
import YOUniversity from '../../public/youniversity.svg';
import GooglePlayBadge from '../../public/google-play-badge.svg';
import DividerSvg from '../../public/divider.svg';

const Home = (): React.ReactElement | null => {
  return (
    <main>
      <Head>
        <title>YOUniversity</title>
      </Head>
      <div className="bg-background min-h-screen max-h-screen flex px-16 relative">
        <div className="absolute min-h-screen max-h-screen top-0 right-0 z-0">
          <DividerSvg className="min-h-screen max-h-screen w-auto text-primary" />
        </div>
        <div className="pt-24 z-10">
          <div className="flex flex-row items-center">
            <YOUniversity className="h-32 w-auto" />
            <h1 className="ml-4 text-7xl text-primary font-semibold">
              YOUniversity
            </h1>
          </div>
          <div className="mt-16 text-5xl text-primary-darker font-medium">
            <span className="block">
              La <span className="text-primary font-bold">universidad</span> a
            </span>
            <span className="block">
              <span className="text-primary font-bold">tu</span> manera
            </span>
          </div>
          <div className="mt-8 text-xl text-gray-600 font-medium">
            La organización que siempre quisiste, ahora en tu teléfono.
          </div>
          <div className="mt-8">
            <GooglePlayBadge className="h-16 w-auto" />
          </div>
        </div>
        <div className="w-auto flex items-center justify-end z-10">
          <img src="/timetable@2x.png" className="h-5/6 w-auto rounded-md" />
        </div>
      </div>
    </main>
  );
};

export default Home;
