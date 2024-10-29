import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-5 font-inter">
      <div className="container">
        <div className="row justify-content-md-center align-items-center justify-content-between">
          <div className=" col-xl-3 col-lg-3 col-md-8 col-12">
            <div className="row flex-column  me-4 gap-4 mx-auto text-md-center order-lg-first order-md-first mt-lg-5 mt-5 order-sm-last order-last">
              <div className="d-flex justify-content-lg-start justify-content-center">
                <img
                  className="img-fluid "
                  src="/Samriddh Kendra Logo.svg"
                  alt=""
                />
              </div>
              <div className="pera fs-18  text-lighter-gray text-lg-start">
                <span className="fw-bold text-white">SAMRIDDH KENDRA</span> is
                an early stage Fin Tech player working in the field of Finance
                and technology to bridge the gap between rural customers and
                Finance Institutions
              </div>
              <div className="social-media-icons w-75  mx-lg-1 mx-md-auto mx-auto d-flex align-items-center  gap-4 justify-content-lg-start  justify-content-sm-center justify-content-center">
                <a href="https://www.facebook.com/Samridhkendra">
                  <img src="/facebook.svg" className="img-fluid" alt="" />
                </a>
                <a href="https://www.linkedin.com/company/samriddh-kendra/">
                  <img src="/linkedin.webp" className="img-fluid" alt="" />
                </a>
                <a href="tel:+918758493204">
                  <img src="/telephone.webp" className="img-fluid" alt="" />
                </a>
                <a href="mailto:support@samriddhkedra.in">
                  <img src="/mail.webp" className="img-fluid" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-12 order-lg-last  order-sm-first order-first ">
            <div className="d-flex flex-sm-wrap flex-wrap justify-content-sm-center justify-content-center gap-5  gap-3">
              <div className="col-lg-3 col-md-3 col-sm-3 col-5">
                <h1 className="footer-heading mb-3">Platform</h1>
                <ul className="list-unstyled">
                  <li className="mt-2">
                    <Link to={"/"} className="text-white">
                      Home
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to={"about"} className="text-white">
                      About Us
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to={"career"}>
                      <a
                        href="#"
                        className="text-white d-flex align-items-start gap-2
                  "
                      >
                        Careers{" "}
                        <button className="highlight fs-5">Hiring now</button>
                      </a>
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to={"/products"}>
                      <a href="#" className="text-white">
                        Products
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-5 ">
                <h1 className="footer-heading mb-3">Loan</h1>
                <ul className="list-unstyled">
                  <li className="mt-2">
                    <Link to={"/products/loan/home"}>
                      <a href="#" className="text-white">
                        Home Loan
                      </a>
                    </Link>
                  </li>
                  <li className="mt-2">
                    {" "}
                    <Link to={"/products/loan/lap"}>
                      <a href="#" className="text-white">
                        LAP Loan
                      </a>
                    </Link>
                  </li>
                  <li className="mt-2">
                    {" "}
                    <Link to={"/products/loan/personal"}>
                      <a href="#" className="text-white">
                        Personal Loan
                      </a>
                    </Link>
                  </li>
                  <li className="mt-2">
                    {" "}
                    <Link to={"/products/loan/education_loan"}>
                      <a href="#" className="text-white">
                        Education Loan
                      </a>
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to={"/products/loan/business"}>
                      <a href="#" className="text-white">
                        Business Loan
                      </a>
                    </Link>
                  </li>
                  <li className="mt-2">
                    {" "}
                    <Link to={"/products/loan/morgatge_loan"}>
                      <a href="#" className="text-white">
                        Mortgage Loan
                      </a>
                    </Link>
                  </li>
                  <li className="mt-2">
                    {" "}
                    <Link to={"/products/loan/property_purchase_loan"}>
                      <a href="#" className="text-white">
                        Property Loan
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-5">
                <h1 className="footer-heading mb-3">Insurance</h1>
                <ul className="list-unstyled">
                  <li className="d-flex flex-column gap-2">
                    <Link to={"/products/insurance/health"}>
                      <a href="#" className="text-white">
                        Health Insurance
                      </a>
                    </Link>
                    <Link to={"/products/insurance/life"}>
                      <a href="#" className="text-white">
                        Life Insurance
                      </a>
                    </Link>
                    <Link to={"/products/insurance/shop"}>
                      <a href="#" className="text-white">
                        Shop Insurance
                      </a>
                    </Link>
                    <Link to={"/products/insurance/motor"}>
                      <a href="#" className="text-white">
                        Motor Insurance
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className=" col-lg-1 col-md-3 col-sm-3 col-5">
                <h1 className="footer-heading mb-3 text-center">Tools</h1>
                <ul className="list-unstyled w-100 text-center">
                  <li className="mt-2">
                    <Link to={"/products/Calculate_EMI_Interest"}>
                      <a href="#" className="text-white w-100">
                        Loan Calculator
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-5 text-dark border border-dark border-2" />

        <div className="row justify-content-center">
          <div className="col-3">
            <li className="mt-2 text-center ">
              <Link to={"/privacy_policy"}>
                <a href="#" className="text-white">
                  Privacy Policy
                </a>
              </Link>
            </li>
          </div>
          <div className="col-3">
            <li className="mt-2 text-center">
              <Link to={"/terms_Conditions"}>
                <a href="" className="text-white text-capitalize">
                  Terms and Conditions
                </a>
              </Link>
            </li>
          </div>
          <div className="col-3">
            <li className="mt-2 text-center">
              <Link to={"/grievance_officer"}>
                <a href="" className="text-white">
                  Grievance officer
                </a>
              </Link>
            </li>
          </div>
          {/* <div className="col-3">
            <li className="mt-2 text-center">
              <Link to={"/privacy_policy"}>
                <a href="" className="text-white">
                  Refund Policy
                </a>
              </Link>
            </li>
          </div> */}
        </div>

        <div className="row justify-content-center">
          <p className="text-center mt-3 fs-4 text-lighter-gray">
            &copy; 2024 CreditBucket Technologies Private Limited. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
