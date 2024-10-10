import React, { useContext } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CreatingContext from "../../context/ContexAPI";
import EducationLoanTitle from "../../components/Titles/EducationLoanTitle";
import ApplyBtn from "../../components/Buttons/ApplyBtn";

const Personal = () => {
  const {
    loanType,
    handleLoanChange,
    personalLoan,
    aspirationsSliderCarouselOptions,
    reviewCarouselOptions,
    partnersCarouselOptions,
  } = useContext(CreatingContext);

  return (
    <div className="EducationLoan">
      <section className="personalLoan position-relative">
        <div data-aos="flip-right" className="position-absolute textContainer">
          <h1 className="fs-68 fs-sm-55 fs-xs-45 font-play-bold text-white">
            Personal Loan
          </h1>
          <div className=" mt-5 bg-white rounded-4 py-4 px-5 d-flex flex-column align-items-start">
            <div className="d-flex gap-3 mb-5 mt-3">
              <label className="loan-label fs-18 font-inter me-3 mt-3">
                I am applying for
              </label>
              <select
                value={loanType}
                onChange={handleLoanChange}
                className="loan-dropdown fs-18 fw-bold font-inter border-none bg-transparent"
              >
                <option value="Undergraduate Loan">Personal Loan</option>
                <option value="Graduate Loan">Graduate Loan</option>
                <option value="Coaching Institute Loans">
                  Coaching Institute Loans
                </option>
                <option value="Parent Loans">Parent Loans</option>
                <option value="MBA Loans ">MBA Loans </option>
                <option value="Dental Loan">Dental Loan</option>
              </select>
            </div>
            <ApplyBtn
              textColor="text-white"
              bgColor={"bg-dark-blue"}
              text="Apply Now"
              arrow={true}
              arrowDark={false}
              url={
                "https://sk-on-prem-prod-onboarding.web.app/170e3ebc-c478-4acc-9dd6-75cdf022ca3f/bddc6ad2-fc36-4d76-a0fa-f665ec275907/f7b24169-7301-4fbe-9e04-8b0a12b49f4a?name=Personal+Loan+Application&creator_id=6f483a6f-63a8-48c5-9c48-605bea5597cf"
              }
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
                <img
                  className="img-fluid"
                  src="/Undergraduate Loans.png"
                  alt=""
                />

                <p className=" fs-20 fw-bold font-inter mt-4">
                  Undergraduate Loans
                </p>
              </div>
            </div>
            <div data-aos="flip-left" className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center gap-4 productCard">
                <img className="img-fluid" src="/Graduate Loans.png" alt="" />

                <p className=" fs-20 fw-bold font-inter mt-4">Graduate Loans</p>
              </div>
            </div>
            <div data-aos="flip-right" className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center gap-4 productCard">
                <img
                  className="img-fluid"
                  src="/Coaching Institute Loans.png"
                  alt=""
                />

                <p className=" fs-20 fw-bold font-inter mt-4">
                  Coaching Institute Loans
                </p>
              </div>
            </div>
            <div data-aos="flip-left" className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center gap-4 productCard">
                <img className="img-fluid" src="/Parent Loans.png" alt="" />

                <p className=" fs-20 fw-bold font-inter mt-4">Parent Loans</p>
              </div>
            </div>
            <div data-aos="flip-right" className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center gap-4 productCard">
                <img className="img-fluid" src="/MBA Loans.png" alt="" />

                <p className=" fs-20 fw-bold font-inter mt-4">MBA Loans</p>
              </div>
            </div>
            <div data-aos="flip-left" className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center gap-4 productCard">
                <img className="img-fluid" src="/Dental Loan.png" alt="" />

                <p className=" fs-20 fw-bold font-inter mt-4">Dental Loan</p>
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
          pera="Samriddh Kendra connects those looking for finance assistance towards personal, education, or family goals. If you are looking to generate funds in case of emergencies, weddings, or travel, we make the process easier by finding the right loan suited for you."
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
                pera="We are making it fast and easy for you to pay for school with our graduate student loans. Samriddh with the unique benefits it offers:"
                pera2={""}
              />

              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="d-flex m-3 align-items-center gap-4">
                    <img src="covered.png" alt="" />
                    <div className="txt">
                      <h2 className="fw-bold fs-20 font-inter">100% covered</h2>
                      <p className="fs-16 font-inter">
                        Covers all school-certified costs. That’s right—we’re
                        got you covered.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="d-flex m-3 align-items-center gap-4">
                    <img src="Zero Fees.png" alt="" />
                    <div className="txt">
                      <h2 className="fw-bold fs-20 font-inter">Zero Fees</h2>
                      <p className="fs-16 font-inter">
                        That means no application, origination, or late fees.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="d-flex m-3 align-items-center gap-4">
                    <img src="Easy Repayment Options.png" alt="" />
                    <div className="txt">
                      <h2 className="fw-bold fs-20 font-inter">
                        Easy Repayment Options
                      </h2>
                      <p className="fs-16 font-inter">
                        Choose from in-school or deferred repayment options, and
                        there is never a penalty for prepayment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="d-flex m-3 align-items-center gap-4">
                    <img src="Cosign with confidence.png" alt="" />
                    <div className="txt">
                      <h2 className="fw-bold fs-20 font-inter">
                        Cosign with confidence
                      </h2>
                      <p className="fs-16 font-inter">
                        We pride ourselves on providing unbiased loan reviews.
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
          title={"What Personal Loans Cover?"}
          color="white"
          fontSize="fs-36"
          ratings={false}
          pera="Education loans at Samriddh Kendra are designed to cover a broad range of expenses to support your academic journey. Our education loans typically include:"
          pera2={""}
        />

        <div className="container pb-7">
          <div className="row mb-5 ">
            <div className="col-lg-5 col-md-6 col-12">
              <div className="my-4">
                <h2 className="fw-bold fs-20 font-inter text-white">
                  1.Home Loan
                </h2>
                <p className="fs-16 ms-4 fw-light font-inter text-white">
                  Easily finance the purchase of your home with quick approvals
                  and no collateral required. Personal loans offer faster
                  disbursement and flexibility for home-related expenses.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <div className="my-4">
                <h2 className="fw-bold fs-20 font-inter text-white">
                  2. Education
                </h2>
                <p className="fs-16 ms-4 fw-light font-inter text-white">
                  Covering the cost of education, including tuition fees, a
                  personal loan provides easy access to funds with fewer
                  restrictions and faster processing.
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
              url={
                "https://sk-on-prem-prod-onboarding.web.app/170e3ebc-c478-4acc-9dd6-75cdf022ca3f/bddc6ad2-fc36-4d76-a0fa-f665ec275907/f7b24169-7301-4fbe-9e04-8b0a12b49f4a?name=Personal+Loan+Application&creator_id=6f483a6f-63a8-48c5-9c48-605bea5597cf"
              }
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
                  url={
                    "https://sk-on-prem-prod-onboarding.web.app/170e3ebc-c478-4acc-9dd6-75cdf022ca3f/bddc6ad2-fc36-4d76-a0fa-f665ec275907/f7b24169-7301-4fbe-9e04-8b0a12b49f4a?name=Personal+Loan+Application&creator_id=6f483a6f-63a8-48c5-9c48-605bea5597cf"
                  }
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
                  Applying for an education loan at Samriddh Kendra is quick and
                  hassle-free. Follow these simple steps to secure the financial
                  support you need for your studies{" "}
                </p>

                <ApplyBtn
                  textColor="text-dark"
                  bgColor={"bg-white"}
                  text="Apply Now"
                  arrow={false}
                  arrowDark={false}
                  url={
                    "https://sk-on-prem-prod-onboarding.web.app/170e3ebc-c478-4acc-9dd6-75cdf022ca3f/bddc6ad2-fc36-4d76-a0fa-f665ec275907/f7b24169-7301-4fbe-9e04-8b0a12b49f4a?name=Personal+Loan+Application&creator_id=6f483a6f-63a8-48c5-9c48-605bea5597cf"
                  }
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
                {personalLoan.map((data, index) => {
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

      <section className="EducationLoanSection_10 px-lg-0 px-md-0 px-4 my-10">
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

      <section className="EducationLoanSection_11 px-lg-0 px-md-0 px-4 my-10 bg-dark-blue">
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
      </section>

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

export default Personal;
