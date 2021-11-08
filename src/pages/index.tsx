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
      <div className="bg-background lg:min-h-screen lg:max-h-screen flex flex-col lg:flex-row pt-8 lg:px-16 lg:py-0 relative">
        <div className="hidden lg:block absolute min-h-screen max-h-screen top-0 right-0 z-0">
          <DividerSvg className="min-h-screen max-h-screen w-auto text-primary" />
        </div>
        <div className="px-8 lg:px-0 z-10 flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row items-center">
            <YOUniversity className="h-16 lg:h-32 w-auto" />
            <h1 className="mt-4 lg:mt-0 lg:ml-4 text-4xl lg:text-7xl text-primary font-semibold">
              YOUniversity
            </h1>
          </div>
          <div className="mt-8 lg:mt-16 text-3xl lg:text-5xl text-primary-darker font-medium text-center lg:text-left">
            <span className="block">
              La <span className="text-primary font-bold">universidad</span> a
            </span>
            <span className="block">
              <span className="text-primary font-bold">tu</span> manera
            </span>
          </div>
          <div className="mt-4 lg:mt-8 text-xl text-gray-600 font-medium text-center lg:text-left">
            La organización que siempre quisiste, ahora en tu teléfono.
          </div>
          <div className="mt-8 flex justify-center lg:justify-start items-center">
            <GooglePlayBadge className="h-14 w-auto" />
          </div>
        </div>
        <div className="mt-8 lg:mt-0 py-10 px-8 lg:py-0 lg:px-0 bg-primary lg:bg-transparent w-auto flex items-center justify-center lg:justify-end z-10">
          <img src="/timetable@2x.png" className="h-5/6 w-auto rounded-md" />
        </div>
      </div>
    </main>
  );
};

export default Home;
