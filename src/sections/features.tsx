import clsx from 'clsx';
import Feature from '../components/feature';
import { SectionComponent } from '../types/sections';

export const FeaturesSection: SectionComponent = (props) => {
  const { id, className } = props;
  return (
    <section id={id} className={clsx(className, "flex flex-col")}>
      <Feature
        text="Obtén un resumen diario de actividades pendientes"
        imageUrl="/home@2x.png"
        divClassName="bg-primary"
        textClassName="text-background text-4xl"
      />
      <Feature
        inverted
        text="Organiza y añade tus horarios para mayor variedad"
        imageUrl="/timetable@2x.png"
        textClassName="text-primary text-4xl"
      />
      <Feature
        text="Registra tus cursos y la información correspondiente a cada uno"
        imageUrl="/courses@2x.png"
        divClassName="bg-primary"
        textClassName="text-background text-4xl"
      />
    </section>
  );
};
