import { FunctionComponent, ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Pross {
  children: ReactNode;
}
const Layout: FunctionComponent<Pross> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="mt-[72px] md:mt-20">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
