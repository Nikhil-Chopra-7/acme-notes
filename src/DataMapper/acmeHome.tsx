export const heroBannerData = {
  heading: "Find, Trust, and Govern AI-Ready Data",
  subHeading: "The ultimate note-taking app to streamline your productivity",
  ctaText: "Get Started",
  cta: () => {},
};

export const featuresList = [
  {
    image: "/",
    heading: "Easy to Use",
    subHeading:
      "Acme Note offers an intuitive interface that makes capturing notes quick and simple.",
  },
  {
    image: "/",
    heading: "Organize Notes",
    subHeading:
      "Use tags and folders to keep your notes structured and easily accessible.",
  },
  {
    image: "/",
    heading: "Access Anywhere",
    subHeading:
      "Sync your notes across all your devices for access wherever you go.",
  },
  {
    image: "/",
    heading: "Secure and Private",
    subHeading: "Your notes are securely stored and only accessible by you.",
  },
];

export const testimonialData = [
  {
    heading: `"Acme Note has revolutionized the way I take notes. It's simple and effective."`,
    profilePic: "/",
    name: "Jane Doe - Jane Doe",
  },
  {
    heading: `"I love the organization features. My notes are always easy to find."`,
    profilePic: "/",
    name: "John Smith - John Smith",
  },
  {
    heading: `"The best note-taking app I've used! The sync feature keeps my notes available wherever I am."`,
    profilePic: "/",
    name: "Sarah Lee - Sarah Lee",
  },
];

export const priceList = [
  {
    heading: "Free",
    price: "$0/month",
    benefitList: [
      "Basic note-taking features",
      "Limited storage",
      "Community support",
    ],
  },
  {
    heading: "Pro",
    price: "$9.99/month",
    benefitList: [
      "All basic features",
      "Unlimited storage",
      "Advanced organization tools",
      "Priority support",
    ],
  },
];

export const faqData = [
  {
    question: "How do I sign up?",
    answer: `Click on the "Sign Up" button and fill out the registration form. It's quick and easy!`,
  },
  {
    question: "Is there a free trial?",
    answer: `Yes, you can try the Pro version for 14 days for free. No credit card required.`,
  },
  {
    question: "Can I access my notes offline?",
    answer: `Yes, Acme Note allows you to access and edit your notes offline. Changes will sync once you're back online.`,
  },
  {
    question: "How secure are my notes?",
    answer: `Your notes are stored securely with end-to-end encryption, ensuring that only you have access to them.`,
  },
];

export enum ComponentIds {
  FEATURES = "features",
  PRICING = "pricing",
  testimonials = "testimonials",
  FAQS = "faqs",
}

export const navBarData = {
  logo: "acme",
  navList: [
    { name: "Features", value: ComponentIds.FEATURES },
    { name: "Pricing", value: ComponentIds.PRICING },
    { name: "Testimonials", value: ComponentIds.testimonials },
    { name: "FAQs", value: ComponentIds.FAQS },
  ],
};
