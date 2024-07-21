import { FunctionComponent } from "react";
import Button from "../../../common/Button";
import { ComponentIds } from "../../../DataMapper/acmeHome";

interface Props {
  title: string;
  priceList: Array<{
    heading: string;
    price: string;
    benefitList: Array<string>;
  }>;
}
const Testimonials: FunctionComponent<Props> = ({ priceList, title }) => {
  return (
    <div className="flex flex-col gap-10" id={ComponentIds.PRICING}>
      <p className="text-3xl font-bold text-center w-full">{title}</p>
      <div className="grid md:grid-cols-3 gap-y-10 md:gap-6 self-center">
        {priceList.map(({ heading, price, benefitList }, index) => (
          <div
            key={index}
            className="hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between w-full h-full gap-6 items-center text-center p-8 shadow-lg bg-white rounded-lg md:w-fit"
          >
            <div className="flex flex-col items-center gap-2">
              <p className="text-2xl font-bold text-[#374151]">{heading}</p>
              <p className="text-3xl font-bold text-[#2026d2]">{price}</p>
            </div>
            <div className="flex flex-col gap-2">
              {benefitList.map((benefit) => (
                <p className="font-semibold">{benefit}</p>
              ))}
            </div>
            <Button onClick={() => {}}>
              <p className="text-xl px-2"> Sign Up</p>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
