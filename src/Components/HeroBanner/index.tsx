import { FunctionComponent } from "react";
import Button from "../../common/Button";

interface Props {
  heading: string;
  subHeading: string;
  ctaText: string;
  cta: () => void;
}
const HeroBanner: FunctionComponent<Props> = ({
  cta,
  ctaText,
  heading,
  subHeading,
}) => {
  return (
    <section className="flex w-full justify-center py-24">
      <div className="flex flex-col gap-4 md:gap-5 items-center">
        <div className="flex flex-col gap-3 md:gap-4 items-center text-center">
          <h1 className="text-2xl md:text-5xl text-[#2026d2] font-bold">
            {heading}
          </h1>
          <h2 className="text-[#374151] font-semibold md:text-2xl">
            {subHeading}
          </h2>
        </div>
        <Button onClick={cta}>{ctaText}</Button>
      </div>
    </section>
  );
};

export default HeroBanner;
