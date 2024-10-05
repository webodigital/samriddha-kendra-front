import React, { createContext, useEffect, useState } from "react";

const CreatingContext = createContext();

/* On Scroll Animation With AOS*/

import AOS from "aos";
import "aos/dist/aos.js";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

/* carouselOptions */

const carouselOptions = {
  margin: 30,
  responsiveClass: true,
  loop: true,
  nav: true,
  dots: false,
  autoplay: true,
  navText: [
    '<img src="./Arrow left.png" alt="" />',
    '<img src="./Arrow right.png" alt="" />',
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
  },
};

const productsCarouselOptions = {
  margin: 30,
  items: 4,
  loop: true,
  responsiveClass: true,
  nav: false,
  dots: false,
  autoplay: true,
  navText: [
    '<img src="./Arrow left.png" alt="" />',
    '<img src="./Arrow right.png" alt="" />',
  ],
  responsive: {
    0: { items: 1 },
    500: { items: 2 },
    900: { items: 3 },
    1500: { items: 4 },
  },
};

const reviewCarouselOptions = {
  margin: 30,
  items: 3,
  loop: true,
  responsiveClass: true,
  nav: false,
  dots: true,
  autoplay: true,
  responsive: {
    0: { items: 1 },
    800: { items: 2 },
    1100: { items: 3 },
    1500: { items: 3 },
  },
};

const loanPartnersCarouselOptions = {
  margin: 30,
  items: 6,
  loop: true,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: true,
  responsive: {
    0: { items: 1 },
    800: { items: 3 },
    1100: { items: 4 },
    1500: { items: 6 },
  },
};

const partnersCarouselOptions = {
  margin: 20,
  items: 6,
  loop: true,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: true,
  responsive: {
    0: { items: 3 },
    800: { items: 3 },
    1100: { items: 4 },
    1500: { items: 6 },
  },
};

const aspirationsSliderCarouselOptions = {
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: true,
  navText: [
    '<img src="./Arrow left.png" alt="" />',
    '<img src="./Arrow right.png" alt="" />',
  ],
  responsive: {
    0: { items: 1 },
    500: { items: 2 },
    900: { items: 3 },
    1500: { items: 4 },
  },
};

/* End carouselOptions */

/* FAQ */

const faqData = [
  {
    questionNum: "collapseOne",
    question: "Who we are?",
    answer:
      "Samriddh Kendra, a venture by Creditbucket Technologies Private Limited, is committed to enhancing financial literacy and inclusion in rural India. We are incubated at STPI Chennai and supported by the Government of Bihar. Our goal is to provide accessible financial services and education, empowering under served communities.",
  },
  {
    questionNum: "collapseTwo",
    question: "Why do we exist?",
    answer:
      " Our mission is to bridge the financial inclusion gap in rural India. By offering financial literacy, accessible services, and support to underserved communities, we aim to empower individuals to achieve financial independence and stability, driving socio-economic growth and creating a positive societal impact through innovative solutions and dedicated efforts.",
  },
  {
    questionNum: "collapseThree",
    question:
      "What is the eligibility criteria to become a SAMRIDDH KENDRA Merchant?",
    answer:
      "Anyone can become a SAMRIDDH KENDRA merchant. Whether you’re a woman, girl,housewife, student, retiree, or someone from a financial background, there are no limits. This opportunity is open to anyone looking to earn extra income without any investment.",
  },
  {
    questionNum: "collapseFour",
    question: "What documents do I need to register on SAMRIDDH KENDRA?",
    answer:
      " You will need minimal documentation, including: Aadhar Card, PAN Card, Cancelled Cheque, A Photograph",
  },
  {
    questionNum: "collapseFive",
    question: "How will I earn via Samriddh Kendra?",
    answer:
      " Earnings are generated through lead conversion. Once you sell a financial product to your customer, the payout will be credited to your account promptly.",
  },
  {
    questionNum: "collapseSix",
    question: "How will I receive my earnings?",
    answer: " The payout will be credited to your bank account.",
  },
  {
    questionNum: "collapseSeven",
    question:
      "Are there any Registration & Other Charges for joining SAMRIDDH KENDRA?",
    answer:
      " Yes, there is a one-time registration charge of INR 999 + GST (18%).",
  },
  {
    questionNum: "collapseEight",
    question: "When can I start selling financial products?",
    answer:
      " After registering as a SAMRIDDH KENDRA Merchant, you can immediately start selling financial products to customers.",
  },
];

