import clsx from 'clsx';

export type Props = {
  text: string,
  imageUrl: string,
  inverted?: boolean,
  divClassName?: string,
  textClassName?: string,
};

const Feature = (props: Props): React.ReactElement | null => {
  const { text, imageUrl, inverted, divClassName, textClassName } = props;

  return (
    <div className={clsx(divClassName, "lg:min-h-screen lg:max-h-screen flex flex-col pt-8 lg:px-16 lg:py-0", inverted ? "lg:flex-row-reverse" : "lg:flex-row")}>
      <div className="px-8 lg:px-0 flex flex-col justify-center items-center">
        <span className={clsx(textClassName, "font-semibold text-center")}>
          {text}
        </span>
      </div>
      <div className={clsx("mt-8 lg:mt-0 py-10 px-8 lg:py-0 lg:px-0 lg:bg-transparent w-auto flex items-center justify-center", inverted ? "lg:justify-start" : "lg:justify-end")}>
        <img src={imageUrl} className="h-5/6 w-auto sm:w-2/5 sm:h-auto lg:h-5/6 lg:w-auto rounded-md" />
      </div>
    </div>
  );
};

export default Feature;
