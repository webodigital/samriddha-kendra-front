import React, { useContext, useEffect, useLayoutEffect } from "react";
import Button from "../components/Buttons/Button";
import Title from "../components/Titles/Title";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CreatingContext from "../context/ContexAPI";
import { useLocation } from "react-router-dom";

const BecomeOurPartner = () => {
  const { carouselOptions, productsCarouselOptions, faqData } =
    useContext(CreatingContext);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Use setTimeout to allow for a small delay
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          // Scroll to the element smoothly
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Delay of 0 ms (executes after the event loop tick)
    }
  }, [location]);

  useLayoutEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="BecomeOurPartner">
      <section className="container-fluid mt-15 BecomeOurPartner_section_1">
        <div className="row align-items-center justify-content-xl-around justify-content-lg-center  justify-content-md-center justify-content-center">
          <div
            data-aos="fade-down"
            className="col-xl-7 col-lg-6 col-md-6 col-12"
          >
            <img src="./MERCHANTHeroImg.png" className="img-fluid" />
          </div>

          <div
            data-aos="fade-up"
            className="col-xl-5  col-lg-6 col-md-6 col-12 p-8 p-5-mv"
          >
            <h1 className="title-font fw-semibold fs-40">
              Join Samriddh: Sell, earn, and live your dreams!
            </h1>
            <p className="fs-20 mt-5 mb-5 text-light-gray ">
              Start your business with zero Investment with Samriddh and sell
              financial product to earn up to Rs 1.5 lac per months
            </p>

            <div className="btn-container mt-7">
              <Button content={"Download application"} />
            </div>
          </div>
        </div>
      </section>

      <section className="BecomeOurPartner_section_2">
        <Title
          first_text={"Who can become "}
          span_text={"Samriddh Sathi ?"}
          last_text={""}
        />
        <div className="container">
          <div className="row justify-content-lg-center justify-content-md-center justify-content-start flex-lg-wrap flex-md-wrap flex-sm-nowrap flex-nowrap justify-content-start agent-card-slider gap-4">
            <div
              data-aos="flip-right"
              className="agent-card d-flex justify-content-between  align-items-center flex-column bg-light-gray text-center"
            >
              <div className="img-container">
                <img className="img-fluid" src="Loan Agents.webp" alt="" />
              </div>
              <p className="font-inter fs-24 fw-semibold ">Loan Agents</p>
            </div>
            <div
              data-aos="flip-left"
              className="agent-card d-flex justify-content-between  align-items-center flex-column bg-light-gray text-center"
            >
              <div className="img-container">
                <img
                  className="img-fluid"
                  src="Former bank employees.webp"
                  alt=""
                />
              </div>
              <p className="font-inter fs-24 fw-semibold ">
                Former bank employees
              </p>
            </div>
            <div
              data-aos="flip-right"
              className="agent-card d-flex justify-content-between  align-items-center flex-column bg-light-gray text-center"
            >
              <div className="img-container">
                <img className="img-fluid" src="Insurance agents.webp" alt="" />
              </div>
              <p className="font-inter fs-24 fw-semibold ">Insurance agents</p>
            </div>

            <div
              data-aos="flip-left"
              className="agent-card d-flex justify-content-between  align-items-center flex-column bg-light-gray text-center"
            >
              <div className="img-container">
                <img className="img-fluid" src="Wealth Advisors.webp" alt="" />
              </div>
              <p className="font-inter fs-24 fw-semibold ">Wealth Advisors</p>
            </div>
            <div
              data-aos="flip-right"
              className="agent-card d-flex justify-content-between  align-items-center flex-column bg-light-gray text-center"
            >
              <div className="img-container">
                <img
                  className="img-fluid"
                  src="BFSI Professionals.webp"
                  alt=""
                />
              </div>
              <p className="font-inter fs-24 fw-semibold ">
                BFSI Professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="BecomeOurPartner_section_3">
        <Title
          first_text={"4 easy steps to"}
          span_text={"start Earning"}
          last_text={""}
        />

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12 order-lg-first order-md-last order-last">
              <div
                className={`startEarning text-white d-lg-flex d-md-flex d-sm-flex d-none justify-content-center align-items-lg-start align-items-md-center align-items-center flex-column gap-4 `}
              >
                <div
                  data-aos="fade-down"
                  className={`startEarningCard active  step1`}
                >
                  <h2 className={`font-inter fs-1 fw-semibold `}>Sign up</h2>
                  <p className="font-inter fs-4 fw-medium">
                    Click on Signup Button and create an account
                  </p>
                  <p className="steps fw-semibold font-zilla">1</p>
                </div>
                <div data-aos="fade-down" className={`startEarningCard step2`}>
                  <h2 className={`font-inter fs-1 fw-semibold `}>
                    Complete KYC{" "}
                  </h2>
                  <p className="font-inter fs-4 fw-medium">
                    Complete your pan and Aadhar verification
                  </p>
                  <p className="steps fw-semibold font-zilla">2</p>
                </div>
                <div data-aos="fade-down" className={`startEarningCard step3`}>
                  <h2 className={`font-inter fs-1 fw-semibold `}>
                    Complete Your product training{" "}
                  </h2>
                  <p className="font-inter fs-4 fw-medium">
                    Complete your pan and Aadhar verification
                  </p>
                  <p className="steps fw-semibold font-zilla">3</p>
                </div>
                <div data-aos="fade-up" className={`startEarningCard step4`}>
                  <h2 className={`font-inter fs-1 fw-semibold `}>
                    Start selling & earning
                  </h2>
                  <p className="font-inter fs-4 fw-medium">
                    Get payout on lead conversion
                  </p>
                  <p className="steps fw-semibold font-zilla">4</p>
                </div>
              </div>
            </div>
            <div
              className={` d-lg-none d-md-none d-sm-none d-flex order-last position-relative bg-dark-blue`}
            >
              <OwlCarousel
                className="owl-carousel owl-theme"
                {...carouselOptions}
              >
                <div className="item">
                  <div className={`startEarningCard text-center  step1`}>
                    <h2 className={`font-inter fs-1 fw-semibold `}>Sign up</h2>
                    <p className="font-inter fs-4 fw-medium">
                      Click on Signup Button and create an account
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className={`startEarningCard text-center step2`}>
                    <h2 className={`font-inter fs-1 fw-semibold `}>
                      Complete KYC{" "}
                    </h2>
                    <p className="font-inter fs-4 fw-medium">
                      Complete your pan and Aadhar verification
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className={`startEarningCard text-center step3`}>
                    <h2 className={`font-inter fs-1 fw-semibold `}>
                      Complete Your product training{" "}
                    </h2>
                    <p className="font-inter fs-4 fw-medium">
                      Complete your pan and Aadhar verification
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className={`startEarningCard text-center step4`}>
                    <h2 className={`font-inter fs-1 fw-semibold `}>
                      Start selling & earning
                    </h2>
                    <p className="font-inter fs-4 fw-medium">
                      Get payout on lead conversion
                    </p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
            <div
              data-aos="fade-down"
              className="col-lg-6  col-md-12 col-12 order-lg-last order-md-first order-first"
            >
              <div className="image-container text-center mt-lg-0 mt-md-5 mt-5  p-5">
                <img className="img-fluid" src="./start Earning.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="BecomeOurPartner_section_4 ">
        <Title first_text={"Products we"} span_text={"Offer"} last_text={""} />

        <div className="container-fluid">
          <div className="productContainer">
            <div className="row">
              <div className="col-lg-10 col-md-10 col-sm-9 col-9">
                <OwlCarousel
                  className="owl-carousel owl-theme"
                  {...productsCarouselOptions}
                >
                  <div className="item">
                    <div className="productCard text-center">
                      <div className="img-container">
                        <img className="img-fluid" src="./EV LOAN.png" alt="" />
                      </div>
                      <p className="font-inter fs-18 fw-medium text-white">
                        EV LOAN
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="productCard text-center">
                      <div className="img-container">
                        <img
                          className="img-fluid"
                          src="./BUSINESS LOAN2.png"
                          alt=""
                        />
                      </div>
                      <p className="font-inter fs-18 fw-medium text-white">
                        BUSINESS LOAN
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="productCard text-center">
                      <div className="img-container">
                        <img
                          className="img-fluid"
                          src="./MICRO LOAN AGAINST PROPERTY.png"
                          alt=""
                        />
                      </div>
                      <p className="font-inter fs-18 fw-medium text-white">
                        MICRO LOAN AGAINST PROPERTY
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="productCard text-center">
                      <div className="img-container">
                        <img
                          className="img-fluid"
                          src="./LOAN AGAINST SECURITY.png"
                          alt=""
                        />
                      </div>
                      <p className="font-inter fs-18 fw-medium text-white">
                        LOAN AGAINST SECURITY
                      </p>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-3 col-3">
                <p className="fs-36 fw-medium text-white title-font text-lg-center text-md-center text-sm-center text-start mt-12">
                  Loan
                </p>
              </div>
            </div>
          </div>
          <div className="productContainer mt-5">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-3 col-4 px-5">
                <p className="fs-36 fw-medium text-white title-font text-lg-center text-md-center text-sm-start text-start mt-12">
                  Insurance
                </p>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-9 col-8">
                <OwlCarousel
                  className="owl-carousel owl-theme"
                  {...productsCarouselOptions}
                >
                  <div className="item">
                    <div className="productCard text-center">
                      <div className="img-container">
                        <img
                          className="img-fluid"
                          src="./Health insurance.png"
                          alt=""
                        />
                      </div>
                      <p className="font-inter fs-18 fw-medium text-white">
                        Health Insurance
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="productCard text-center">
                      <div className="img-container">
                        <img
                          className="img-fluid"
                          src="./Life Insurance.png"
                          alt=""
                        />
                      </div>
                      <p className="font-inter fs-18 fw-medium text-white">
                        Life Insurance
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="productCard text-center">
                      <div className="img-container">
                        <img
                          className="img-fluid"
                          src="./Shop insurance.png"
                          alt=""
                        />
                      </div>
                      <p className="font-inter fs-18 fw-medium text-white">
                        Shop Insurance
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="productCard text-center">
                      <div className="img-container">
                        <img
                          className="img-fluid"
                          src="./Motor insurance.png"
                          alt=""
                        />
                      </div>
                      <p className="font-inter fs-18 fw-medium text-white">
                        Motor Insurance
                      </p>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="BecomeOurPartner_section_5 mb-7">
        <Title first_text={"Why work with us?"} span_text={""} last_text={""} />

        <div className="container-fluid h-100">
          <div className="samriddh-kendra position-relative h-100">
            <div className="center-avatar text-center">
              <img
                src="Sammrridh Kendra.png"
                className="img-fluid"
                alt="Avatar"
              />
              <h2 className="fs-26 fw-semibold font-inter text-white">
                Samriddh Kendra
              </h2>
            </div>
            <div className="row justify-content-center align-items-center h-100 pt-lg-0 pt-md-0 pt-25">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="leftSideCards d-flex justify-content-center flex-column align-items-center gap-lg-5 gap-md-5 gap-3 mb-3">
                  <div
                    data-aos="fade-down"
                    className="card rounded-5 p-5 bg-white "
                  >
                    <h2 className="font-inter fs-16 fw-semibold">
                      Wide Ranges of Products
                    </h2>
                    <p className="font-inter fs-16 text-light-gray mt-1">
                      Understand and sell an array of financial questions to
                      your customers.
                    </p>
                  </div>
                  <div
                    data-aos="fade-down"
                    className="card rounded-5 p-5 bg-white "
                  >
                    <h2 className="font-inter fs-16 fw-semibold">
                      Easy Digital Process
                    </h2>
                    <p className="font-inter fs-16 text-light-gray mt-1">
                      Get your payout credited in your account under minimum
                      time.
                    </p>
                  </div>
                  <div
                    data-aos="fade-down"
                    className="card rounded-5 p-5 bg-white "
                  >
                    <h2 className="font-inter fs-16 fw-semibold">
                      Smallest Payout Cycle
                    </h2>
                    <p className="font-inter fs-16 text-light-gray mt-1">
                      Get your payout credited in your account under minimum
                      time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="rightSideCards d-flex justify-content-center flex-column align-items-center gap-lg-5 gap-md-5 gap-3">
                  <div
                    data-aos="fade-down"
                    className="card rounded-5 p-5 bg-white "
                  >
                    <h2 className="font-inter fs-16 fw-semibold">
                      Free Education and Training
                    </h2>
                    <p className="font-inter fs-16 text-light-gray mt-1">
                      Our dedicated training and sales team will provide
                      assistance at every step to achieve your goals.
                    </p>
                  </div>
                  <div
                    data-aos="fade-down"
                    className="card rounded-5 p-5 bg-white "
                  >
                    <h2 className="font-inter fs-16 fw-semibold">
                      Instant Support
                    </h2>
                    <p className="font-inter fs-16 text-light-gray mt-1">
                      Please call or text us, and our team will get in touch
                      with you as soon as possible to assist you.
                    </p>
                  </div>
                  <div
                    data-aos="fade-down"
                    className="card rounded-5 p-5 bg-white "
                  >
                    <h2 className="font-inter fs-16 fw-semibold">
                      Best in Class Commission
                    </h2>
                    <p className="font-inter fs-16 text-light-gray mt-1">
                      Earn an attractive amount of money on each financial
                      product you sell.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="BecomeOurPartner_section_6">
        <header className="container mb-5">
          <Title
            first_text="What our"
            span_text="Partners"
            last_text="say about us?"
          />
        </header>

        <div className="partners-Customers py-5 container-fluid">
          <div className="container py-5 position-relative positions1">
            <div className="d-flex justify-content-xl-start justify-content-lg-between align-items-center flex-lg-row flex-md-column flex-column justify-content-md-center">
              <div
                className="
              ratings-container col-xl-4 col-lg-4 col-md-12 col-12  mb-md-5 mb-5 d-flex justify-content-xl-center justify-content-lg-center justify-content-md-start justify-content-start order-lg-last order-md-first order-first
               "
              >
                <div className="  rating-card">
                  <div className="img-container">
                    <img className="img-fluid" src="ratings.webp" alt="" />
                  </div>
                  <div className="d-flex flex-column align-items-lg-center align-items-md-start align-items-start">
                    <p className="fs-lg-3 fs-md-2 fs-1 text-white font-poppins mt-4">
                      Our Partners
                    </p>

                    <div className=" ratings mb-7">
                      <span className="text-war fs-lg-3 fs-md-2 fs-1 mx-1">
                        5.0
                      </span>{" "}
                      <img
                        className="d-md-block  d-none"
                        src="./star.png"
                        alt="rating"
                      />
                      <img
                        className="d-md-block  d-none"
                        src="./star.png"
                        alt="rating"
                      />
                      <img
                        className="d-md-block  d-none"
                        src="./star.png"
                        alt="rating"
                      />
                      <img
                        className="d-md-block  d-none"
                        src="./star.png"
                        alt="rating"
                      />
                      <img
                        className="d-md-block  d-none"
                        src="./star.png"
                        alt="rating"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" reviews-container col-xl-8 col-lg-8 col-md-12 col-12 order-md-last order-last">
                <div className="reviews">
                  <OwlCarousel
                    className="owl-carousel owl-theme"
                    {...carouselOptions}
                  >
                    <div className=" item">
                      <div className="bg-white review-card rounded-top-6 d-flex flex-column justify-content-between">
                        <div className="text">
                          <h2 className="title-font text-dark fs-1 fw-bold">
                            Top notch team, top notch product
                          </h2>
                          <p className="font-inter fs-lg-4 fs-md-3 fs-sm-2 fs-7 text-gray mt-5">
                            Metaforms has been a gamechanger in our journey of
                            optimising our user funnels. The level of attention
                            to detail the team brings with pro-activeness in
                            understanding the nuances of business is exemplary. 
                          </p>
                        </div>
                        <div className="profile-footer d-flex align-items-center">
                          <img
                            className="img-fluid avatar mr-4"
                            src="./avtar.png"
                            alt=""
                          />
                          <div className="d-flex flex-column gap-2">
                            <p className="fs-2 font-poppins fw-semibold ">
                              Apoorva
                            </p>
                            <p className="fs-4 font-poppins">Porter</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="  item">
                      <div className="bg-white review-card rounded-4">
                        <div className="top-container">
                          <div className="img">
                            <img src="./empty-img.webp" alt="" />
                          </div>
                          <h2 className="title-font fs-1 text-dark fw-bold mx-4">
                            All necessary integrations were available.
                          </h2>
                        </div>
                        <div className="profile-footer d-flex align-items-center">
                          <img
                            className="img-fluid avatar mr-4"
                            src="./avtar.png"
                            alt=""
                          />
                          <div className="d-flex flex-column gap-2">
                            <p className="fs-2 font-poppins fw-semibold ">
                              Apoorva
                            </p>
                            <p className="fs-4 font-poppins">Porter</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" item">
                      <div className="bg-white review-card rounded-top-6 d-flex flex-column justify-content-between">
                        <div className="text">
                          <h2 className="title-font text-dark fs-1 fw-bold">
                            Top notch team, top notch product
                          </h2>
                          <p className="font-inter fs-lg-4 fs-md-3 fs-sm-2 fs-7  text-gray mt-5">
                            Metaforms has been a gamechanger in our journey of
                            optimising our user funnels. The level of attention
                            to detail the team brings with pro-activeness in
                            understanding the nuances of business is exemplary. 
                          </p>
                        </div>
                        <div className="profile-footer d-flex align-items-center">
                          <img
                            className="img-fluid avatar mr-4"
                            src="./avtar.png"
                            alt=""
                          />
                          <div className="d-flex flex-column gap-2">
                            <p className="fs-2 font-poppins fw-semibold ">
                              Apoorva
                            </p>
                            <p className="fs-4 font-poppins">Porter</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="  item">
                      <div className="bg-white review-card rounded-4">
                        <div className="top-container">
                          <div className="img">
                            <img src="./empty-img.webp" alt="" />
                          </div>
                          <h2 className="title-font fs-1 text-dark fw-bold mx-4">
                            All necessary integrations were available.
                          </h2>
                        </div>
                        <div className="profile-footer d-flex align-items-center">
                          <img
                            className="img-fluid avatar mr-4"
                            src="./avtar.png"
                            alt=""
                          />
                          <div className="d-flex flex-column gap-2">
                            <p className="fs-2 font-poppins fw-semibold ">
                              Apoorva
                            </p>
                            <p className="fs-4 font-poppins">Porter</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="BecomeOurPartner_section_7" id="faq">
        <Title
          first_text="Frequently Asked "
          span_text="Questions"
          last_text=""
        />

        <div className="container">
          <div className="d-flex align-content-center mx-lg-0 mx-md-0 mx-4">
            <div className="inputContainer flex-grow-1 position-relative">
              <input
                type="text"
                placeholder="Describe your issue"
                className="w-100 h-100 border-none fs-24 font-inter outline-none bg-medium-gray rounded-4 px-11 fw-medium"
              />
              <img
                className="img-fluid position-absolute"
                width={38}
                src="./search.png"
                alt=""
              />
            </div>
            <button className="btn bg-dark-blue px-6 font-inter fs-24 text-white rounded-4">
              Search
            </button>
          </div>

          <div className="faqContainer position-relative row mt-5">
            <div className="col-xl-7 col-lg-6 col-md-6 col-12 col-md-12 col-12">
              <div className="accordion" id="accordionExample">
                {faqData.map((data, index) => {
                  return (
                    <div key={index} className="accordion-item mt-3 rounded-4">
                      <h2 className="accordion-header ">
                        <button
                          className={`accordion-button ${
                            index === 0 ? "" : "collapsed"
                          } fs-20 font-inter rounded-4 px-5 py-4`}
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
                        className={`accordion-collapse ${
                          index === 0 ? "collapse show" : "collapse"
                        }  answerContainer my-lg-3 my-md-2 my-2`}
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
            <div className="col-xl-5 col-lg-6 col-md-12 col-12"></div>
          </div>
        </div>
      </section>

      <section className="BecomeOurPartner_section_8 p-6 my-10 text-white">
        <div className="container p-lg-5 p-md-3 p-1">
          <div className="row flex-columna align-items-center  justify-content-center gap-5 text-center p-lg-5 p-md-3 p-1">
            <p className="title-font fs-36 fw-medium">
              Unlock your path to financial freedom, join Samriddh Kendra In few
              easy steps and work at your convenience.
            </p>

            <a
              style={{ color: "#fff" }}
              href="https://sk-on-prem-prod-onboarding.web.app/170e3ebc-c478-4acc-9dd6-75cdf022ca3f/f2758c73-7e44-4a1d-bdd8-791f4aa00535/d1625db5-e8fe-4e77-ada9-ed7677475e93?name=SAMRIDDH+SATHI&creator_id=6f483a6f-63a8-48c5-9c48-605bea5597cf"
            >
              <button className="btn mt-4 joinbtn text-white font-inter fs-24 fw-semibold">
                JOIN SAMRIDDH
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="BecomeOurPartner_section_9 ">
        <Title first_text="" span_text="Merchants near you" last_text="" />

        <div className="container">
          <div className="row mapContainer py-4 px-3 ">
            <div className="col-lg-9 col-md-7 col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224036.74191885843!2d77.09712574317457!3d28.672468696115956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1724671222604!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-100 h-100 rounded-5"
              ></iframe>
            </div>
            <div className="col-lg-3 col-md-5 col-12">
              <div className="row flex-column justify-content-center align-items-center mt-lg-0 mt-md-0 mt-5">
                <h1 className="text-center fs-26 fw-semibold font-inter color-light-blue">
                  Merchant Details
                </h1>

                <div className="d-flex flex-column mt-4 p-4 rounded-5 pinCodeContainer">
                  <div className="d-flex gap-3">
                    <div className="location-icon mt-1">
                      <img
                        className="img-fluid location"
                        src="location 1.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-white fs-20 font-inter">
                        ENTER PIN CODE
                      </p>
                      <p className="color-light-blue fs-16 font-inter">
                        Enter pin code details to find merchants near that
                        specific pin code
                      </p>
                    </div>
                  </div>
                  <input
                    type="number"
                    placeholder="X X X X X X X X"
                    className="text-center w-100 p-1 font-inter rounded-4 fs-18 pinCodeInput text-white border-none"
                  />
                </div>

                <p className="font-inter fs-20 color-light-blue mt-5 text-center">
                  2 PEOPLE FOUND
                </p>

                <div className="profile_Card">
                  <div className="topContainer rounded-top-4 d-flex justify-content-between align-items-center bg-white p-4">
                    <div className="userDetailsContainer d-flex align-items-center gap-4">
                      <img
                        width={51}
                        height={51}
                        className="img-fluid"
                        src="./ProfileImg.png"
                        alt=""
                      />
                      <div className="txt">
                        <h2 className="font-inter fs-20 fw-medium">
                          Raju Mahajan
                        </h2>
                        <p className="font-inter fs-14 text-light-gray">
                          Joined 26 May, 2009
                        </p>
                      </div>
                    </div>
                    <div className="locationIcon">
                      <img src="./redIconLocation.png" alt="" />
                    </div>
                  </div>
                  <div className="bottomContainer rounded-bottom-4 bg-dark-gray p-4">
                    <p className="text-dark-blue fs-16 fw-medium font-inter ">
                      Samiddh kendra has helped me to generate extra income.
                    </p>
                    <div className="d-flex bg-dark rounded-4">
                      <img
                        className="img-fluid rounded-4"
                        src="./moneyImg.png"
                        alt=""
                      />

                      <div className="txt p-4 ">
                        <h2 className="fw-semibold fs-12 font-inter text-white">
                          Golden Opportunity for Everyone earn Upto 1 Lakh.
                        </h2>
                        <a
                          className="text-light-gray fs-8 font-inter fw-medium"
                          href="https://www.youtube.com/watch?v=M4PEcv7kc3o"
                        >
                          https://www.youtube.com/watch?v=M4PEcv7kc3o
                        </a>
                      </div>
                    </div>
                    <button className="requestContact text-center btn bg-white w-100 mt-4 p-4 fs-18 font-inter fw-medium text-light-blue rounded-3">
                      <img
                        src="./bluePhoneIcon.png"
                        className="img-fluid me-3"
                        alt=""
                      />
                      Request Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeOurPartner;
