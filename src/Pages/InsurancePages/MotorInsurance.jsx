import React, { useContext, useState } from "react";
import ApplyBtn from "../../components/Buttons/ApplyBtn";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CreatingContext from "../../context/ContexAPI";
import EducationLoanTitle from "../../components/Titles/EducationLoanTitle";

const MotorInsurance = () => {
  const {
    aspirationsSliderCarouselOptions,
    educationLoan,
    reviewCarouselOptions,
    partnersCarouselOptions,
  } = useContext(CreatingContext);

  const [activeTab, setActiveTab] = useState("exclusions");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="motorInsurance">
      <section className=" motorInsurance_section1 px-lg-0 px-md-0 px-4  position-relative">
        <div
          data-aos="flip-right"
          className="position-absolute textContainer p-2"
        >
          <h1 className="fs-68 fs-sm-55 fs-xs-45 font-play-bold text-white">
            Motor Insurance
          </h1>
          <p className="fs-18 font-inter text-white mt-4  w-75">
            Lorem ipsum is a placeholder text commonly used in the design and
            typesetting industry. It consists of parts of Latin words with no
            specific meaning.
          </p>

          <div className="getInsurance bg-white mt-5 rounded-4 py-5 px-4">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <div className="termLife h-100 w-100 d-flex gap-4 align-items-center bg-dark-blue px-3 py-4 justify-content-center rounded-4">
                    <img
                      className="img-fluid"
                      width={33}
                      src="/carAvatar.png"
                      alt=""
                    />
                    <h2 className="fw-semibold fs-18 text-white font-inter">
                      Four Wheeler
                    </h2>
                  </div>
                </div>
                <div className="col-6">
                  <div className="termLife h-100  w-100 m-1 d-flex gap-4 align-items-center bg-dark-blue px-3 py-4 justify-content-center rounded-4">
                    <img
                      width={33}
                      className="img-fluid"
                      src="/bikeAvatar.png"
                      alt=""
                    />
                    <h2 className="fw-semibold fs-18 text-white font-inter">
                      Two Wheeler
                    </h2>
                  </div>
                </div>
              </div>

              <input
                className="font-inter text-dark w-100 mt-4 p-3 fs-18 fw-medium rounded-4"
                type="number"
                placeholder="Registration Number"
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

      <section className=" liftInsuranceSection_2 px-lg-0 px-md-0 px-4 bg-dark-blue w-100 position-relative">
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
      </section>

      <section className=" lifeInsuranceSection_3 px-lg-0 px-md-0 px-4 my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6 col-12" data-aos="flip-left">
              <EducationLoanTitle
                title={"What is Motor Insurance?"}
                color="black"
                fontSize="fs-40"
                ratings={false}
                pera="Lorem ipsum is a placeholder text commonly used in the design and typesetting industry. 
It consists of parts of Latin words with no specific meaning and is used as temporary filler content when the actual text is not available or finalized."
                pera2={
                  "Lorem ipsum is a placeholder text commonly used in the design and typesetting industry. It consists of parts of Latin words with no specific meaning "
                }
              />
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <div
                data-aos="flip-right"
                className="d-flex justify-content-center align-items-end"
              >
                <img src="/car22.webp" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" lifeInsuranceSection_4 py-1 px-lg-0 px-md-0 px-4 bg-dark-blue">
        <EducationLoanTitle
          title={"Types of Motor Insurance Plans"}
          color="white"
          fontSize="fs-40"
          ratings={false}
          pera="Life insurance plans are characterized by the fact that they pay a benefit on death of the insured. The most popular plans have a fixed period of time for which the policy is in force, and death benefit will be paid."
          pera2={" "}
        />

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card rounded-5 " data-aos="flip-left">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Private Car
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      The Private car insurance covers your car against damage,
                      and third party liability arising out of its use.
                    </p>
                  </div>
                  <a href="#" className="card-link fw-bold fs-18 font-inter">
                    Learn More{" "}
                    <img
                      width={6.5}
                      src="/LearnMoreArrow.png"
                      className="ms-2"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card rounded-5 " data-aos="flip-right">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Two Wheeler
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      The two wheeler insurance covers your vehicle against
                      damage and third party liability arising out of its use.
                    </p>
                  </div>
                  <a href="#" className="card-link fw-bold fs-18 font-inter">
                    Learn More{" "}
                    <img
                      width={6.5}
                      src="/LearnMoreArrow.png"
                      className="ms-2"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card rounded-5 " data-aos="flip-left">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Commercial Vehicles
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      Commercial vehicle insurance covers your vehicle against
                      damage and third party liability arising out of its use.
                    </p>
                  </div>
                  <a href="#" className="card-link fw-bold fs-18 font-inter">
                    Learn More{" "}
                    <img
                      width={6.5}
                      src="/LearnMoreArrow.png"
                      className="ms-2"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" lifeInsuranceSection_4 motorInsuranceSection_4 py-1 px-lg-0 px-md-0 px-4 ">
        <EducationLoanTitle
          title={"Why Do I Need Motor Insurance?"}
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
                <img className="img-fluid" src="/Security.png" alt="" />
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-20 fw-bold font-inter">
                    Security Against Theft
                  </h3>
                  <p className="fs-18 font-inter">
                    But with a vehicle insurance policy, you are protected
                    against theft, vandalism, and all man-made harmful
                    activities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-flex align-items-center gap-5 my-5">
                <img className="img-fluid" src="/saveMoney.png" alt="" />
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-20 fw-bold font-inter">Helps save money</h3>
                  <p className="fs-18 font-inter">
                    Cover most of your damage repair expenses on your vehicles,
                    from minor scratches, and engine repairs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-flex align-items-center gap-5 my-5">
                <img
                  className="img-fluid"
                  src="/Convenient Online Option2.png"
                  alt=""
                />
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-20 fw-bold font-inter">
                    Convenient Online Option
                  </h3>
                  <p className="fs-18 font-inter">
                    You can buy a term policy online too at your convenience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-flex align-items-center gap-5 my-5">
                <img
                  className="img-fluid"
                  src="/Third-party Damage Coverage.png"
                  alt=""
                />
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-20 fw-bold font-inter">
                    Third-party Damage Coverage
                  </h3>
                  <p className="fs-18 font-inter">
                    With sufficient coverage, you can pay for the damages that
                    occurred after a collision with a third-party. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lifeInsuranceSection_5 px-lg-0 px-md-0 px-4 pt-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12">
              <div className="d-flex flex-column align-items-start gap-3">
                <EducationLoanTitle
                  title={"What factors influence Health Insurance Premium?"}
                  color=""
                  cusColor={"cusColor"}
                  fontSize="fs-36"
                  ratings={false}
                  pera="The premium in insurance refers to the amount of money paid by the policyholder to the insurance company in exchange for coverage and its influenced by insured members age, city, lifestyle, BMI, Occupation type, etc"
                  pera2={" "}
                />

                <div className="mt--5">
                  <ApplyBtn
                    textColor={"text-dark-blue"}
                    bgColor="bg-white"
                    text={"Apply Now"}
                    arrow={false}
                    arrowDark={false}
                    width=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-12">
              <div className="rounded-top-4 p-5 d-flex flex-column gap-5 cusBG mt-lg-0 mt-md-0 mt-7">
                <p className="font-inter fw-normal fs-18 text-light-blue">
                  How is it calculated
                </p>

                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-18 fw-semibold font-inter">
                    Driving History
                  </h3>
                  <p className="fs-18 font-inter text-gray">
                    A clean driving record with no history of accidents or
                    claims can lower premiums.
                  </p>
                </div>
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-18 fw-semibold font-inter">Location</h3>
                  <p className="fs-18 font-inter text-gray">
                    Areas with higher crime rates or heavy traffic might lead to
                    higher premiums due to the increased risk of accidents and
                    theft.
                  </p>
                </div>
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-18 fw-semibold font-inter">
                    Age of the Driver
                  </h3>
                  <p className="fs-18 font-inter text-gray">
                    Young drivers (below 25) and very senior drivers (above 65)
                    often face higher premiums due to perceived higher risk.
                  </p>
                </div>
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-18 fw-semibold font-inter">
                    Claim Settlement Ratio
                  </h3>
                  <p className="fs-18 font-inter text-gray">
                    Insurers with a higher claim settlement ratio might charge
                    higher premiums.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lifeInsuranceSection_6 px-lg-0 px-md-0 px-4 py-6">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 col-md-6 col-12">
              <EducationLoanTitle
                title={"How to Buy?"}
                color="black"
                fontSize="fs-40"
                ratings={false}
                pera="Lorem ipsum is a placeholder text commonly used in the design and typesetting industry."
                pera2={""}
              />

              <div data-aos="fade-up" className="row flex-column gap-4">
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <p className="py-3 px-45 bg-dark-blue text-white fw-semibold fs-18 font-inter me-4">
                      1
                    </p>
                    <div className="txt">
                      <h2 className="fw-medium fs-20 font-inter">
                        Provide Registration No.
                      </h2>
                      <p className="fs-16 font-inter">
                        Give us your car’s Registration Number and check your
                        vehicle details.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <p className="py-3 px-45 bg-dark-blue text-white fw-semibold fs-18 font-inter me-4">
                      2
                    </p>
                    <div className="txt">
                      <h2 className="fw-medium fs-20 font-inter">
                        Payment of Premium
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
                        Upload the required documents. Post insurer’s approval,
                        the policy is sent on the registered email id.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="col-lg-7 col-md-6 col-12">
              <div className="mt-lg-0 mt-md-0 mt-6 text-center">
                <img className="img-fluid" src="/How to Buy2.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" lifeInsuranceSection_8 px-lg-0 px-md-0 px-4 py-6 my-5 bg-dark-blue">
        <EducationLoanTitle
          title={"Health Insurance Plan - What it Covers?"}
          color="white"
          fontSize="fs-36"
          ratings={false}
          pera="What is covered in Life insurance"
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
                  <img src="/cut.png" width={35} alt="" />
                </div>
                <div className="card-body">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Hospitalization expenses
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      Covers serious injuries that need overnight stays.
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
                  <img src="/cut.png" width={35} alt="" />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Organ donor expenses
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      Covers up to a set amount for organ transplants.
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
                  <img src="/cut.png" width={35} alt="" />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Pre-existing diseases
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      Plans that cover after a 2 to 4-year waiting period.
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
                  <img src="/cut.png" width={35} alt="" />
                </div>
                <div className="card-body">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Pre- and post-hospitalisation
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      Plans that cover for a specific number of days.
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
                  <img src="/cut.png" width={35} alt="" />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Room rent
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      Plans that cover up to a set sub-limit.
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
                  <img src="/cut.png" width={35} alt="" />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Ambulance charges
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      Covers up to a certain limit for hospital transportation.
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
                {educationLoan.map((data, index) => {
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

      <section className="lifeInsuranceSection_13 px-lg-0 px-md-0 px-4 my-10 bg-dark-blue">
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
                <div className="blogsCard p-0 overflow-hidden b-shadow bg-white d-flex flex-column justify-content-between rounded-3">
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
                <div className="blogsCard p-0 overflow-hidden b-shadow bg-white d-flex flex-column justify-content-between rounded-3">
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
      </section>

      <section className="EducationLoanSection_12 px-lg-0 px-md-0 px-4 ">
        <div className="container bg-dark-blue rounded-4 overflow-hidden p-0">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 ">
              <img
                className="img-fluid h-100 object-fit-cover"
                src="/motorInsurance.png"
                alt=""
              />
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="text p-lg-0 p-md-5 p-5">
                <EducationLoanTitle
                  title={"Report Motor Claim"}
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

      <section className="mt-15">
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
                  <img
                    src="/Health Insurance img.webp"
                    className="p-4 img-fluid"
                    alt=""
                  />

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
              <div className="item">
                <div className="blogsCard p-0 overflow-hidden bg-white d-flex flex-column justify-content-between rounded-3">
                  <img
                    src="/Shop Insurance img.webp"
                    className="p-4 img-fluid"
                    alt=""
                  />

                  <div className="bottom mt-4 p-2 d-flex flex-column align-items-start">
                    <h2 className="fs-24 ps-4 font-inter fw-semibold">
                      Shop Insurance
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

export default MotorInsurance;
