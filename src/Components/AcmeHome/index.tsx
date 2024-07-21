import { FunctionComponent } from "react";
import { heroBannerData } from "../../DataMapper/acmeHome";
import HeroBanner from "../HeroBanner";

const AcmeHome: FunctionComponent = () => {
  return (
    <div className="px-4">
      <HeroBanner {...heroBannerData} />
    </div>
  );
};

export default AcmeHome;
