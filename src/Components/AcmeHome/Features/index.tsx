import { FunctionComponent } from "react";
import { ComponentIds } from "../../../DataMapper/acmeHome";

interface Props {
  title: string;
  featureList: Array<{ image: string; heading: string; subHeading: string }>;
}
const Features: FunctionComponent<Props> = ({ featureList, title }) => {
  return (
    <div className="flex flex-col gap-10" id={ComponentIds.FEATURES}>
      <p className="text-3xl font-bold text-center w-full">{title}</p>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-10 md:gap-6 self-center">
        {featureList.map(({ heading, image, subHeading }, index) => (
          <div
            key={index}
            className="hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 items-center text-center p-8 shadow-[0_4px_6px_rgba(0,0,0,0.1)] bg-white rounded-lg w-fit"
          >
            <img src={image} height={56} width={72} alt={heading} />
            <div className="flex flex-col items-center max-w-[320px]">
              <p className="text-xl font-bold text-[#374151]">{heading}</p>
              <p className="font-medium text-[#737396]">{subHeading}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
