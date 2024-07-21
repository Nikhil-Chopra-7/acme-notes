import { FunctionComponent } from "react";

interface Props {
  title: string;
  featureList: Array<{ image: string; heading: string; subHeading: string }>;
}
const Features: FunctionComponent<Props> = ({ featureList, title }) => {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-2xl font-bold">{title}</p>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 self-center">
        {featureList.map(({ heading, image, subHeading }, index) => (
          <div
            key={index}
            className="hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 items-center text-center p-8 shadow-[0_4px_6px_rgba(0,0,0,0.1)] bg-white rounded-lg w-fit"
          >
            <img src={image} height={100} width={100} alt={heading} />
            <div className="flex flex-col items-center max-w-[320px]">
              <p className="text-xl font-bold">{heading}</p>
              <p className="font-medium">{subHeading}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
