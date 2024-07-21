import { FunctionComponent } from "react";
import {
  faqData,
  featuresList,
  heroBannerData,
  priceList,
  testimonialData,
} from "../../DataMapper/acmeHome";
import Layout from "../Layout";
import Faqs from "./Faqs";
import Features from "./Features";
import HeroBanner from "./HeroBanner";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";

const AcmeHome: FunctionComponent = () => {
  return (
    <Layout>
      <div className="bg-[#FAFAFA]">
        <div className="px-4 max-w-[1200px] m-auto flex flex-col gap-10 md:gap-16 py-16">
          <HeroBanner {...heroBannerData} />
          <Features featureList={featuresList} title={"Features"} />
          <Testimonials
            testimonialList={testimonialData}
            title={"What Our Users Say"}
          />
          <Pricing title={"Pricing"} priceList={priceList} />
          <Faqs faqList={faqData} title="Frequently Asked Questions" />
        </div>
      </div>
    </Layout>
  );
};

export default AcmeHome;
