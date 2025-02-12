import React, { useContext } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CreatingContext from "../../context/ContexAPI";
import EducationLoanTitle from "../../components/Titles/EducationLoanTitle";
import ApplyBtn from "../../components/Buttons/ApplyBtn";
import Title from "../../components/Titles/Title";

const Property_purchase_loan = () => {
  const {
    loanType,
    handleLoanChange,
    Property_purchase_loan,
    reviewCarouselOptions,
    partnersCarouselOptions,
    carouselOptions,
  } = useContext(CreatingContext);

  return (
    <div className="EducationLoan">
      <section className="property position-relative">
        <div data-aos="flip-right" className="position-absolute textContainer">
          <h1 className="fs-68 fs-sm-55 fs-xs-45 font-play-bold text-white">
            Property Purchase Loan
          </h1>
          <div className=" rounded-4 py-4 px-5 d-flex flex-column align-items-start">
            {/* <div className="d-flex gap-3 mb-5 mt-3">
              <label className="loan-label fs-18 font-inter me-3 mt-3">
                I am applying for
              </label>
              <select
                value={loanType}
                onChange={handleLoanChange}
                className="loan-dropdown fs-18 fw-bold font-inter border-none bg-transparent"
              >
                <option value="Mortgage Loan">Property Purchase Loan</option>
                <option value="Graduate Loan">Tailored Loan Options</option>
                <option value="Coaching Institute Loans">
                  Comprehensive Insurance Plans
                </option>
                <option value="Parent Loans">Simplified Online Process</option>
                <option value="MBA Loans ">Trusted Financial Partners </option>
                <option value="Dental Loan">Competitive Coverage Rates</option>
                <option value="MBA Loans ">Easy Claim Processing</option>
              </select>
            </div> */}
            <ApplyBtn
              textColor="text-white"
              bgColor={"bg-dark-blue"}
              text="Apply Now"
              arrow={true}
              arrowDark={false}
            />
          </div>
        </div>
      </section>

      {/*   <section className="EducationLoanSection_2 px-lg-0 px-md-0 px-4 bg-dark-blue w-100 position-relative">
        <div className="container py-5">
          <div className="aspirationsSlider ">
            <OwlCarousel
              className="owl-carousel owl-theme"
              {...aspirationsSliderCarouselOptions}
            >
              <div className="item">
                <div className="d-flex align-items-start gap-4 aspirationsCard">
                  <div className="d-flex flex-column gap-1 ">
                    <h2 className="text-white fs-24 fw-bold font-inter">
                      Aspirations
                    </h2>
                    <p className="color-light-blue fs-20 fw-bold font-inter">
                      Achieved
                    </p>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="d-flex align-items-start gap-4 aspirationsCard">
                  <img
                    className="img-fluid"
                    src="/Students Enrolled.png"
                    alt=""
                  />
                  <div className="d-flex flex-column gap-1 ">
                    <h2 className="color-light-blue fs-18 fw-bold font-inter">
                      34,000+
                    </h2>
                    <p className="text-white fs-20 fw-medium font-inter">
                      Students Enrolled
                    </p>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="d-flex align-items-start gap-4 aspirationsCard">
                  <img
                    className="img-fluid"
                    src="/Colleges Listed.png"
                    alt=""
                  />
                  <div className="d-flex flex-column gap-1 ">
                    <h2 className="color-light-blue fs-18 fw-bold font-inter">
                      22,000+
                    </h2>
                    <p className="text-white fs-20 fw-medium font-inter">
                      Colleges Listed
                    </p>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="d-flex align-items-start gap-4 aspirationsCard">
                  <img
                    className="img-fluid"
                    src="/Education Loans Provided.png"
                    alt=""
                  />
                  <div className="d-flex flex-column gap-1 ">
                    <h2 className="color-light-blue fs-18 fw-bold font-inter">
                      18,000+
                    </h2>
                    <p className="text-white fs-20 fw-medium font-inter">
                      Education Loans Provided
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section> */}
      <section className="EducationLoanSection_3 px-lg-0 px-md-0 px-4">
        <EducationLoanTitle
          title={"What We Offer"}
          color="black"
          fontSize="fs-30"
          ratings={true}
          pera="Average Customer Rating"
          pera2={""}
        />

        <div className="container">
          <div className="row justify-content-center">
            <div data-aos="flip-right" className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center gap-4 productCard bg-white border-none b-shadow">
                <img className="img-fluid" src="/l1.svg" alt="" />

                <p className=" fs-18 fw-bold font-inter mt-4">
                  Tailored Loan Options
                </p>
              </div>
            </div>
            <div data-aos="flip-left" className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center gap-4 productCard">
                <img className="img-fluid" src="/l2.svg" alt="" />

                <p className=" fs-18 fw-bold font-inter mt-4">
                  Simplified Online Process
                </p>
              </div>
            </div>
            <div data-aos="flip-right" className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center gap-4 productCard">
                <img className="img-fluid" src="/l3.svg" alt="" />

                <p className=" fs-18 fw-bold font-inter mt-4">
                  Comprehensive Insurance Plans
                </p>
              </div>
            </div>
            <div data-aos="flip-left" className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center gap-4 productCard">
                <img className="img-fluid" src="/l4.svg" alt="" />

                <p className=" fs-18 fw-bold font-inter mt-4">
                  Trusted Financial Partners
                </p>
              </div>
            </div>
            <div data-aos="flip-right" className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center gap-4 productCard">
                <img className="img-fluid" src="/l5.svg" alt="" />

                <p className=" fs-18 fw-bold font-inter mt-4">
                  Competitive Coverage Rates
                </p>
              </div>
            </div>
            <div data-aos="flip-left" className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center gap-4 productCard">
                <img className="img-fluid" src="/l6.svg" alt="" />

                <p className=" fs-18 fw-bold font-inter mt-4">
                  Easy Claim Processing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-down"
        className="EducationLoanSection_4 px-lg-0 px-md-0 px-4 mt-11"
      >
        <EducationLoanTitle
          title={"Who is this for?"}
          color="black"
          fontSize="fs-50"
          ratings={false}
          pera="This loan is meant for people purchasing residential or commercial real estate, be it for use or investment. Our platform puts you in contact with loan providers with flexible options tailored for most financial backgrounds and needs-from first-time buyers to seasoned investors. Samriddh Kendra helps ensure you'll find a solution that suits your property aspirations.
"
          pera2={""}
        />
      </section>

      <section className="EducationLoanSection_5 px-lg-0 px-md-0 px-4 my-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12 col-12">
              <EducationLoanTitle
                title={"We’ve got you even more exclusive benefits."}
                color="black"
                fontSize="fs-28"
                ratings={false}
                pera="Get the best benefits of Home Loans with the help of Samriddh Kendra - 
"
                pera2={""}
              />

              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="d-flex m-3 align-items-center gap-4">
                    <img src="covered.png" alt="" />
                    <div className="txt">
                      <h2 className="fw-bold fs-20 font-inter">
                        Personalized Financial Solutions
                      </h2>
                      <p className="fs-16 font-inter">
                        We connect you with tailored loans and insurance plans
                        to fit your unique needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="d-flex m-3 align-items-center gap-4">
                    <img src="Zero Fees.png" alt="" />
                    <div className="txt">
                      <h2 className="fw-bold fs-20 font-inter">
                        Quick and Easy Access
                      </h2>
                      <p className="fs-16 font-inter">
                        Our simplified platform ensures a seamless, hassle-free
                        process for financial services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="d-flex m-3 align-items-center gap-4">
                    <img src="Easy Repayment Options.png" alt="" />
                    <div className="txt">
                      <h2 className="fw-bold fs-20 font-inter">
                        Reliable Partnerships
                      </h2>
                      <p className="fs-16 font-inter">
                        We work with trusted lenders and insurers, providing
                        secure and dependable options.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="d-flex m-3 align-items-center gap-4">
                    <img src="Cosign with confidence.png" alt="" />
                    <div className="txt">
                      <h2 className="fw-bold fs-20 font-inter">
                        Comprehensive Support
                      </h2>
                      <p className="fs-16 font-inter">
                        Enjoy 24/7 customer assistance and smooth claim
                        processes for a worry-free experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div
                data-aos="flip-right"
                className=" mt-lg-0 mt-md-5 mt-5 p-lg-0 p-md-4 p-5"
              >
                <img src="/pl.webp" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-aos="flip-right"
        className="EducationLoanSection_6 px-lg-0 px-md-0 px-4 py-6 bg-dark-blue"
      >
        <EducationLoanTitle
          title={"What Property Purchase Loan Covers"}
          color="white"
          fontSize="fs-36"
          ratings={false}
          pera="Education loans at Samriddh Kendra are designed to cover a broad range of expenses to support your academic journey. Our education loans typically include:"
          pera2={""}
        />

        <div className="container pb-7">
          <div className="row mb-5 ">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="my-4">
                <h2 className="fw-bold fs-20 font-inter text-white">
                  1.New Home Purchase
                </h2>
                <p className="fs-16 ms-4 fw-light font-inter text-white">
                  If you’re looking to buy a new home, Samriddh Kendra connects
                  you with lenders offering loans that cover up to 80-90% of the
                  property’s value. This allows you to make the dream of
                  homeownership a reality, with minimal upfront investment.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="my-4">
                <h2 className="fw-bold fs-20 font-inter text-white">
                  2. Vacant Plot Financing
                </h2>
                <p className="fs-16 ms-4 fw-light font-inter text-white">
                  Our platform provides access to loans for vacant plot
                  purchases, whether you plan to build a home or hold the land
                  as an investment. These loans are tailored to help you finance
                  undeveloped land, with flexible terms for future construction.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="my-4">
                <h2 className="fw-bold fs-20 font-inter text-white">
                  3. Flat/Apartment Purchase
                </h2>
                <p className="fs-16 ms-4 fw-light font-inter text-white">
                  Samriddh Kendra assists you in securing loans for purchasing
                  flats or apartments in approved housing projects. Our partners
                  offer loans that cover a significant portion of the cost,
                  helping you achieve your goal of buying a flat in the desired
                  location.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="my-4">
                <h2 className="fw-bold fs-20 font-inter text-white">
                  4. Property Refinancing
                </h2>
                <p className="fs-16 ms-4 fw-light font-inter text-white">
                  Looking to refinance your existing home loan? Samriddh Kendra
                  connects you with refinancing options that can help lower your
                  interest rates or adjust repayment terms, giving you financial
                  relief and better control over your mortgage.
                </p>
              </div>
            </div>
          </div>

          <div className="col-2">
            <ApplyBtn
              textColor="text-dark"
              bgColor={"bg-white"}
              text="Apply Now"
              arrow={false}
            />
          </div>
        </div>
      </section>
      <section className="EducationLoanSection_7 px-lg-0 px-md-0 px-4 py-6">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 col-md-6 col-12">
              <EducationLoanTitle
                title={"How to Buy?"}
                color="black"
                fontSize="fs-40"
                ratings={false}
                pera="At Samriddh Kendra, purchasing financial products like loans and insurance is a simple and seamless process. Follow these easy steps to get started"
                pera2={""}
              />

              <div className="row flex-column gap-4">
                <div data-aos="fade-down" className="col-12">
                  <div className="d-flex align-items-start">
                    <p className="py-3 px-45 bg-dark-blue text-white fw-semibold fs-18 font-inter me-4">
                      1
                    </p>
                    <div className="txt">
                      <h2 className="fw-medium fs-20 font-inter">
                        Tell us about yourself
                      </h2>
                      <p className="fs-16 font-inter">
                        We'll need some basic information from you (and your
                        cosigner if you're applying with one) like your name,
                        address, and date of birth, along with some details
                        about your school.
                      </p>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" className="col-12">
                  <div className="d-flex align-items-start">
                    <p className="py-3 px-45 bg-dark-blue text-white fw-semibold fs-18 font-inter me-4">
                      2
                    </p>
                    <div className="txt">
                      <h2 className="fw-medium fs-20 font-inter">
                        Choose your loan option(s)
                      </h2>
                      <p className="fs-16 font-inter">
                        Choose the best Plan and Add-ons for you, and confirm
                        your details.
                      </p>
                    </div>
                  </div>
                </div>{" "}
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <p className="py-3 px-45 bg-dark-blue text-white fw-semibold fs-18 font-inter me-4">
                      3
                    </p>
                    <div className="txt">
                      <h2 className="fw-medium fs-20 font-inter">
                        Document upload & Get the policy
                      </h2>
                      <p className="fs-16 font-inter">
                        Fill in your details, add your Nominee details and
                        complete your KYC so that we can issue the policy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-12">
              <div className="mt-lg-0 mt-md-0 mt-6 text-center p-10">
                <img
                  className="img-fluid rounded-5"
                  src="/buypersonalLoan.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="EducationLoanSection_8 container-fluid my-10">
        <div className="row">
          <div data-aos="fade-up" className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="right py-8 text-center">
              <div className="rightBorder d-flex flex-column align-items-center  text-center">
                <h1 className="fs-28 font-inter fw-bolder">
                  Apply For Educational Loan
                </h1>
                <p className="fs-18 font-inter fw-normal mb-5">
                  Applying for an education loan at Samriddh Kendra is quick and
                  hassle-free. Follow these simple steps to secure the financial
                  support you need for your studies{" "}
                </p>

                <ApplyBtn
                  textColor="text-white"
                  bgColor={"bg-dark-blue"}
                  text="Apply Now"
                  arrow={false}
                  arrowDark={false}
                />
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="left py-8">
              <div className="leftBorder d-flex flex-column align-items-center text-center text-white">
                <h1 className="fs-28 font-inter fw-bolder text-capitalize">
                  Want free consulting
                </h1>
                <p className="fs-18 font-inter fw-normal mb-5">
                  Get free expert consulting today to find the perfect insurance
                  and financial solutions for your business needs
                </p>

                <ApplyBtn
                  textColor="text-dark"
                  bgColor={"bg-white"}
                  text="Contact Us"
                  arrow={false}
                  arrowDark={false}
                  url={"/contact"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div className=" col-lg-9 col-md-12 col-12">
              <div className="accordion" id="accordionExample">
                {Property_purchase_loan.map((data, index) => {
                  const fadeDirection =
                    index % 2 === 0 ? "fade-up" : "fade-down"; // Alternate fade direction
                  return (
                    <div
                      data-aos={fadeDirection}
                      key={index}
                      className="accordion-item mt-3 rounded-4"
                    >
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

      {/*  <section className="EducationLoanSection_10 px-lg-0 px-md-0 px-4 my-10">
        <EducationLoanTitle
          title={"What are others saying about Samriddh?"}
          color="black"
          fontSize="fs-32"
          ratings={false}
          pera=""
          pera2={""}
        />

        <div className="container">
          <div className=" row align-items-center justify-content-evenly position-relative">
            <OwlCarousel
              className="owl-carousel owl-theme"
              {...reviewCarouselOptions}
            >
              <div className="item">
                <div className="reviewCard d-flex flex-column justify-content-between p-5 rounded-4">
                  <div className="top d-flex flex-column gap-4 align-items-start">
                    <img
                      src="/revier Avatar.png"
                      className="img-fluid"
                      alt=""
                    />
                    <p className="fs-18 font-inter">
                      The best thing about Samriddh is the fact that they make
                      the process easy. I was able to do everything online and
                      the money was sent directly to my school.
                    </p>
                  </div>
                  <div className="bottom d-flex flex-column align-items-end">
                    <p className="fs-18 font-inter">Anjellica C..</p>
                    <p className="fs-18 font-inter">XYZ University</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="reviewCard d-flex flex-column justify-content-between p-5 rounded-4">
                  <div className="top d-flex flex-column gap-4 align-items-start">
                    <img
                      src="/revier Avatar.png"
                      className="img-fluid"
                      alt=""
                    />
                    <p className="fs-18 font-inter">
                      The best thing about Samriddh is the fact that they make
                      the process easy. I was able to do everything online and
                      the money was sent directly to my school.
                    </p>
                  </div>
                  <div className="bottom d-flex flex-column align-items-end">
                    <p className="fs-18 font-inter">Rnajee M..</p>
                    <p className="fs-18 font-inter">XYZ University</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="reviewCard d-flex flex-column justify-content-between p-5 rounded-4">
                  <div className="top d-flex flex-column gap-4 align-items-start">
                    <img
                      src="/revier Avatar.png"
                      className="img-fluid"
                      alt=""
                    />
                    <p className="fs-18 font-inter">
                      The best thing about Samriddh is the fact that they make
                      the process easy. I was able to do everything online and
                      the money was sent directly to my school.
                    </p>
                  </div>
                  <div className="bottom d-flex flex-column align-items-end">
                    <p className="fs-18 font-inter">Grace G.</p>
                    <p className="fs-18 font-inter">XYZ University</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="reviewCard d-flex flex-column justify-content-between p-5 rounded-4">
                  <div className="top d-flex flex-column gap-4 align-items-start">
                    <img
                      src="/revier Avatar.png"
                      className="img-fluid"
                      alt=""
                    />
                    <p className="fs-18 font-inter">
                      The best thing about Samriddh is the fact that they make
                      the process easy. I was able to do everything online and
                      the money was sent directly to my school.
                    </p>
                  </div>
                  <div className="bottom d-flex flex-column align-items-end">
                    <p className="fs-18 font-inter">Rnajee M..</p>
                    <p className="fs-18 font-inter">XYZ University</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="reviewCard d-flex flex-column justify-content-between p-5 rounded-4">
                  <div className="top d-flex flex-column gap-4 align-items-start">
                    <img
                      src="/revier Avatar.png"
                      className="img-fluid"
                      alt=""
                    />
                    <p className="fs-18 font-inter">
                      The best thing about Samriddh is the fact that they make
                      the process easy. I was able to do everything online and
                      the money was sent directly to my school.
                    </p>
                  </div>
                  <div className="bottom d-flex flex-column align-items-end">
                    <p className="fs-18 font-inter">Grace G.</p>
                    <p className="fs-18 font-inter">XYZ University</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
 */}

      <section data-aos="zoom-in" className="section_8  mt-3 mb-8">
        <header className="container mb-5">
          <Title
            first_text="What does "
            span_text="  Customers"
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
                    <img className="img-fluid" src="/ratings.webp" alt="" />
                  </div>
                  <div className="d-flex flex-column align-items-lg-center align-items-md-start align-items-start">
                    <p className="fs-lg-3 fs-md-2 fs-1 text-white font-poppins mt-4">
                      Our Customers
                    </p>

                    <div className=" ratings mb-5">
                      <span className="text-war fs-lg-3 fs-md-2 fs-1 mx-1">
                        5.0
                      </span>{" "}
                      <img
                        className="d-md-block  d-none"
                        src="/star.png"
                        alt="rating"
                      />
                      <img
                        className="d-md-block  d-none"
                        src="/star.png"
                        alt="rating"
                      />
                      <img
                        className="d-md-block  d-none"
                        src="/star.png"
                        alt="rating"
                      />
                      <img
                        className="d-md-block  d-none"
                        src="/star.png"
                        alt="rating"
                      />
                      <img
                        className="d-md-block  d-none"
                        src="/star.png"
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
                            Samriddh Kendra has been a game-changer for me and
                            my business. As a small shop owner, getting access
                            to insurance and financial support used to be a
                            challenge. But through Samriddh Kendra’s platform, I
                            was able to secure a loan within days and sign up
                            for an affordable insurance policy. Their process
                            was simple, transparent, and efficient, and the
                            support from their team has been phenomenal.
                          </p>
                        </div>
                        <div className="profile-footer d-flex align-items-center">
                          <img
                            className="img-fluid avatar p-3 mr-4"
                            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                            alt=""
                          />
                          <div className="d-flex flex-column">
                            <p className="fs-20 font-poppins fw-semibold ">
                              Ravi Kumar
                            </p>
                            <p className="fs-16 font-poppins">
                              Retail Shop Owner
                            </p>
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
                            I never thought getting the right insurance coverage
                            could be so easy. Samriddh Kendra not only helped me
                            compare the best policies but also guided me through
                            the entire process. With their personalized service
                            and professional approach, I feel more secure and
                            financially stable now. It’s a great platform for
                            anyone looking for financial inclusion.
                          </p>
                        </div>
                        <div className="profile-footer d-flex align-items-center">
                          <img
                            className="img-fluid avatar p-3 mr-4"
                            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                            alt=""
                          />
                          <div className="d-flex flex-column">
                            <p className="fs-20 font-poppins fw-semibold ">
                              Neha Sharma
                            </p>
                            <p className="fs-16 font-poppins">Teacher</p>
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
                            As a merchant, I needed a loan to expand my business
                            but didn't know where to begin. Samriddh Kendra made
                            it easy by connecting me with trusted financial
                            institutions. Their platform allowed me to compare
                            different loan options and pick the one that suited
                            my needs best. Thanks to them, I received the
                            funding I needed without any hassle.
                          </p>
                        </div>
                        <div className="profile-footer d-flex align-items-center">
                          <img
                            className="img-fluid avatar p-3 mr-4"
                            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                            alt=""
                          />
                          <div className="d-flex flex-column">
                            <p className="fs-20 font-poppins fw-semibold ">
                              Amit Singh
                            </p>
                            <p className="fs-16 font-poppins"> Merchant</p>
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

      {/*    <section className="EducationLoanSection_11 px-lg-0 px-md-0 px-4 my-10 bg-dark-blue">
        <div className="text-center pt-1">
          <EducationLoanTitle
            title={"Articles & Blogs"}
            color="white"
            fontSize="fs-36"
            ratings={false}
            pera=""
            pera2={""}
          />
        </div>

        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel owl-theme"
              {...reviewCarouselOptions}
            >
              <div className="item">
                <div className="blogsCard p-0 overflow-hidden bg-white d-flex flex-column justify-content-between rounded-3">
                  <img src="/articlesImg1.png" className="img-fluid" alt="" />

                  <div className="bottom mt-4 p-2 d-flex flex-column align-items-start">
                    <p className="fs-14 font-inter ps-4">17 JUL 2024</p>
                    <p className="fs-18 font-inter ps-4">
                      What factors should students consider when comparing
                      coaching loans?
                    </p>

                    <ApplyBtn
                      textColor="text-dark"
                      bgColor={""}
                      text="Know More"
                      arrow={true}
                      arrowDark={true}
                    />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blogsCard p-0 overflow-hidden b-shadow bg-white d-flex flex-column justify-content-between rounded-3">
                  <img src="/articlesImg2.png" className="img-fluid" alt="" />

                  <div className="bottom mt-4 p-2 d-flex flex-column align-items-start">
                    <p className="fs-14 font-inter ps-4">17 JUL 2024</p>
                    <p className="fs-18 font-inter ps-4">
                      What factors should students consider when comparing
                      coaching loans?
                    </p>

                    <ApplyBtn
                      textColor="text-dark"
                      bgColor={""}
                      text="Know More"
                      arrow={true}
                      arrowDark={true}
                    />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blogsCard p-0 overflow-hidden b-shadow bg-white d-flex flex-column justify-content-between rounded-3">
                  <img src="/articlesImg3.png" className="img-fluid" alt="" />

                  <div className="bottom mt-4 p-2 d-flex flex-column align-items-start">
                    <p className="fs-14 font-inter ps-4">17 JUL 2024</p>
                    <p className="fs-18 font-inter ps-4">
                      What factors should students consider when comparing
                      coaching loans?
                    </p>

                    <ApplyBtn
                      textColor="text-dark"
                      bgColor={""}
                      text="Know More"
                      arrow={true}
                      arrowDark={true}
                    />
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section> */}

      <section className="EducationLoanSection_12 px-lg-0 px-md-0 px-4">
        <div className="container bg-dark-blue rounded-4 overflow-hidden p-0">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 ">
              <img
                className="img-fluid h-100 object-fit-cover"
                src="/future.png"
                alt=""
              />
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="text p-lg-0 p-md-5 p-5">
                <EducationLoanTitle
                  title={
                    "Take the next step: Secure a Education loan for the future."
                  }
                  color="white"
                  fontSize="fs-30"
                  ratings={false}
                  pera="Invest in your future with an education loan from Samriddh Kendra. Whether you’re aiming for higher education our tailored loan solutions are designed to help you achieve your academic dreams without financial stress."
                  pera2={""}
                />

                <ApplyBtn
                  textColor="text-dark"
                  bgColor={"bg-white"}
                  text="Get started"
                  arrow={false}
                  arrowDark={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="EducationLoanSection_13 my-10 px-lg-0 px-md-0 px-4">
        <EducationLoanTitle
          title={"Our Loan Partners"}
          color="black"
          fontSize="fs-36"
          ratings={false}
          pera=""
          pera2={""}
        />

        <div className="container position-relative">
          <div className="row align-items-center">
            <OwlCarousel
              className="owl-carousel owl-theme"
              {...partnersCarouselOptions}
            >
              <div className="item">
                <img className="img-fluid" src="/Chola Logo.webp" alt="" />
              </div>
              <div className="item">
                <img className="img-fluid" src="/Union Bank Logo.webp" alt="" />
              </div>
              <div className="item">
                <img
                  className="img-fluid"
                  src="/Bandhan Bank Logo.webp"
                  alt=""
                />
              </div>
              <div className="item">
                <img className="img-fluid" src="/HDFC Bank Logo.webp" alt="" />
              </div>
              <div className="item">
                <img className="img-fluid" src="/Yes Bank Logo.webp" alt="" />
              </div>
              <div className="item">
                <img
                  className="img-fluid"
                  src="/Bajaj Finserve Logo.webp"
                  alt=""
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Property_purchase_loan;
