import React, { useContext, useState } from "react";
import ApplyBtn from "../../components/Buttons/ApplyBtn";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CreatingContext from "../../context/ContexAPI";
import EducationLoanTitle from "../../components/Titles/EducationLoanTitle";

const ShopInsurance = () => {
  const {
    aspirationsSliderCarouselOptions,
    shopLoan,
    reviewCarouselOptions,
    partnersCarouselOptions,
  } = useContext(CreatingContext);

  const [activeTab, setActiveTab] = useState("inclusions");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="shopInsurance">
      <section className="shopInsurance_section1 HealthInsurance_section1 px-lg-0 px-md-0 px-4  position-relative">
        <div
          data-aos="flip-right"
          className="position-absolute textContainer p-2"
        >
          <h1 className="fs-68 fs-sm-55 fs-xs-45 font-play-bold text-white">
            Shop Insurance
          </h1>
          <p className="fs-18 font-inter text-white mt-4  w-75">
            Shop Insurance is an added financial safety net for your business
            premises, stock, and equipment. It protects your shop from surprise
            events such as theft, fire, or natural disasters. This is the
            insurance Samriddh Kendra connects you with, whose solution is
            tailor-made for your shop, offering you peace of mind through their
            network of trusted partners.
          </p>

          <div className="getInsurance bg-white mt-5 rounded-4 py-5 px-4">
            <div className="container">
              <input
                className="font-inter text-dark w-100 mt-4 p-3 fs-18 fw-medium rounded-4"
                type="text"
                placeholder="Company Name"
              />
              <input
                className="font-inter text-dark w-100 mt-4 p-3 fs-18 fw-medium rounded-4"
                type="text"
                placeholder="Location"
              />
              <input
                className="font-inter text-dark w-100 mt-4 p-3 fs-18 fw-medium rounded-4"
                type="number"
                placeholder="+91  |  Phone Number"
              />

              <div className="row mt-5">
                <div className="col-6">
                  <ApplyBtn
                    textColor={"text-dark-blue"}
                    bgColor="bg-light-blue"
                    text={"Renew"}
                    arrow={false}
                    arrowDark={false}
                    width="w-100"
                  />
                </div>
                <div className="col-6">
                  <ApplyBtn
                    textColor={"text-white"}
                    bgColor="bg-dark-blue"
                    text={"Get Plan"}
                    arrow={false}
                    arrowDark={false}
                    width="w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*     <section className=" liftInsuranceSection_2 px-lg-0 px-md-0 px-4 bg-dark-blue w-100 position-relative">
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
                    alt="image"
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

      <section className=" lifeInsuranceSection_3 px-lg-0 px-md-0 px-4 my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6 col-12" data-aos="flip-left">
              <EducationLoanTitle
                title={"What is Shop Insurance?"}
                color="black"
                fontSize="fs-40"
                ratings={false}
                pera="Shop Insurance is an added financial safety net for your business premises, stock, and equipment. It protects your shop from surprise events such as theft, fire, or natural disasters. This is the insurance Samriddh Kendra connects you with, whose solution is tailor-made for your shop, offering you peace of mind through their network of trusted partners.
"
                pera2={" "}
              />
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <div
                data-aos="flip-right"
                className="d-flex justify-content-center align-items-end"
              >
                <img
                  src="/Shop Insurance Avatar.webp"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" lifeInsuranceSection_4 py-1 px-lg-0 px-md-0 px-4 ">
        <EducationLoanTitle
          title={"Why Do I Need Shop Insurance?"}
          color="black"
          fontSize="fs-36"
          ratings={false}
          pera="Lorem ipsum is a placeholder text commonly used in the design and typesetting industry. It consists of parts of Latin words with no specific meaning and is used as temporary filler content when the actual text is not available or finalized."
          pera2={" "}
        />

        <div data-aos="fade-up" className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-flex align-items-center gap-5 my-5">
                <img
                  className="img-fluid"
                  width={60}
                  src="/Complete Protection.png"
                  alt=""
                />
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-20 fw-bold font-inter">
                    Protection Against Losses
                  </h3>
                  <p className="fs-18 font-inter">
                    There is also the risk of fire, theft, or even vandalism
                    which can create enormous financial damage. Shop Insurance
                    covers such unpredictable costs that may leave you losing
                    any business resources and activities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-flex align-items-center gap-5 my-5">
                <img
                  className="img-fluid"
                  width={60}
                  src="/Sum Insured.png"
                  alt=""
                />
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-20 fw-bold font-inter">
                    Business Continuity
                  </h3>
                  <p className="fs-18 font-inter">
                    Shop Insurance protects against losses or lost income due to
                    weather-related disasters, accidents, or even catastrophes.
                    This ensures your business recovers quickly with minimal
                    setbacks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-flex align-items-center gap-5 my-5">
                <img
                  className="img-fluid"
                  width={60}
                  src="/Convenient Online Option3.png"
                  alt=""
                />
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-20 fw-bold font-inter">
                    Liability Coverage
                  </h3>
                  <p className="fs-18 font-inter">
                    Accidents may happen in and around your shop, and if one of
                    your customers gets hurt, you might be held responsible.
                    Liability claims against Shop Insurance shields you from
                    litigation and compensation billings.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-flex align-items-center gap-5 my-5">
                <img
                  className="img-fluid"
                  width={60}
                  src="/Covers all Business Categories.png"
                  alt=""
                />
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-20 fw-bold font-inter">Peace of Mind</h3>
                  <p className="fs-18 font-inter">
                    The insurance of your shop for various kinds of risks aids
                    you in focusing on the running of the business without
                    worrying about potential risks looming at every moment in
                    your mind. It's an investment in the future security of your
                    shop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shopInsurance_section7 healthInsuranceSection_7 lifeInsuranceSection_7 px-lg-0 px-md-0 px-4 py-6">
        <EducationLoanTitle
          title={"Types of Shops Covered Under the Plan"}
          color="black"
          fontSize="fs-36"
          ratings={false}
          pera="Lorem ipsum is a placeholder text commonly used in the design and typesetting industry. It consists of parts of Latin words with no specific meaning and is used as temporary filler content when the actual text is not available or finalized."
          pera2={""}
        />

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div
                className="card cust-card d-flex my-4 flex-row gap-3 rounded-5 "
                data-aos="flip-left"
              >
                <div className="mt-3">
                  <img src="/Home repair Services.png" alt="" />
                </div>
                <div className="card-body">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Retail Stores
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      From apparel shops to electronic stores, you get full
                      coverage of stocks, inventory, and property damage that
                      ensures your business bounces back in case of any
                      disruption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div
                className="card cust-card d-flex my-4 flex-row gap-3 rounded-5 "
                data-aos="flip-left"
              >
                <div className="mt-3">
                  <img src="/Mobile and Gadgets Shops.png" alt="" />
                </div>
                <div className="card-body">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Restaurants and Cafes
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      Food places are more vulnerable to specific risks like
                      appliance breakdown or liability claims. Shop Insurance
                      through specialized coverage will ensure that your
                      restaurant or café is geared up against these challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div
                className="card cust-card d-flex my-4 flex-row gap-3 rounded-5 "
                data-aos="flip-left"
              >
                <div className="mt-3">
                  <img src="/General and Grocery Stores.png" alt="" />
                </div>
                <div className="card-body">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Service-Based Businesses
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      Salons, repair shops, and other service-oriented
                      businesses can acquire coverage for their tools,
                      equipment, and premises which would protect you in case of
                      thefts, damages, and other unforeseen incidents.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-12">
              <div
                className="card cust-card d-flex my-4 flex-row gap-3 rounded-5"
                data-aos="flip-left"
              >
                <div className="mt-3">
                  <img src="/Food and Eatery Shop.png" alt="" />
                </div>
                <div className="card-body">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Small Home-Based Shops
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      Even if you're working from your place, your inventory and
                      equipment can be covered under Shop Insurance. It will
                      provide you with coverage that exactly suits home-based
                      businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lifeInsuranceSection_9 px-lg-0 px-md-0 px-4 py-6 mb-7">
        <EducationLoanTitle
          title={"How to Claim a Shop Insurance Policy?"}
          color="black"
          fontSize="fs-36"
          ratings={false}
          pera=""
          pera2={""}
        />

        <div data-aos={"fade-down"} className="container ">
          <div className="row flex-column gap-4">
            <div className="stepsContainer d-flex align-items-start gap-5">
              <p className="fs-18 fw-semibold font-inter stepCounts  text-white rounded-circle ">
                1
              </p>

              <div className="d-flex flex-column font-inter">
                <p className="fs-24 fw-bold ">Step 1</p>
                <p className="fs-20 fw-semibold ">Claim Reporting</p>
                <p className="fs-18 fw-medium">
                  You can notify the insurer online with the required documents
                  or even submit it through Samriddh website.
                </p>
              </div>
            </div>
            <div className="stepsContainer d-flex align-items-start gap-5">
              <p className="fs-18 fw-semibold font-inter stepCounts text-white rounded-circle ">
                2
              </p>

              <div className="d-flex flex-column font-inter">
                <p className="fs-24 fw-bold ">Step 2</p>
                <p className="fs-20 fw-semibold ">Claim Processing</p>
                <p className="fs-18 fw-medium">
                  After submitting all the documents, the insurer will assess
                  and inform in case any further documents are required, after
                  which your claim will be processed.
                </p>
              </div>
            </div>
            <div className="stepsContainer d-flex align-items-start gap-5">
              <p className="fs-18 fw-semibold font-inter stepCounts  text-white rounded-circle ">
                3
              </p>

              <div className="d-flex flex-column font-inter">
                <p className="fs-24 fw-bold ">Step 3</p>
                <p className="fs-20 fw-semibold ">Claim Settlement</p>
                <p className="fs-18 fw-medium">
                  Post document verification, the insurer may conduct an
                  investigation, if required. After approval, the settlement
                  amount is paid to the nominee's bank account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" lifeInsuranceSection_8 px-lg-0 px-md-0 px-4 py-6 bg-dark-blue">
        <EducationLoanTitle
          title={"Shop Insurance Plan - What it Covers?"}
          color="white"
          fontSize="fs-36"
          ratings={false}
          pera="What is covered in Shop insurance"
          pera2={""}
        />

        <div className="container">
          <ul className="nav gap-5 nav-underline">
            <li className="nav-item">
              <a
                className={`nav-link text-light-gray fs-24 fw-bold font-inter ${
                  activeTab === "inclusions" ? "active" : ""
                }`}
                onClick={() => handleTabChange("inclusions")}
                aria-current="page"
              >
                Inclusions
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-light-gray fs-24 fw-bold font-inter ${
                  activeTab === "exclusions" ? "active" : ""
                }`}
                onClick={() => handleTabChange("exclusions")}
              >
                Exclusions
              </a>
            </li>
          </ul>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card d-flex my-4 flex-row gap-3 rounded-5 "
                data-aos="flip-left"
              >
                <div className="mt-3">
                  <img src="/check.png" width={35} alt="" />
                </div>
                <div className="card-body">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Fire and Explosion
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      It covers damages due to accidental fires and explosions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card rounded-5 my-4 d-flex flex-row gap-3"
                data-aos="flip-right"
              >
                <div className="mt-3">
                  <img src="/check.png" width={35} alt="" />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Theft and Burglary
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      It protects your shop's assets from theft and burglary.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card rounded-5 my-4 d-flex flex-row gap-3"
                data-aos="flip-left"
              >
                <div className="mt-3">
                  <img src="/check.png" width={35} alt="" />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Natural Disasters
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      It covers flood, earthquake, and storm damage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card d-flex my-4 flex-row gap-3 rounded-5 "
                data-aos="flip-left"
              >
                <div className="mt-3">
                  <img src="/check.png" width={35} alt="" />
                </div>
                <div className="card-body">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Third-Party Liability
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      It pays third-party claims as a result of an injury to
                      someone within your shop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lifeInsuranceSection_11 px-lg-0 px-md-0 px-4">
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
                {shopLoan.map((data, index) => {
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

      <section className="lifeInsuranceSection_12 px-lg-0 px-md-0 px-4 my-10">
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

      {/*     <section className="lifeInsuranceSection_13 px-lg-0 px-md-0 px-4 my-10 bg-dark-blue">
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
                  <img
                    src="/ArticlesBlogsImg1.webp"
                    className="img-fluid"
                    alt=""
                  />

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
                <div className="blogsCard p-0 overflow-hidden bg-white d-flex flex-column justify-content-between rounded-3">
                  <img
                    src="/ArticlesBlogsImg2.webp"
                    className="img-fluid"
                    alt=""
                  />

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
                <div className="blogsCard p-0 overflow-hidden bg-white d-flex flex-column justify-content-between rounded-3">
                  <img
                    src="/ArticlesBlogsImg3.webp"
                    className="img-fluid"
                    alt=""
                  />

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

      <section className="EducationLoanSection_12 px-lg-0 px-md-0 px-4  mb-15">
        <div className="container bg-dark-blue rounded-4 overflow-hidden p-0">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 ">
              <img
                className="img-fluid h-100 object-fit-cover"
                src="/ShopClaim.webp"
                alt=""
              />
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="text p-lg-0 p-md-5 p-5 ">
                <EducationLoanTitle
                  title={"Report Shop Claim"}
                  color="white"
                  fontSize="fs-30"
                  ratings={false}
                  pera="Lorem ipsum is a placeholder text commonly used in the design and typesetting industry. It consists of parts of Latin words with no specific meaning "
                  pera2={""}
                />

                <ApplyBtn
                  textColor="text-dark"
                  bgColor={"bg-white"}
                  text="Claim Now"
                  arrow={false}
                  arrowDark={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lifeInsuranceSection_14">
        <EducationLoanTitle
          title={"PRODUCTS YOU MAY LIKE"}
          color="black"
          fontSize="fs-32"
          ratings={false}
          pera=""
          pera2={""}
        />

        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel owl-theme"
              {...reviewCarouselOptions}
            >
              <div className="item">
                <div className="blogsCard p-0 overflow-hidden bg-white d-flex flex-column justify-content-between rounded-3">
                  <img src="/puml.jpg" className="p-4 img-fluid" alt="" />

                  <div className="bottom mt-4 p-2 d-flex flex-column align-items-start">
                    <h2 className="fs-24 ps-4 font-inter fw-semibold">
                      Life Insurance
                    </h2>
                    <p className="fs-18 font-inter ps-4  mt-2">
                      Choose the right insurance with Samriddh Kendra.
                    </p>

                    <ApplyBtn
                      textColor="text-dark"
                      bgColor={""}
                      text="Learn More"
                      arrow={true}
                      arrowDark={true}
                    />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blogsCard p-0 overflow-hidden bg-white d-flex flex-column justify-content-between rounded-3">
                  <img
                    src="/Motor Insurance img.webp"
                    className="p-4 img-fluid"
                    alt=""
                  />

                  <div className="bottom mt-4 p-2 d-flex flex-column align-items-start">
                    <h2 className="fs-24 ps-4 font-inter fw-semibold">
                      Motor Insurance
                    </h2>
                    <p className="fs-18 font-inter ps-4  mt-2">
                      Choose the right insurance with Samriddh Kendra.
                    </p>

                    <ApplyBtn
                      textColor="text-dark"
                      bgColor={""}
                      text="Learn More"
                      arrow={true}
                      arrowDark={true}
                    />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blogsCard p-0 overflow-hidden bg-white d-flex flex-column justify-content-between rounded-3">
                  <img
                    src="/Shop Insurance img.webp"
                    className="p-4 img-fluid"
                    alt=""
                  />

                  <div className="bottom mt-4 p-2 d-flex flex-column align-items-start">
                    <h2 className="fs-24 ps-4 font-inter fw-semibold">
                      Health Insurance
                    </h2>
                    <p className="fs-18 font-inter ps-4  mt-2">
                      Choose the right insurance with Samriddh Kendra.
                    </p>

                    <ApplyBtn
                      textColor="text-dark"
                      bgColor={""}
                      text="Learn More"
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

      <section className="lifeInsuranceSection_14  EducationLoanSection_13 my-10 px-lg-0 px-md-0 px-4">
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

export default ShopInsurance;
