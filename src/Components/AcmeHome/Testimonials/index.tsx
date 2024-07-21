import { FunctionComponent } from "react";
import { ComponentIds } from "../../../DataMapper/acmeHome";

interface Props {
  title: string;
  testimonialList: Array<{ heading: string; profilePic: string; name: string }>;
}
const Testimonials: FunctionComponent<Props> = ({ testimonialList, title }) => {
  return (
    <div className="flex flex-col gap-10" id={ComponentIds.testimonials}>
      <p className="text-3xl font-bold text-center w-full">{title}</p>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 self-center">
        {testimonialList.map(({ heading, name, profilePic }, index) => (
          <div
            key={index}
            className="hover:-translate-y-1 max-w-[384px] transition-all duration-300 flex flex-col justify-between gap-4 items-center text-center p-8 shadow-[0_4px_6px_rgba(0,0,0,0.1)] bg-white rounded-lg w-fit"
          >
            <div className="flex flex-col items-center justify-between h-full gap-4">
              <p className="text-xl font-medium italic text-[#374151]">
                {heading}
              </p>
              <div className="flex gap-2 items-center">
                <img src={profilePic} height={36} width={36} alt={heading} />
                <p className="font-medium text-[#737396]">{name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
