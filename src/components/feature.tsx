import clsx from 'clsx';

export type Props = {
  text: string,
  imageUrl: string,
  divClassName?: string,
  textClassName?: string,
};

const Feature = (props: Props): React.ReactElement | null => {
  const { text, imageUrl, divClassName, textClassName } = props;

  return (
    <div className={clsx(divClassName, "lg:min-h-screen lg:max-h-screen flex flex-col lg:flex-row pt-8 lg:px-16 lg:py-0")}>
      <div className="px-8 lg:px-0 flex flex-col justify-center items-center">
        <span className={clsx(textClassName, "font-semibold text-center")}> 
          {text}
        </span>
      </div>
      <div className="mt-8 lg:mt-0 py-10 px-8 lg:py-0 lg:px-0 lg:bg-transparent w-auto flex items-center justify-center lg:justify-end">
        <img src={imageUrl} className="h-5/6 w-auto sm:w-2/5 sm:h-auto lg:h-5/6 lg:w-auto rounded-md" />
      </div>
    </div>
  );
};

export default Feature;
