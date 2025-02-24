export const heroBannerData = {
  heading: (
    <p className="text-2xl md:text-5xl font-bold">
      Find, Trust, and Govern {""}
      <span className="text-[#2026d2]">AI-Ready</span> Data
    </p>
  ),
  subHeading: "The ultimate note-taking app to streamline your productivity",
  ctaText: "Get Started",
  cta: () => {
    document.getElementById(ComponentIds.PRICING)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  },
  image: "https://ik.imagekit.io/ho7e9hucv/Acme%20Notes/hero_banner.jpg",
};

export const featuresList = [
  {
    image: "https://ik.imagekit.io/ho7e9hucv/Acme%20Notes/easy.png",
    heading: "Easy to Use",
    subHeading:
      "Acme Note offers an intuitive interface that makes capturing notes quick and simple.",
  },
  {
    image: "https://ik.imagekit.io/ho7e9hucv/Acme%20Notes/note_book.png",
    heading: "Organize Notes",
    subHeading:
      "Use tags and folders to keep your notes structured and easily accessible.",
  },
  {
    image: "https://ik.imagekit.io/ho7e9hucv/Acme%20Notes/anywhere.png",
    heading: "Access Anywhere",
    subHeading:
      "Sync your notes across all your devices for access wherever you go.",
  },
  {
    image: "https://ik.imagekit.io/ho7e9hucv/Acme%20Notes/locked.png",
    heading: "Secure and Private",
    subHeading: "Your notes are securely stored and only accessible by you.",
  },
];

export const testimonialData = [
  {
    heading: `"Acme Note has revolutionized the way I take notes. It's simple and effective."`,
    profilePic: "https://ik.imagekit.io/ho7e9hucv/Acme%20Notes/profile.png",
    name: "Jane Doe - Jane Doe",
  },
  {
    heading: `"I love the organization features. My notes are always easy to find."`,
    profilePic: "https://ik.imagekit.io/ho7e9hucv/Acme%20Notes/profile.png",
    name: "John Smith - John Smith",
  },
  {
    heading: `"The best note-taking app I've used! The sync feature keeps my notes available wherever I am."`,
    profilePic: "https://ik.imagekit.io/ho7e9hucv/Acme%20Notes/profile.png",
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
  {
    heading: "Elite",
    price: "$19.99/month",
    benefitList: [
      "All Pro features",
      "Unlimited storage",
      "Advanced organization tools",
      "Priority support",
      "Team Collaborations",
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
