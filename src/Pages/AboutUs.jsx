import React, { useContext, useState } from "react";
import Title from "./../components/Titles/Title";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CreatingContext from "../context/ContexAPI";
import ApplyBtn from "../components/Buttons/ApplyBtn";
import ContactUsForm from "../components/ContactForms/ContactUsForm";
import EducationLoanTitle from "../components/Titles/EducationLoanTitle";

const AboutUs = () => {
  const { carouselOptions, faqData } = useContext(CreatingContext);
  const [story, setStory] = useState("2018");

  return (
    <div className="aboutUs">
      <div data-aos="zoom-in" className={`about_section_1`}>
        <div className="image-container text-center mt-7">
          <img
            className="img-fluid about-hero-img"
            src="/aboutUsImg1.webp"
            alt=""
          />
        </div>
      </div>

      <div data-aos="fade-down" className={`about_section_2 container `}>
        <Title
          first_text={"Why did we start"}
          span_text={"Samriddh Kendra"}
          last_text={"?"}
        />

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            <div
              className={`visionMissionPurposeContainer d-lg-flex d-md-flex d-sm-flex d-none justify-content-center align-items-lg-start align-items-md-center align-items-center flex-column gap-4 position-relative`}
            >
              <div data-aos="fade-down" className={`visionContainer`}>
                <h2 className={`font-inter fs-1 fw-semibold commonTitle`}>
                  VISION
                </h2>
                <p className="font-inter fs-4 fw-medium">
                  To be the most trusted and loved insurance and benefits
                  provider in the world
                </p>
              </div>
              <div data-aos="fade-down" className={`visionContainer`}>
                <h2 className={`font-inter fs-1 fw-semibold commonTitle`}>
                  MISSION
                </h2>
                <p className="font-inter fs-4 fw-medium">
                  To ensure 10 million lives by 2025
                </p>
              </div>
              <div data-aos="fade-down" className={`visionContainer`}>
                <h2 className={`font-inter fs-1 fw-semibold commonTitle`}>
                  PURPOSE
                </h2>
                <p className="font-inter fs-4 fw-medium">
                  To positively impact the health and financial wellbeing of
                  every human
                </p>
              </div>
            </div>
            <div
              className={`visionMissionPurposeContainer d-lg-none d-md-none d-sm-none d-flex order-last position-relative`}
            >
              <OwlCarousel
                className="owl-carousel owl-theme"
                {...carouselOptions}
              >
                <div className="item">
                  <div className={`visionContainer`}>
                    <h2 className={`font-inter fs-1 fw-semibold commonTitle`}>
                      VISION
                    </h2>
                    <p className="font-inter fs-4 fw-medium">
                      To be the most trusted and loved insurance and benefits
                      provider in the world
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className={`visionContainer MISSION`}>
                    <h2 className={`font-inter fs-1 fw-semibold commonTitle`}>
                      MISSION
                    </h2>
                    <p className="font-inter fs-4 fw-medium">
                      To ensure 10 million lives by 2025
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className={`visionContainer PURPOSE`}>
                    <h2 className={`font-inter fs-1 fw-semibold commonTitle`}>
                      PURPOSE
                    </h2>
                    <p className="font-inter fs-4 fw-medium">
                      To positively impact the health and financial wellbeing of
                      every human
                    </p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className="col-lg-6  col-md-12 col-12">
            <div className="image-container text-center mt-lg-0 mt-md-5 order-first p-5 mt-lg-0 mt-md-0 mt-7">
              <img className="img-fluid" src="./aboutUsImg2.webp" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-down" className="about_section_3 container-fluid">
        <Title
          first_text={"Samriddh Kendra:"}
          span_text={"A Journey Towards Financial Inclusion"}
          last_text={""}
        />

        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-3 col-md-4 col-12">
              <ul className="storyNav h-100 ps-5 text-center nav d-flex flex-column flex-nowrap gap-3">
                <li className="nav-item">
                  <a
                    className={`nav-link fw-bold font-inter  ${
                      story === "2018" && "active"
                    }`}
                    aria-current="page"
                    onClick={() => setStory("2018")}
                  >
                    2018
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link fw-bold font-inter  ${
                      story === "2019-2022" && "active"
                    }`}
                    onClick={() => setStory("2019-2022")}
                  >
                    2019-2022
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link fw-bold font-inter  ${
                      story === "2023" && "active"
                    }`}
                    onClick={() => setStory("2023")}
                  >
                    2023
                  </a>
                </li>{" "}
                <li className="nav-item">
                  <a
                    className={`nav-link fw-bold font-inter  ${
                      story === "2024" && "active"
                    }`}
                    onClick={() => setStory("2024")}
                  >
                    2024
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 col-md-8 col-12">
              {story === "2018" ? (
                <div className=" storybg mt-lg-0 mt-md-0 mt-7 d-flex justify-content-center align-items-center flex-column rounded-5">
                  <img src="/timelineIcon.png" alt="" />
                  <p className="fs-26 font-inter fw-medium">
                    The Vision and Foundation
                  </p>
                </div>
              ) : story === "2019-2022" ? (
                <div className="storybg position-relative mt-lg-0 mt-md-0 mt-7 rounded-5">
                  <img
                    className="position-absolute"
                    src="/Collaboration.png"
                    alt=""
                  />
                  <h2 className="font-inter fw-bold fs-20 pt-3">
                    Collaboration & Market Research
                  </h2>

                  <ul className="fw-medium font-inter fs-18 mt-4">
                    <li>
                      Collaborated with PhonePe, BharatPe, Amazon Pay, and
                      Airtel for merchant and customer acquisition in Bihar,
                      Jharkhand, West Bengal, Odisha, Uttar Pradesh, and NESA.
                    </li>
                    <li>On Boarded 21 Lakh merchants</li>
                    <li>
                      Began market research for financial inclusion in rural and
                      semi-urban areas.
                    </li>
                    <li>
                      October 2022: Started developing the Minimum Viable
                      Product (MVP).
                    </li>
                  </ul>
                </div>
              ) : story === "2023" ? (
                <div className="storybg position-relative mt-lg-0 mt-md-0 mt-7 rounded-5">
                  <img
                    className="position-absolute"
                    src="/Establishment.png"
                    alt=""
                  />
                  <h2 className="font-inter fw-bold fs-20 pt-3">
                    Establishment & Growth
                  </h2>

                  <ul className="fw-medium font-inter fs-18 mt-4">
                    <li>
                      April 2023: Official registration as Creditbucket
                      Technologies Private Limited.
                    </li>
                    <li>May 2023: Recognized by Startup India.</li>
                    <li>
                      July-August 2023: MVP launched, onboarding 1,600 merchants
                      (Samriddh Sathi) across 400 pincodes.
                    </li>
                    <li>
                      July-September 2023: 10,000 customers onboarded; disbursed
                      loans worth INR 5 crore in three months.
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="storybg position-relative mt-lg-0 mt-md-0 mt-7 rounded-5">
                  <img
                    className="position-absolute"
                    src="/Expansion.png"
                    alt=""
                  />
                  <h2 className="font-inter fw-bold fs-20 pt-3">
                    Scaling & Expansion
                  </h2>

                  <ul className="fw-medium font-inter fs-18 mt-4">
                    <li>
                      April 2024: Recognized as a Startup by the Government of
                      Bihar, received INR 10 lakh in funding.
                    </li>
                    <li>
                      June 2024: Selected for STPI FinBlue Incubation and IIT
                      Patna's Moonpreneur Cohort.
                    </li>
                    <li>
                      July 2024: Chosen for Wadhwani Foundation’s Liftoff
                      Program, received AWS credits for infrastructure.
                    </li>
                    <li>
                      September 2024: Generated revenue; partnered with Bank of
                      Baroda, Bajaj Finserv, Aditya Birla Finance, and others.
                    </li>
                    <li>
                      Selected for global programs like Qatar FinTech Hub Wave 6
                      and DAD Ki Startupshala.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-down" className="about_section_4">
        <div className="container">
          <Title first_text={"Our core values"} span_text={""} last_text={""} />
        </div>

        <div className="coreValue container-fluid">
          <div className="d-flex h-100 mx-auto text-center font-inter align-items-center justify-content-center p-5">
            <div className="fw-semibold fs-28 text-medium-gray w-100 mx-auto">
              <span>S</span>ustainable <span>A</span>ccess to <span>M</span>
              arket and <span>R</span>ural <span>I</span>nitiatives for{" "}
              <span>D</span>
              riving <span>D</span>evelopment and <span>H</span>olistic growth
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-down" className="about_section_5">
        <Title
          first_text={"The Team Behind Samriddh Kendra"}
          span_text={""}
          last_text={""}
        />
        <div className="container">
          <div className="row gap-5 justify-content-lg-center justify-content-md-center justify-content-start flex-lg-wrap flex-md-wrap flex-sm-nowrap flex-nowrap justify-content-start profiles-sliders">
            <div data-aos="flip-right" className="card text-center font-inter">
              <div className="profile-container ">
                <img
                  src="./Suman Saurav.png"
                  className="img-fluid profile"
                  alt="..."
                />
              </div>
              <div className="light-gray-bg mt-4">
                <div className="card-body">
                  <h5 className="card-title fs-26 fw-semibold text-dark-blue">
                    Suman Saurav
                  </h5>
                  <p className="text-light-blue fs-26">Founder and CEO</p>
                  <p className="card-text fs-18 text-light-gray">
                    Hello, Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="flip-right" className="card text-center font-inter">
              <div className="profile-container ">
                <img
                  src="./Bipul Kumar.png"
                  className="img-fluid profile"
                  alt="..."
                />
              </div>
              <div className="light-gray-bg mt-4">
                <div className="card-body">
                  <h5 className="card-title fs-26 fw-semibold text-dark-blue">
                    Bipul Kumar
                  </h5>
                  <p className="text-light-blue fs-26">Founder and CE</p>
                  <p className="card-text fs-18 text-light-gray">
                    Hello, Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="flip-right" className="card text-center font-inter">
              <div className="profile-container ">
                <img
                  src="./Rajesh Mishra.png"
                  className="img-fluid profile"
                  alt="..."
                />
              </div>
              <div className="light-gray-bg mt-4">
                <div className="card-body">
                  <h5 className="card-title fs-26 fw-semibold text-dark-blue">
                    Rajesh Mishra
                  </h5>
                  <p className="text-light-blue fs-26">
                    CBO- Distribution Head
                  </p>
                  <p className="card-text fs-18 text-light-gray">
                    Hello, Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="flip-right" className="card text-center font-inter">
              <div className="profile-container ">
                <img
                  src="./Vishal Chopra.png"
                  className="img-fluid profile"
                  alt="..."
                />
              </div>
              <div className="light-gray-bg mt-4">
                <div className="card-body">
                  <h5 className="card-title fs-26 fw-semibold text-dark-blue">
                    Vishal Chopra
                  </h5>
                  <p className="text-light-blue fs-26">
                    Strategy and Product -head
                  </p>
                  <p className="card-text fs-18 text-light-gray">
                    Hello, Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="EducationLoanSection_9 px-lg-0 px-md-0 px-4">
        <EducationLoanTitle
          title={"Frequently Asked Questions"}
          color="black"
          fontSize="fs-32"
          ratings={false}
          pera=""
          pera2={""}
        />

        <div className="container">
          <div className="faqContainer row ">
            <div className="  col-12">
              <div className="accordion" id="accordionExample">
                {faqData.map((data, index) => {
                  return (
                    <div key={index} className="accordion-item mt-3 rounded-4">
                      <h2 className="accordion-header ">
                        <button
                          className={`accordion-button
                            collapsed
                           fs-20 font-inter rounded-4`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${data.questionNum}`}
                          aria-expanded="false"
                          aria-controls={data.questionNum}
                        >
                          {data.question}
                        </button>
                      </h2>

                      <div
                        id={data.questionNum}
                        className={`accordion-collapse collapse answerContainer my-lg-3 my-md-2 my-2`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body fs-20 font-inter p-5">
                          <h2 className="fs-26 fw-semibold my-4">Answer</h2>
                          {data.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="about_section_6">
        <Title
          first_text={"Want to create an Impact?"}
          span_text={"Join Samriddh Kendra for building a Samriddh Bharat"}
          last_text={""}
        />

        <div className="container">
          <div className="row font-inter">
            <div className="col-lg-6 col-md-12 col-12">
              <div data-aos="fade-up" className="benefits-card rounded-4">
                <div className="img-container">
                  <img
                    className="img-fluid benefits"
                    src="./benefitsImg2.png"
                    alt=""
                  />
                </div>
                <div className="text-container">
                  <h2 className="fs-24 text-white text-center">As Employee</h2>

                  <div className="Benifits-list text-white">
                    <p className="fs-18 text-war">Benefits</p>
                    <ul className="fs-18">
                      <li>Competitive salary</li>
                      <li>Work friendly environment</li>
                      <li>Learning exposure</li>
                      <li>Work with founders </li>
                    </ul>
                  </div>

                  <a
                    style={{ color: "#fff" }}
                    href="https://sk-on-prem-prod-onboarding.web.app/170e3ebc-c478-4acc-9dd6-75cdf022ca3f/f2758c73-7e44-4a1d-bdd8-791f4aa00535/d1625db5-e8fe-4e77-ada9-ed7677475e93?name=SAMRIDDH+SATHI&creator_id=6f483a6f-63a8-48c5-9c48-605bea5597cf"
                  >
                    <button className="btn btn-outline-light w-100 p-4 fs-2 rounded-4">
                      Join
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div data-aos="fade-down" className="benefits-card rounded-4">
                <div className="img-container">
                  <img
                    className="img-fluid benefits"
                    src="./benefitsImg1.png"
                    alt=""
                  />
                </div>
                <div className="text-container">
                  <h2 className="fs-24 text-white text-center">As Partner</h2>

                  <div className="Benifits-list text-white">
                    <p className="fs-18 text-war">Benefits</p>
                    <ul className="fs-18">
                      <li>0 investment</li>
                      <li>Earn upto 1.5 lacks per months extra</li>
                      <li>Work at your convenience</li>
                    </ul>
                  </div>

                  <a
                    style={{ color: "#fff" }}
                    href="https://sk-on-prem-prod-onboarding.web.app/170e3ebc-c478-4acc-9dd6-75cdf022ca3f/f2758c73-7e44-4a1d-bdd8-791f4aa00535/d1625db5-e8fe-4e77-ada9-ed7677475e93?name=SAMRIDDH+SATHI&creator_id=6f483a6f-63a8-48c5-9c48-605bea5597cf"
                  >
                    <button className="btn btn-outline-light w-100 p-4 fs-2 rounded-4">
                      Join
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactUsForm />
    </div>
  );
};

export default AboutUs;
