import React, { createContext, useEffect, useState } from "react";

const CreatingContext = createContext();

/* On Scroll Animation With AOS*/

import AOS from "aos";
import "aos/dist/aos.js";
import "aos/dist/aos.css";

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
      "1 Samriddh Kendra, a venture by Creditbucket Technologies Private Limited, is dedicated to enhancing financial literacy and inclusion in rural India. Incubated at STPI Chennai and supported by the Government of Bihar, we provide accessible financial services and education to empower underserved communities.",
  },
  {
    questionNum: "collapseTwo",
    question: "Why we are?",
    answer:
      "2 Samriddh Kendra, a venture by Creditbucket Technologies Private Limited, is dedicated to enhancing financial literacy and inclusion in rural India. Incubated at STPI Chennai and supported by the Government of Bihar, we provide accessible financial services and education to empower underserved communities.",
  },
  {
    questionNum: "collapseThree",
    question: "What is the eligibility criteria to become a Samriddh Kendra?",
    answer:
      "3 Samriddh Kendra, a venture by Creditbucket Technologies Private Limited, is dedicated to enhancing financial literacy and inclusion in rural India. Incubated at STPI Chennai and supported by the Government of Bihar, we provide accessible financial services and education to empower underserved communities.",
  },
  {
    questionNum: "collapseFour",
    question: "What documents do I need to register on Samriddh Kendra?",
    answer:
      "4 Samriddh Kendra, a venture by Creditbucket Technologies Private Limited, is dedicated to enhancing financial literacy and inclusion in rural India. Incubated at STPI Chennai and supported by the Government of Bihar, we provide accessible financial services and education to empower underserved communities.",
  },
  {
    questionNum: "collapseFive",
    question: "How will I earn via Samriddh Kendra?",
    answer:
      "5 Samriddh Kendra, a venture by Creditbucket Technologies Private Limited, is dedicated to enhancing financial literacy and inclusion in rural India. Incubated at STPI Chennai and supported by the Government of Bihar, we provide accessible financial services and education to empower underserved communities.",
  },
];

const educationLoan = [
  {
    questionNum: "collapseOne",
    question:
      "How does Samriddh differ from other financial assistance program or education?",
    answer:
      "1 Samriddh Kendra, a venture by Creditbucket Technologies Private Limited, is dedicated to enhancing financial literacy and inclusion in rural India. Incubated at STPI Chennai and supported by the Government of Bihar, we provide accessible financial services and education to empower underserved communities.",
  },
  {
    questionNum: "collapseTwo",
    question: "What are the minimum eligibility requirements to apply?",
    answer:
      "2 Samriddh Kendra, a venture by Creditbucket Technologies Private Limited, is dedicated to enhancing financial literacy and inclusion in rural India. Incubated at STPI Chennai and supported by the Government of Bihar, we provide accessible financial services and education to empower underserved communities.",
  },
  {
    questionNum: "collapseThree",
    question: "What are the application requirements?",
    answer:
      "3 Samriddh Kendra, a venture by Creditbucket Technologies Private Limited, is dedicated to enhancing financial literacy and inclusion in rural India. Incubated at STPI Chennai and supported by the Government of Bihar, we provide accessible financial services and education to empower underserved communities.",
  },
  {
    questionNum: "collapseFour",
    question: "When do I start repayment?",
    answer:
      "4 Samriddh Kendra, a venture by Creditbucket Technologies Private Limited, is dedicated to enhancing financial literacy and inclusion in rural India. Incubated at STPI Chennai and supported by the Government of Bihar, we provide accessible financial services and education to empower underserved communities.",
  },
];

/* End FAQ */

export const ContextProvider = ({ children }) => {
  /* Education Loan */

  const [loanType, setLoanType] = useState("Undergraduate Loan");

  /* On Scroll Animation With AOS*/

  useEffect(() => {
    AOS.init({ offset: 200, duration: 2000 });
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
      }}
    >
      {children}
    </CreatingContext.Provider>
  );
};

export default CreatingContext;
