import { FunctionComponent, ReactNode } from "react";

interface Props {
  onClick: () => void;
  children: ReactNode;
  type?: "PRIMARY";
}

const Button: FunctionComponent<Props> = ({
  onClick,
  children,
  type = "PRIMARY",
}) => {
  const getColorClasses = () => {
    if (type === "PRIMARY") return "bg-[#2026d2] text-[#fff]";
  };
  return (
    <button
      className={`${getColorClasses()} transition-all duration-300 hover:opacity-70 hover:scale-105 rounded-3xl py-2 px-3 text-sm md:px-4 md:text-base font-medium w-fit`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
