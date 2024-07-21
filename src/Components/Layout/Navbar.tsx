import { FunctionComponent, useEffect, useRef, useState } from "react";
import Button from "../../common/Button";
import { navBarData } from "../../DataMapper/acmeHome";

const Navbar: FunctionComponent = () => {
  const { logo, navList } = navBarData;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const ref: any = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (ref.current?.contains(e.target as Node)) {
        return;
      }
      setIsMenuOpen(false);
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, []);

  return (
    <div className="fixed z-[9999] bg-white w-full left-0 top-0" ref={ref}>
      <div className="max-w-[1200px] m-auto p-4 relative">
        <div className="flex gap-2 justify-between w-full items-center">
          <h1
            className="text-[#2026d2] font-bold text-4xl italic cursor-pointer"
            onClick={() => window.open("/", "_self")}
          >
            {logo}
          </h1>
          <div className="gap-8 items-center py-1 hidden md:flex">
            <div className="flex gap-6 items-center cursor-pointer">
              {navList.map(({ name, value }, index) => (
                <p
                  className="text-[#737396] font-semibold"
                  key={index}
                  onClick={() => {
                    document.getElementById(value)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "start",
                    });
                  }}
                >
                  {name}
                </p>
              ))}
            </div>
            <Button onClick={() => {}}>Sign Up</Button>
          </div>
          <div
            className="w-fit cursor-pointer md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img src="" alt="close" />
          </div>
        </div>
        {isMenuOpen && (
          <div className="fixed top-[72px] left-0 bg-white w-full h-full py-4 rounded-b-lg animate-slideleft">
            <div className="gap-6 items-center py-1 flex flex-col md:hidden">
              <div className="flex flex-col gap-6 items-center">
                {navList.map(({ name, value }, index) => (
                  <p
                    className="text-[#737396] font-semibold text-xl"
                    key={index}
                    onClick={() => {
                      document.getElementById(value)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "start",
                      });
                      setIsMenuOpen(false);
                    }}
                  >
                    {name}
                  </p>
                ))}
              </div>
              <Button onClick={() => {}}>
                <p className="text-xl px-2"> Sign Up</p>
              </Button>
            </div>
          </div>
        )}
      </div>
      <style>{`
        body {
          overflow: ${isMenuOpen ? "hidden" : "auto"};
        }
      `}</style>
    </div>
  );
};

export default Navbar;
