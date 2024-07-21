import { FunctionComponent, ReactNode } from "react";

interface Pross {
  children: ReactNode;
}
const Layout: FunctionComponent<Pross> = ({ children }) => {
  return <div>hi{children}</div>;
};

export default Layout;
