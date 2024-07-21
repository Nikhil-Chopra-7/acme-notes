import { FunctionComponent } from "react";

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
    <div className="flex flex-col gap-8">
      <p className="text-2xl font-bold">{title}</p>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 self-center">
        {priceList.map(({ heading, price, benefitList }, index) => (
          <div
            key={index}
            className="hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-4 items-center text-center p-8 shadow-[0_4px_6px_rgba(0,0,0,0.1)] bg-white rounded-lg w-fit"
          >
            <div className="flex flex-col items-center max-w-[320px]">
              <p className="font-medium">{heading}</p>
              <p className="font-medium">{price}</p>
            </div>
            <div className="flex flex-col gap-2">
              {benefitList.map((benefit) => (
                <p>{benefit}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
