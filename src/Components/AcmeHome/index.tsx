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
        <div className="m-auto flex flex-col gap-10 md:gap-0 pb-16 ">
          <HeroBanner {...heroBannerData} />
          <div className="md:py-20 px-4">
            <Features featureList={featuresList} title={"Features"} />
          </div>
          <div className="py-10 md:py-20 bg-gray-100 px-4">
            <Pricing title={"Pricing"} priceList={priceList} />
          </div>
          <div className="py-10 md:py-20 px-4">
            <Testimonials
              testimonialList={testimonialData}
              title={"What Our Users Say"}
            />
          </div>
          <div className="py-10 md:py-20 px-4">
            <Faqs faqList={faqData} title="Frequently Asked Questions" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AcmeHome;
