import { FunctionComponent, ReactNode } from "react";
import Button from "../../../common/Button";

interface Props {
  heading: ReactNode;
  subHeading: string;
  ctaText: string;
  cta: () => void;
  image: string;
}
const HeroBanner: FunctionComponent<Props> = ({
  cta,
  ctaText,
  heading,
  subHeading,
  image,
}) => {
  return (
    <section
      className="flex w-full justify-center items-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        aspectRatio: "16/8",
      }}
    >
      <div className="flex flex-col gap-4 md:gap-8 items-center py-24 px-4">
        <div className="flex flex-col gap-3 md:gap-6 items-center text-center">
          <h1 className="text-2xl md:text-5xl text-[#] font-bold text-[#374151]">
            {heading}
          </h1>
          <h2 className="text-[#737396] font-semibold md:text-2xl">
            {subHeading}
          </h2>
        </div>
        <Button onClick={cta}>
          <p className="md:text-lg"> {ctaText}</p>
        </Button>
      </div>
    </section>
  );
};

export default HeroBanner;
