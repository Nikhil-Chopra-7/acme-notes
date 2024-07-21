import { FunctionComponent } from "react";
import { ComponentIds } from "../../../DataMapper/acmeHome";

interface Props {
  title: string;
  testimonialList: Array<{ heading: string; profilePic: string; name: string }>;
}
const Testimonials: FunctionComponent<Props> = ({ testimonialList, title }) => {
  return (
    <div className="flex flex-col gap-8" id={ComponentIds.testimonials}>
      <p className="text-2xl font-bold">{title}</p>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 self-center">
        {testimonialList.map(({ heading, name, profilePic }, index) => (
          <div
            key={index}
            className="hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-4 items-center text-center p-8 shadow-[0_4px_6px_rgba(0,0,0,0.1)] bg-white rounded-lg w-fit"
          >
            <div className="flex flex-col items-center max-w-[320px]">
              <p className="font-medium">{heading}</p>
              <div className="flex gap-2 items-center">
                <img src={profilePic} height={16} width={16} alt={heading} />
                <p className="font-medium">{name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
