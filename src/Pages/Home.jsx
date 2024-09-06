import React, { useContext } from "react";
import Title from "../components/Titles/Title";
import Button from "../components/Buttons/Button";
import Card from "../components/Cards/Card";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CreatingContext from "../context/ContexAPI";
import { Link } from "react-router-dom";

const Home = () => {
  const { carouselOptions } = useContext(CreatingContext);

  return (
    <div className="Home">
      <section data-aos="zoom-in" className="container-fluid mt-15 section_1">
        <div className="container">
          <div className="row align-items-center justify-content-xl-around justify-content-lg-center  justify-content-md-center justify-content-center">
            <div className="col-xl-5  col-lg-6 col-md-6 col-12 text-lg-start text-center ">
              <h1 className="title-font fw-semibold fs-55">
                <span className="text-body-secondary fw-medium">
                  Bridging the gap
                </span>{" "}
                between borrower and Lenders
              </h1>
              <p className="fs-30 mt-5 mb-5 text-light-gray">
                Our mission is to connect rural customers with reliable services
              </p>
            </div>
            <div className="image_Container col-xl-7 col-lg-6 col-md-6 col-12">
              <img src="./Home_img_1.webp" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- */}

      <section data-aos="zoom-in" className="section_2">
        <header className="container col-12">
          <Title
            first_text="Samriddh Kendra"
            span_text="Offerings"
            last_text=""
          />
        </header>

        <div className="container-fluid loan_container py-7">
          <div className="row justify-content-md-center justify-content-center align-items-center">
            <div className="  col-xl-7 col-lg-6 col-md-12 col-12 ">
              <div className="image_container d-flex flex-column align-items-center ">
                <img className="img-fluid loan2" src="./Loan_img_1.webp" />
              </div>
            </div>
            <div className="  col-xl-5 col-lg-6 col-md-10 col-10  ">
              <div className="text_container  text-white d-flex flex-column justify-content-center align-items-start round">
                <p className="fs-36">Loan</p>
                <p className="font-inter fs-24">
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <div className="btn-container mt-5">
                  <Link to={"/products/loan/education_loan"}>
                    <Button content={"Apply for loan"} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- */}

      <section data-aos="zoom-in" className="section_3 mt-3">
        <div className="container-fluid Insurance">
          <div className="row justify-content-md-center justify-content-center">
            <div className="  col-xl-5 col-lg-6 col-md-10 col-sm-10 col-10  order-lg-last  order-md-last order-last">
              <div className="text_container text-white d-flex flex-column justify-content-center align-items-start round ">
                <p className="fs-36">Insurance</p>
                <p className="font-inter fs-24">
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <div className="btn-container mt-5">
                  <Link to={"/products/insurance/life"}>
                    <Button content={"Click to know more"} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="  col-xl-7 col-lg-6 col-md-12 col-sm-12 order-lg-last order-md-first order-first">
              <div className="image_container d-flex flex-column align-items-center  ">
                <img className="img-fluid Insurance2" src="./Insurance.webp" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- */}

      <section data-aos="zoom-in" className="container-fluid section_4 my-10">
        <div className="container p-7 bg-gray">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 ">
              <div className="text_container d-flex flex-column gap-4 mb-md-5 mb-5">
                <h2 className="font-inter fw-bold fs-36">Join Family</h2>
                <p className="fs-36 mt-7 fw-medium">
                  Become a SAMRIDDH Sathi/Samriddh Sahayak and sell financial
                  products
                </p>
                <div className="btn-container mt-3">
                  <Button content={"Click to know more"} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <div className="image_container text-xl-end text-center mt-md-5 mt-5">
                <img className="img-fluid mobile" src="./Mobile.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- */}

      <section data-aos="zoom-in" className="section_5">
        <header className="container col-12">
          <Title
            first_text="How does"
            span_text="Samriddh Kendra works?"
            last_text=""
          />

          <p className="fs-1 mb-5 text-light-gray px-2">
            Samriddh Kendra is pioneering an innovative approach to loan and
            Insurance distribution in rural Bharat by leveraging technology and
            establishing the Samriddh Sathi for effective implementation.
          </p>
        </header>
        <div className="container-fluid my-5">
          <div className="container">
            <div className="card-slider">
              <Card
                image={"./formicon.webp"}
                title={"Enter your basic details"}
                description={"Enter KYC & Loan requirements in the application"}
                steps={"1"}
              />
              <Card
                image={"./validation.webp"}
                title={"Validation"}
                description={
                  "Samriddh app validates your requirements with lenders and shows offer"
                }
                steps={"2"}
              />
              <Card
                image={"./offers.webp"}
                title={"Select loan offer"}
                description={
                  "Out of multiple loan offers given by samriddh, select the required loan offer"
                }
                steps={"3"}
              />
              <Card
                image={"./check.webp"}
                title={"Qulified lead passed and loan dispersed"}
                description={
                  "After you select the offer, Samriddh app passes the lead to lender, after which they disperse the loan"
                }
                steps={"4"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- */}

      <section data-aos="zoom-in" className="section_6">
        <header className="container mb-5">
          <Title first_text="" span_text="Recognitions" last_text="" />
        </header>

        <div className="recognitions container-fluid">
          <div className="container">
            <div className="Logo-slider">
              <div className="company-Logo col-3">
                <img
                  src="./wadhwanifoundation_logo.webp"
                  alt=""
                  className="img-fluid "
                />
              </div>
              <div className="company-Logo col-3">
                <img src="./STPI Logo 1.webp" alt="" className="img-fluid " />
              </div>
              <div className="company-Logo col-3">
                <img src="./iciitpatana.webp" alt="" className="img-fluid " />
              </div>
              <div className="company-Logo col-3">
                <img
                  src="./Startup India Logo.webp"
                  alt=""
                  className="img-fluid "
                />
              </div>

              <div className="company-Logo col-3">
                <img
                  src="./startup Bihar Logo 1.webp"
                  alt=""
                  className="img-fluid "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- */}

      <section data-aos="zoom-in" className="section_7">
        <header className="container mb-5">
          <Title
            first_text="Our"
            span_text="Trusted Financial Partners"
            last_text=" - We work only with best!"
          />
        </header>
        <hr />
        <div className="trustedFinancialPartners">
          <div className="container">
            <div className="row text-start align-items-center ">
              <div className="image-container col-lg-2  col-md-3 col-4">
                <img
                  className="img-fluid"
                  src="Mannapuram Finance Logo.webp"
                  alt=""
                />
              </div>
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="Lendingkart Logo.webp" alt="" />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img
                  className="img-fluid"
                  src="Jana small finance Bank Logo.webp"
                  alt=""
                />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img
                  className="img-fluid"
                  src="Bank of Baroda Logo.webp"
                  alt=""
                />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img
                  className="img-fluid"
                  src="Bajaj Finserve Logo.webp"
                  alt=""
                />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img
                  className="img-fluid"
                  src="Bandhan Bank Logo.webp"
                  alt=""
                />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img
                  className="img-fluid"
                  src="Utakrsh small finance Bank Logo.webp"
                  alt=""
                />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="Union Bank Logo.webp" alt="" />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="Yes Bank Logo.webp" alt="" />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="SMFG India Logo.webp" alt="" />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="Faircent Logo.webp" alt="" />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="HDFC Bank Logo.webp" alt="" />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img
                  className="img-fluid"
                  src="Piramal finance Logo.webp"
                  alt=""
                />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img
                  className="img-fluid"
                  src="IIFL Finance Logo.webp"
                  alt=""
                />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="Chola Logo.webp" alt="" />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="Paysense Logo.webp" alt="" />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="Indian Bank Logo.webp" alt="" />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="Finnable Logo.webp" alt="" />
              </div>
            </div>
          </div>
        </div>

        <hr />
      </section>

      {/* ----------------------------------------------------- */}

      <section data-aos="zoom-in" className="section_8  mt-3">
        <header className="container mb-5">
          <Title
            first_text="What does "
            span_text="Partners & Customers"
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

                    <div className=" ratings mb-5">
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
                          <h2 className="title-font text-dark fs-24 fw-bold">
                            Top notch team, top notch product
                          </h2>
                          <p className="font-inter fs-18 text-gray mt-5">
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
                            <p className="fs-20 font-poppins fw-semibold ">
                              Apoorva
                            </p>
                            <p className="fs-16 font-poppins">Porter</p>
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
                          <h2 className="title-font fs-24 text-dark fw-bold mx-4">
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
                            <p className="fs-20 font-poppins fw-semibold ">
                              Apoorva
                            </p>
                            <p className="fs-16 font-poppins">Porter</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" item">
                      <div className="bg-white review-card rounded-top-6 d-flex flex-column justify-content-between">
                        <div className="text">
                          <h2 className="title-font text-dark fs-24 fw-bold">
                            Top notch team, top notch product
                          </h2>
                          <p className="font-inter fs-18 text-gray mt-5">
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
                            <p className="fs-20 font-poppins fw-semibold ">
                              Apoorva
                            </p>
                            <p className="fs-16 font-poppins">Porter</p>
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
                          <h2 className="title-font fs-24 text-dark fw-bold mx-4">
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
                            <p className="fs-20 font-poppins fw-semibold ">
                              Apoorva
                            </p>
                            <p className="fs-16 font-poppins">Porter</p>
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

      <section data-aos="zoom-in" className="section_8  mt-3">
        <div className="partners-Customers py-5 container-fluid">
          <div className="container py-5 position-relative positions2">
            <div className="d-flex justify-content-xl-start justify-content-lg-between align-items-center flex-lg-row flex-md-column flex-column justify-content-md-center">
              <div className=" reviews-container col-xl-8 col-lg-8 col-md-12 col-12 order-md-last order-last">
                <div className="reviews">
                  <OwlCarousel
                    className="owl-carousel owl-theme"
                    {...carouselOptions}
                  >
                    <div className=" item">
                      <div className="bg-white review-card rounded-top-6 d-flex flex-column justify-content-between">
                        <div className="text">
                          <h2 className="title-font text-dark fs-24 fw-bold">
                            Top notch team, top notch product
                          </h2>
                          <p className="font-inter fs-18 text-gray mt-5">
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
                          />
                          <div className="d-flex flex-column gap-2">
                            <p className="fs-2 font-poppins fw-semibold">
                              Apoorva
                            </p>
                            <p className="fs-4 font-poppins">Porter</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
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
                          <p className="font-inter  fs-lg-2 fs-md-3 fs-sm-2 fs-7 text-gray mt-5">
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
              <div
                className="
              ratings-container col-xl-4 col-lg-4 col-md-12 col-12  mb-md-5 mb-5 d-flex justify-content-lg-end justify-content-md-start justify-content-start order-lg-last order-md-first order-first
               "
              >
                <div className="  rating-card">
                  <div className="img-container">
                    <img className="avatar" src="avatar-img.webp" alt="" />
                  </div>
                  <div className="d-flex flex-column align-items-lg-center align-items-md-start align-items-start">
                    <p className="fs-lg-3 fs-md-2 fs-1 text-white font-poppins mt-4">
                      Our Partners
                    </p>

                    <div className=" ratings mb-5">
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
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- */}

      <section data-aos="zoom-in" className="section_9">
        <Title first_text="" span_text="Why Trust US?" last_text="" />

        <div className="container">
          <h2 className="fs-30 font-inter text-secondary">
            ________ In the press ? _________
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Home;
