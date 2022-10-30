import Head from 'next/head';
import { Header } from '../components/header';
import { SectionDefinition } from '../types/sections';
import { HeroSection } from '../sections/hero';
import { FeaturesSection } from '../sections/features';
import { AboutUsSection } from '../sections/about-us';
import { VideosSection } from '../sections/videos';

const sections: SectionDefinition[] = [
  {
    id: 'hero',
    component: HeroSection,
  },
  {
    id: 'features',
    component: FeaturesSection,
  },
  {
    id: 'about-us',
    component: AboutUsSection,
  },
  {
    id: 'videos',
    component: VideosSection,
  },
];

const Home = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>YOUniversity</title>
      </Head>
      <Header className="bg-background flex items-center" />
      <main className="bg-background">
        {sections.map(item => <item.component key={item.id} id={item.id} className={item.className} />)}
      </main>
    </>
  );
};

export default Home;
