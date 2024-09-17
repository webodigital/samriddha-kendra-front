import React, { useContext, useState } from "react";
import ApplyBtn from "../../components/Buttons/ApplyBtn";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CreatingContext from "../../context/ContexAPI";
import EducationLoanTitle from "../../components/Titles/EducationLoanTitle";

const LifeInsurance = () => {
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
    <div className="liftInsurance">
      <section className=" liftInsuranceSection_1 px-lg-0 px-md-0 px-4 position-relative">
        <div
          data-aos="flip-right"
          className="position-absolute textContainer p-2"
        >
          <h1 className="fs-68 fs-sm-55 fs-xs-45 font-play-bold text-white">
            Life Insurance
          </h1>
          <p className="fs-18 font-inter text-white mt-4  w-75">
            Choose a life insurance plan from Samriddh Kendra to safeguard your
            family's future, manage financial risks, and ensure that your loved
            ones are well taken care of. Our expert team is here to help you
            select the best plan to fit your needs and goals.
          </p>

          <div className="getInsurance bg-white mt-5 rounded-4 py-5 px-4">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <div className="termLife w-100 m-1 d-flex gap-4 align-items-center bg-dark-blue px-3 py-4 justify-content-start rounded-4">
                    <img
                      className="img-fluid"
                      width={23}
                      src="/Term Life.png"
                      alt=""
                    />
                    <h2 className="fw-semibold fs-18 text-white font-inter">
                      Term Life
                    </h2>
                  </div>
                </div>
                <div className="col-6">
                  <div className="termLife  w-100 m-1 d-flex gap-4 align-items-center bg-dark-blue px-3 py-4 justify-content-start rounded-4">
                    <img
                      width={23}
                      className="img-fluid"
                      src="/Whole Life.png"
                      alt=""
                    />
                    <h2 className="fw-semibold fs-18 text-white font-inter">
                      Whole Life
                    </h2>
                  </div>
                </div>
                <div className="col-6">
                  <div className="termLife  w-100 m-1 d-flex gap-4 align-items-center bg-dark-blue px-3 py-4 justify-content-start rounded-4">
                    <img
                      width={23}
                      className="img-fluid"
                      src="/Saving.png"
                      alt=""
                    />
                    <h2 className="fw-semibold fs-18 text-white font-inter">
                      Saving
                    </h2>
                  </div>
                </div>
                <div className="col-6">
                  <div className="termLife  w-100 m-1 d-flex gap-4 justify-content-start align-items-center bg-dark-blue px-3 py-4 rounded-4">
                    <img
                      width={23}
                      className="img-fluid"
                      src="/Pension.png"
                      alt=""
                    />
                    <h2 className="fw-semibold fs-18 text-white font-inter">
                      Pension
                    </h2>
                  </div>
                </div>
              </div>

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
                title={"What is Life Insurance?"}
                color="black"
                fontSize="fs-40"
                ratings={false}
                pera="Life insurance is a financial product designed to provide security and peace of mind by ensuring that your loved ones are financially protected in the event of your death. By purchasing a life insurance policy, you agree to pay regular premiums to the insurance company. "
                pera2={
                  "In return, the insurer promises to pay a designated sum of money, known as the death benefit, to your beneficiaries upon your passing."
                }
              />
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <div
                data-aos="flip-right"
                className="d-flex justify-content-center align-items-end"
              >
                <img src="/Life Insurance2.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" lifeInsuranceSection_4 py-1 px-lg-0 px-md-0 px-4 bg-dark-blue">
        <EducationLoanTitle
          title={"Types of Life Insurance Plans"}
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
                      Term Life insurance plan
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      Term Insurance is the simplest form of life insurance that
                      only offers financial cover for a specific number of
                      years.
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
                      Whole Life insurance plans
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      Provides coverage for the entire lifetime of the
                      policyholder.
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
                      Pension plans
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      Designed to provide financial security during retirement
                      by offering a regular income.
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

      <section className=" lifeInsuranceSection_4 py-1 px-lg-0 px-md-0 px-4 ">
        <EducationLoanTitle
          title={"Why Do I Need Life Insurance?"}
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
                  src="/Comprehensive Coverage.png"
                  alt=""
                />
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-20 fw-medium">Comprehensive Coverage</h3>
                  <p className="fs-18 font-inter">
                    Diverse plans, ensuring that there's a solution for every
                    need, whether it's pure protection, wealth accumulation,
                    retirement planning.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-flex align-items-center gap-5 my-5">
                <img
                  className="img-fluid"
                  width={60}
                  src="/Long-Term Coverage.png"
                  alt=""
                />
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-20 fw-medium">Long-Term Coverage</h3>
                  <p className="fs-18 font-inter">
                    You can choose the tenure of your term insurance based on
                    your long-term financial planning.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-flex align-items-center gap-5 my-5">
                <img
                  className="img-fluid"
                  width={50}
                  src="/Convenient Online Option.png"
                  alt=""
                />
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-20 fw-medium">Convenient Online Option</h3>
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
                  width={60}
                  src="/Easy Premium Payment Options.png"
                  alt=""
                />
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-20 fw-medium">
                    Easy Premium Payment Options
                  </h3>
                  <p className="fs-18 font-inter">
                    You may pay for the plan through several modes online or
                    offline, based on your payment cycle.
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
                  title={"What factors influence Life Insurance Premium?"}
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
                    Lifestyle Choices
                  </h3>
                  <p className="fs-18 font-inter text-gray">
                    Habits like smoking or excessive alcohol consumption can
                    increase your premium due to higher health risks.
                  </p>
                </div>
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-18 fw-semibold font-inter">Occupation</h3>
                  <p className="fs-18 font-inter text-gray">
                    Jobs that are considered high-risk can lead to higher
                    premiums. If your profession exposes you to danger, insurers
                    might charge more.
                  </p>
                </div>
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-18 fw-semibold font-inter">Age</h3>
                  <p className="fs-18 font-inter text-gray">
                    Younger applicants typically pay lower premiums as they are
                    considered less risky.
                  </p>
                </div>
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-18 fw-semibold font-inter">
                    Medical history
                  </h3>
                  <p className="fs-18 font-inter text-gray">
                    Your medical history or any previous illnesses in your
                    family can influence your premiums.
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
      <section className="lifeInsuranceSection_7 px-lg-0 px-md-0 px-4 py-6">
        <EducationLoanTitle
          title={"Who can purchase a Life Insurance Policy?"}
          color="black"
          fontSize="fs-36"
          ratings={false}
          pera="Lorem ipsum is a placeholder text commonly used in the design and typesetting industry. It consists of parts of Latin words with no specific meaning and is used as temporary filler content when the actual text is not available or finalized."
          pera2={""}
        />

        <div className="container mt-4">
          <div className="col-12">
            <div className="border rounded-5 overflow-hidden ">
              <div className="border-bottom  d-flex">
                <div className="col-4">
                  <div className="border-right h-100 text-center p-3 fs-20 fw-bold font-inter">
                    <p>Age Group</p>
                  </div>
                </div>
                <div className="col-8">
                  <div className=" text-center p-3 fs-20 fw-bold font-inter">
                    <p>Importance of buying life insurance</p>
                  </div>
                </div>
              </div>
              <div className="d-flex h-100 w-100">
                <div className="col-4">
                  <div className="border-right w-100 h-100 p-4"></div>
                </div>
                <div className="col-8">
                  <div className="w-100 h-100 p-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lifeInsuranceSection_8 px-lg-0 px-md-0 px-4 py-6 bg-dark-blue">
        <EducationLoanTitle
          title={"Life Insurance Plan - What it Covers?"}
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
                      Suicide
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      Death occurs by suicide with in a certain period of
                      policy.
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
                      Death due to drug or alcohol
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      Dies due to any kind of substance abuse.
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
                      Criminal act
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      If the insured’s death occurs through any criminal
                      activities.
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
                      War
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      If the insured dies due to war or any war-related
                      activity.
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
                      Life-threatening activity
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      Death caused by any high-risk activities like racing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lifeInsuranceSection_9 px-lg-0 px-md-0 px-4">
        <EducationLoanTitle
          title={"How to Claim a Life Insurance Policy?"}
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

      <section className="lifeInsuranceSection_10 my-10 py-6 px-lg-0 px-md-0 px-4 bg-dark-blue">
        <EducationLoanTitle
          title={"Calculator"}
          color="white"
          fontSize="fs-36"
          ratings={false}
          pera=""
          pera2={""}
        />
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center ">
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <div className="d-flex justify-content-center align-items-center">
                <div
                  data-aos={"flip-right"}
                  className="calCard rounded-5 mt-lg-0 mt-md-3 mt-4 p-5 bg-white"
                >
                  <div className="d-flex flex-lg-row flex-md-row flex-sm-row flex-column  gap-5 justify-content-between">
                    <div className="txt order-lg-first order-md-first order-sm-first order-last">
                      <h2 className=" fs-24 fw-bolder font-inter">
                        Coverage Calculator
                      </h2>
                      <p className="fs-18 font-inter fw-medium mt-4">
                        Calculate the coverage as per your insurance needs.
                      </p>

                      <div className="mt-5">
                        <ApplyBtn
                          textColor={"text-white"}
                          bgColor="bg-dark-blue"
                          text={"Calculate"}
                          arrow={false}
                          arrowDark={false}
                          width=""
                        />
                      </div>
                    </div>

                    <img
                      className="img-fluid order-lg-last order-md-last order-sm-last order-first"
                      src="/Coverage Calculator.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <div className="d-flex justify-content-center align-items-center">
                <div
                  data-aos={"flip-left"}
                  className="calCard rounded-5 mt-lg-0 mt-md-3 mt-4 p-5 bg-white"
                >
                  <div className="d-flex flex-lg-row flex-md-row flex-sm-row flex-column  gap-5 justify-content-between">
                    <div className="txt order-lg-first order-md-first order-sm-first order-last">
                      <h2 className=" fs-24 fw-bolder font-inter">
                        Premium Calculator
                      </h2>
                      <p className="fs-18 font-inter fw-medium mt-4">
                        As per your policy & tenure calculate the premiums.
                      </p>

                      <div className="mt-5">
                        <ApplyBtn
                          textColor={"text-white"}
                          bgColor="bg-dark-blue"
                          text={"Calculate"}
                          arrow={false}
                          arrowDark={false}
                          width=""
                        />
                      </div>
                    </div>

                    <img
                      className="img-fluid order-lg-last order-md-last order-sm-last order-first"
                      src="/Premium Calculator.png"
                      alt=""
                    />
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
                  <img
                    src="/Health Insurance img.webp"
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

export default LifeInsurance;
