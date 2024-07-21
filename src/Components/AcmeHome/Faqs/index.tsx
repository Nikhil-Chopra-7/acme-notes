import { FunctionComponent, useState } from "react";

interface Props {
  faqList: Array<{ question: string; answer: string }>;
}
const Faqs: FunctionComponent<Props> = ({ faqList }) => {
  const [isOpenIndex, setIsOpenIndex] = useState<number>();

  return (
    <div>
      <div className="flex flex-col gap-4 max-w-[730px]">
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
              <img src="/" alt="close" height={16} width={16} />
            </div>
            {isOpenIndex === index && <p>{answer}</p>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
