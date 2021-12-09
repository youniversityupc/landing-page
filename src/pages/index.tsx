import Head from 'next/head';
import YOUniversity from '../../public/youniversity.svg';
import GooglePlayBadge from '../../public/google-play-badge.svg';
import Feature from '../components/feature';

const Home = (): React.ReactElement | null => {
  return (
    <main>
      <Head>
        <title>YOUniversity</title>
      </Head>
      <div className="bg-background lg:min-h-screen lg:max-h-screen flex flex-col lg:flex-row py-8 lg:px-16 lg:py-0">
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
      </div>
      <Feature
        text="Obtén un resumen diario de actividades pendientes"
        imageUrl="/home@2x.png"
        divClassName="bg-primary"
        textClassName="text-background text-4xl"
      />
      <Feature
        text="Organiza y añade tus horarios para mayor variedad"
        imageUrl="/timetable@2x.png"
        divClassName="bg-background"
        textClassName="text-primary text-4xl"
      />
      <Feature
        text="Registra tus cursos y la información correspondiente a cada uno"
        imageUrl="/courses@2x.png"
        divClassName="bg-primary"
        textClassName="text-background text-4xl"
      />
    </main>
  );
};

export default Home;
