import { FunctionComponent, useState } from "react";
import { ComponentIds } from "../../../DataMapper/acmeHome";

interface Props {
  faqList: Array<{ question: string; answer: string }>;
  title: string;
}
const Faqs: FunctionComponent<Props> = ({ faqList, title }) => {
  const [isOpenIndex, setIsOpenIndex] = useState<number>();

  return (
    <div className="flex flex-col gap-8 items-center" id={ComponentIds.FAQS}>
      <p className="text-3xl font-bold text-center w-full">{title}</p>
      <div className="flex flex-col gap-4 max-w-[730px] justify-center items-center w-full">
        {faqList.map(({ answer, question }, index) => (
          <button
            key={index}
            onClick={() =>
              setIsOpenIndex((prev) => (prev === index ? -1 : index))
            }
            className={`p-5 bg-[#f4f4f4] flex flex-col w-full rounded-lg gap-4`}
          >
            <div className="flex gap-4 items-center justify-between w-full">
              <p className="text-xl font-semibold">{question}</p>
              <img
                src="https://ik.imagekit.io/ho7e9hucv/Acme%20Notes/down-arrow.png"
                alt="close"
                height={16}
                width={16}
                className={isOpenIndex === index ? "rotate-180" : ""}
              />
            </div>
            {isOpenIndex === index && <p>{answer}</p>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