const educationLoan = [
  {
    questionNum: "collapseOne",
    question:
      "How does Samriddh differ from other financial assistance program or education?",
    answer:
      " Samriddh Kendra, a venture by Creditbucket Technologies Private Limited, is dedicated to enhancing financial literacy and inclusion in rural India. Incubated at STPI Chennai and supported by the Government of Bihar, we provide accessible financial services and education to empower underserved communities.",
  },
  {
    questionNum: "collapseTwo",
    question: "What are the minimum eligibility requirements to apply?",
    answer:
      " Samriddh Kendra, a venture by Creditbucket Technologies Private Limited, is dedicated to enhancing financial literacy and inclusion in rural India. Incubated at STPI Chennai and supported by the Government of Bihar, we provide accessible financial services and education to empower underserved communities.",
  },
  {
    questionNum: "collapseThree",
    question: "What are the application requirements?",
    answer:
      " Samriddh Kendra, a venture by Creditbucket Technologies Private Limited, is dedicated to enhancing financial literacy and inclusion in rural India. Incubated at STPI Chennai and supported by the Government of Bihar, we provide accessible financial services and education to empower underserved communities.",
  },
  {
    questionNum: "collapseFour",
    question: "When do I start repayment?",
    answer:
      " Samriddh Kendra, a venture by Creditbucket Technologies Private Limited, is dedicated to enhancing financial literacy and inclusion in rural India. Incubated at STPI Chennai and supported by the Government of Bihar, we provide accessible financial services and education to empower underserved communities.",
  },
];

const lapLoan = [
  {
    questionNum: "collapseOne",
    question: "Is Samriddh Kendra a direct loan provider?",
    answer:
      "No, Samriddh Kendra is a platform that connects borrowers with lenders.",
  },
  {
    questionNum: "collapseTwo",
    question: "What are the eligibility criteria for LAP loans?",
    answer:
      "Any individual or business owner with residential or commercial property can apply through our platform.",
  },
  {
    questionNum: "collapseThree",
    question: "How does Samriddh Kendra help in the loan process?",
    answer:
      " Samriddh Kendra acts as a bridge, simplifying the process by connecting you with lenders that match your needs.",
  },
  {
    questionNum: "collapseFour",
    question: "Are there any fees to use Samriddh Kendra’s platform?",
    answer:
      " Samriddh Kendra doesn’t charge users directly but partners with lenders who may have their fee structure.",
  },
  {
    questionNum: "collapseFive",
    question: "How long does it take to get a loan approved?",
    answer:
      " Loan approval takes 7-10 days after property valuation and document submission depending on the lender.",
  },
];

/* End FAQ */

export const ContextProvider = ({ children }) => {
  /* Education Loan */
  const [loanType, setLoanType] = useState("Undergraduate Loan");

  /* Move To Top */

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  /* On Scroll Animation With AOS*/

  useEffect(() => {
    AOS.init({ offset: 200, duration: 1500 });
  }, []);

  const handleLoanChange = (event) => {
    setLoanType(event.target.value);
  };

  /* Education Loan End */

  return (
    <CreatingContext.Provider
      value={{
        carouselOptions,
        productsCarouselOptions,
        faqData,
        loanType,
        handleLoanChange,
        aspirationsSliderCarouselOptions,
        educationLoan,
        reviewCarouselOptions,
        loanPartnersCarouselOptions,
        partnersCarouselOptions,
        lapLoan,
      }}
    >
      {children}
    </CreatingContext.Provider>
  );
};

export default CreatingContext;
