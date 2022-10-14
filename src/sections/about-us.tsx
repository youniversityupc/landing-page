import { CheckIcon } from "@heroicons/react/24/outline";
import clsx from 'clsx';
import YOUniversity from '../../public/youniversity.svg';
import { SectionComponent } from '../types/sections';

const items = [
  "Seguimos la tecnología desde 2003",
  "Somos estudiantes de la Universidad Peruana de Ciencias Aplicadas",
  "Estamos cursando nuestro 6to ciclo",
];

export const AboutUsSection: SectionComponent = (props) => {
  const { id, className } = props;
  return (
    <section id={id} className={clsx(className, "flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 py-16")}>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <YOUniversity className="h-96 max-w-full" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4 px-4">
        <span className="text-xl sm:text-2xl font-semibold">
          Somos un equipo de programadores creativos
        </span>
        <span className="text-lg sm:text-xl">
          Usamos nuestros conocimientos tecnológicos para innovar y crear nuevos proyectos útiles para nuestras comunidades.
        </span>
        <ul className="list-none space-y-2">
          {items.map(item => (
            <li key={item} className="flex space-x-2">
              <CheckIcon className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="font-light text-sm sm:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
