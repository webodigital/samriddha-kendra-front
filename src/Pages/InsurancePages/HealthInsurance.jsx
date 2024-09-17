import React, { useContext, useState } from "react";
import ApplyBtn from "../../components/Buttons/ApplyBtn";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CreatingContext from "../../context/ContexAPI";
import EducationLoanTitle from "../../components/Titles/EducationLoanTitle";

const HealthInsurance = () => {
  const {
    aspirationsSliderCarouselOptions,
    educationLoan,
    reviewCarouselOptions,
    partnersCarouselOptions,
  } = useContext(CreatingContext);

  const [activeTab, setActiveTab] = useState("inclusions");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="HealthInsurance">
      <section className=" HealthInsurance_section1 px-lg-0 px-md-0 px-4  position-relative">
        <div
          data-aos="flip-right"
          className="position-absolute textContainer p-2"
        >
          <h1 className="fs-68 fs-sm-55 fs-xs-45 font-play-bold text-white">
            Health Insurance
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
                  <div className="termLife w-100 m-1 d-flex gap-4 align-items-center bg-dark-blue px-3 py-4 justify-content-start rounded-4">
                    <img
                      className="img-fluid"
                      width={23}
                      src="/HealthInsuranceAvatar.png"
                      alt=""
                    />
                    <h2 className="fw-semibold fs-18 text-white font-inter">
                      Self
                    </h2>
                  </div>
                </div>
                <div className="col-6">
                  <div className="termLife  w-100 m-1 d-flex gap-4 align-items-center bg-dark-blue px-3 py-4 justify-content-start rounded-4">
                    <img
                      width={23}
                      className="img-fluid"
                      src="/HealthInsuranceAvatar2.png"
                      alt=""
                    />
                    <h2 className="fw-semibold fs-18 text-white font-inter">
                      Spouse
                    </h2>
                  </div>
                </div>
                <div className="col-6">
                  <div className="termLife  w-100 m-1 d-flex gap-4 align-items-center bg-dark-blue px-3 py-4 justify-content-start rounded-4">
                    <img
                      width={23}
                      className="img-fluid"
                      src="/HealthInsuranceAvatar3.png"
                      alt=""
                    />
                    <h2 className="fw-semibold fs-18 text-white font-inter">
                      Son
                    </h2>
                  </div>
                </div>
                <div className="col-6">
                  <div className="termLife  w-100 m-1 d-flex gap-4 justify-content-start align-items-center bg-dark-blue px-3 py-4 rounded-4">
                    <img
                      width={23}
                      className="img-fluid"
                      src="/HealthInsuranceAvatar4.png"
                      alt=""
                    />
                    <h2 className="fw-semibold fs-18 text-white font-inter">
                      Daughter
                    </h2>
                  </div>
                </div>
                <div className="col-6">
                  <div className="termLife  w-100 m-1 d-flex gap-4 align-items-center bg-dark-blue px-3 py-4 justify-content-start rounded-4">
                    <img
                      width={23}
                      className="img-fluid"
                      src="/HealthInsuranceAvatar5.png"
                      alt=""
                    />
                    <h2 className="fw-semibold fs-18 text-white font-inter">
                      Father
                    </h2>
                  </div>
                </div>
                <div className="col-6">
                  <div className="termLife  w-100 m-1 d-flex gap-4 justify-content-start align-items-center bg-dark-blue px-3 py-4 rounded-4">
                    <img
                      width={23}
                      className="img-fluid"
                      src="/HealthInsuranceAvatar6.png"
                      alt=""
                    />
                    <h2 className="fw-semibold fs-18 text-white font-inter">
                      Mother
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
                title={"What is Health Insurance?"}
                color="black"
                fontSize="fs-40"
                ratings={false}
                pera="Health insurance is a protective financial tool that covers the cost of medical care, safeguarding you from the burden of high healthcare expenses. At Samriddh Kendra, our health insurance plans ensure that you and your family receive quality medical treatment without the stress of unexpected bills. "
                pera2={
                  "Health insurance offers peace of mind, allowing you to focus on your health and recovery while we take care of the financial side."
                }
              />
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <div
                data-aos="flip-right"
                className="d-flex justify-content-center align-items-end"
              >
                <img
                  src="/HealthInsuranceForFamily.webp"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" lifeInsuranceSection_4 py-1 px-lg-0 px-md-0 px-4 bg-dark-blue">
        <EducationLoanTitle
          title={"Types of Health Insurance Plans"}
          color="white"
          fontSize="fs-40"
          ratings={false}
          pera="At Samriddh Kendra, we offer a range of health insurance plans tailored to fit your needs:"
          pera2={" "}
        />

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card rounded-5 " data-aos="flip-left">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Individual health insurance plan
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      In addition to yourself, these plans cover your spouse,
                      children, and parents, with individual sum assured for
                      each member.
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
                      Family health insurance plans
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      These plans cover the immediate family members with a
                      single sum insured under one policy.
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
                      Senior-citizen health insurance
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      These plans cover medical expenses of individuals who are
                      60 years and above in age.
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
          title={"Why Do I Need Health Insurance?"}
          color="black"
          fontSize="fs-36"
          ratings={false}
          pera="Health insurance is essential to protect yourself and your family from the financial strain of unexpected medical expenses. With rising healthcare costs, a single hospital visit or major illness can lead to significant bills. Health insurance provides you with a safety net, covering expenses like hospitalization, surgeries, and medications, ensuring you receive the best care without depleting your savings. "
          pera2={
            "It also promotes preventive care by covering check-ups and early treatments, helping you stay healthy. At Samriddh Kendra, our health insurance plans offer peace of mind, so you can focus on your well-being without worrying about financial burdens. "
          }
        />

        <div data-aos="fade-up" className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-flex align-items-center gap-5 my-5">
                <img
                  className="img-fluid"
                  width={60}
                  src="/Sum insured restoration.png"
                  alt=""
                />
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-20 fw-bold font-inter">
                    Sum insured restoration
                  </h3>
                  <p className="fs-18 font-inter">
                    Option to recharge up to 100% of sum insured for another
                    hospitalisation in the same year.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-flex align-items-center gap-5 my-5">
                <img
                  className="img-fluid"
                  width={60}
                  src="/Daycare treatment.png"
                  alt=""
                />
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-20 fw-bold font-inter">
                    Daycare treatment
                  </h3>
                  <p className="fs-18 font-inter">
                    Plans that cover treatments and procedures under 24 hours.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-flex align-items-center gap-5 my-5">
                <img
                  className="img-fluid"
                  width={50}
                  src="/Cashless medical treatment.png"
                  alt=""
                />
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-20 fw-bold font-inter">
                    Cashless medical treatment
                  </h3>
                  <p className="fs-18 font-inter">
                    Plans that offer cashless claims at network hospitals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-flex align-items-center gap-5 my-5">
                <img
                  className="img-fluid"
                  width={60}
                  src="/In-patient hospitalisation.png"
                  alt=""
                />
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-20 fw-bold font-inter">
                    In-patient hospitalisation
                  </h3>
                  <p className="fs-18 font-inter">
                    Covers hospital stays of 24 hours or longer, including room,
                    doctor, boarding, nursing, and more.
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
                    Medical History
                  </h3>
                  <p className="fs-18 font-inter text-gray">
                    Your current health status and medical history significantly
                    impact your insurance premiums.
                  </p>
                </div>
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-18 fw-semibold font-inter">Sum Assured</h3>
                  <p className="fs-18 font-inter text-gray">
                    Higher coverage amounts typically result in higher premiums
                    due to the increased financial risk to the insurer.
                  </p>
                </div>
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-18 fw-semibold font-inter">Age</h3>
                  <p className="fs-18 font-inter text-gray">
                    Jobs that are considered high-risk can lead to higher
                    premiums. If your profession exposes you to danger, insurers
                    might charge more.
                  </p>
                </div>
                <div className="d-flex flex-column gap-2">
                  <h3 className="fs-18 fw-semibold font-inter">
                    Geographical Location
                  </h3>
                  <p className="fs-18 font-inter text-gray">
                    The cost of healthcare services varies by location,
                    affecting premium rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lifeInsuranceSection_6 px-lg-0 px-md-0 px-4 py-11">
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

              <div data-aos="fade-up" className="row flex-column gap-4">
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <p className="py-3 px-45 bg-dark-blue text-white fw-semibold fs-18 font-inter me-4">
                      1
                    </p>
                    <div className="txt">
                      <h2 className="fw-medium fs-20 font-inter">
                        Understanding Health insurance
                      </h2>
                      <p className="fs-16 font-inter">
                        The first step in buying a suitable health insurance
                        plan is assessing your require- ments and determining
                        the necessary sum insured.
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
      <section className="healthInsuranceSection_7 lifeInsuranceSection_7 px-lg-0 px-md-0 px-4 py-6">
        <EducationLoanTitle
          title={"Health Insurance Plan For Everyone"}
          color="black"
          fontSize="fs-36"
          ratings={false}
          pera="At Samriddh Kendra, we believe in providing health coverage that meets the unique needs of every individual and family. Our range of health insurance plans is designed to suit all age groups, life stages, and health requirements. Whether you're a young professional, a growing family, or a senior citizen, we have a plan that fits your lifestyle."
          pera2={""}
        />

        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12">
              <div
                className="card d-flex my-4 flex-row gap-3 rounded-5 "
                data-aos="flip-left"
              >
                <div className="mt-3">
                  <img src="/Family- Floater Health Insurance.png" alt="" />
                </div>
                <div className="card-body">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Family- Floater Health Insurance
                    </h5>

                    <ul className="card-text fs-18 font-inter mt-4">
                      <li>Coverage upto 30 Lacks</li>
                      <li>Unlimited Reinstatement</li>
                      <li>380 Day Care Covered</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <div
                className="card d-flex my-4 flex-row gap-3 rounded-5 "
                data-aos="flip-left"
              >
                <div className="mt-3">
                  <img src="/Super Top-Up Health Insurance.png" alt="" />
                </div>
                <div className="card-body">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Super Top-Up Health Insurance
                    </h5>

                    <ul className="card-text fs-18 font-inter mt-4">
                      <li>Coverage upto 1 Crore</li>
                      <li>Daily Allowance upto ₹5000</li>
                      <li>AYUSH treatment covered</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <div
                className="card d-flex my-4 flex-row gap-3 rounded-5 "
                data-aos="flip-left"
              >
                <div className="mt-3">
                  <img src="/Individual Health Insurance.png" alt="" />
                </div>
                <div className="card-body">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Individual Health Insurance
                    </h5>

                    <ul className="card-text fs-18 font-inter mt-4">
                      <li>Coverage upto 20 Lacs</li>
                      <li>Unlimited Reinstatement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-12">
              <div
                className="card d-flex my-4 flex-row gap-3 rounded-5 "
                data-aos="flip-left"
              >
                <div className="mt-3">
                  <img src="/Personal Accident Insurance.png" alt="" />
                </div>
                <div className="card-body">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Personal Accident Insurance
                    </h5>

                    <ul className="card-text fs-18 font-inter mt-4">
                      <li>Cover Accidental Death</li>
                      <li>Covers Disability</li>
                      <li>No Medical Test Required</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" lifeInsuranceSection_8 px-lg-0 px-md-0 px-4 py-6 bg-dark-blue">
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
                  <img src="/check.png" width={35} alt="" />
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
                  <img src="/check.png" width={35} alt="" />
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
                  <img src="/check.png" width={35} alt="" />
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
                  <img src="/check.png" width={35} alt="" />
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
                  <img src="/check.png" width={35} alt="" />
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
                  <img src="/check.png" width={35} alt="" />
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

      <section className="healthInsuranceSection_9 px-lg-0 px-md-0 px-4 ">
        <EducationLoanTitle
          title={"Find Samriddh Network Hospital Near You"}
          color="black"
          fontSize="fs-36"
          ratings={false}
          pera="Locate from 10,000+ Trusted Healthcare Providers in your vicinity with Samriddh powered Cashless Hospitalization."
          pera2={""}
          txtCenter={"text-center"}
        />

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="d-flex text-center flex-column gap-3">
                <h1 className="fs-50 font-inter fw-bolder text-color">8000+</h1>
                <p className="fs-20 font-inter fw-bold">
                  Network Hospitals Pan India
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center">
                <img className="img-fluid" src="/Network Hospital.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex text-center flex-column gap-3">
                <h1 className="fs-50 font-inter fw-bolder text-color">260+</h1>
                <p className="fs-20 font-inter fw-bold">Hospitals Near You</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex text-center mt-5 flex-column gap-3">
              <h1 className="fs-50 font-inter fw-bolder text-color">4682+</h1>
              <p className="fs-20 font-inter fw-bold">Customers Applied</p>
            </div>
          </div>

          <div className="mt-11 d-flex flex-column justify-content-center align-items-center gap-3">
            <p className="fs-18 font-inter fw-semibold text-center">
              Many individuals in your vicinity have already opted for Samriddh
              Health Insurance
            </p>

            <ApplyBtn
              textColor={"text-white"}
              bgColor="bg-dark-blue"
              text={"Find a Network Hospital"}
              arrow={false}
              arrowDark={false}
              width=""
            />
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

export default HealthInsurance;
