import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-5 font-inter">
      <div className="container">
        <div className="row justify-content-md-center align-items-center justify-content-between">
          <div className=" col-xl-3 col-lg-3 col-md-8 col-12">
            <div className="row flex-column gap-8 text-md-center order-lg-first order-md-first mt-lg-5 mt-5 order-sm-last order-last">
              <div className="pera fs-18  text-light-gray text-lg-start mt-sm-5">
                <span className="fw-bold text-white">SAMRIDDH KENDRA</span> is
                an early stage Fi Tech player working in the field of Finance
                and technology to bridge the gap between rural customers and
                Finance Institutions
              </div>
              <div className="social-media-icons d-flex align-items-center  gap-5  justify-content-sm-center justify-content-center">
                <img src="./instagram.webp" className="img-fluid" alt="" />
                <img src="./linkedin.webp" className="img-fluid" alt="" />
                <img src="./telephone.webp" className="img-fluid" alt="" />
                <img src="./mail.webp" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className=" col-md-12 col-lg-9 col-12 order-lg-last  order-sm-first order-first ">
            <div className="d-flex flex-sm-wrap flex-wrap justify-content-sm-center justify-content-center gap-5  gap-3">
              <div className="col-lg-2 col-md-3 col-sm-3 col-5">
                <h1 className="footer-heading">Platform</h1>
                <ul className="list-unstyled">
                  <li className="mt-4">
                    <Link to={"/"}>
                      <a href="/" className="text-white">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link to={"contact"}>
                      <a className="text-white">Get in touch</a>
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link to={"/about"}>
                      <a href="#faq" className="text-white">
                        How it Works
                      </a>
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link to={"/become_our_partner"}>
                      <a href="#" className="text-white">
                        FAQ
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-3 col-5 ">
                <h1 className="footer-heading">About</h1>
                <ul className="list-unstyled">
                  <li className="mt-4">
                    <Link to={"about"}>
                      <a href="#" className="text-white">
                        About Us
                      </a>
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link to={"career"}>
                      <a
                        href="#"
                        className="text-white d-flex flex-column align-items-start
                  "
                      >
                        Careers{" "}
                        <button className="highlight fs-4">Hiring now</button>
                      </a>
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link to={"/blogs"}>
                      <a href="#" className="text-white">
                        Blog
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-3 col-5">
                <h1 className="footer-heading">Information</h1>
                <ul className="list-unstyled">
                  <li className="mt-4">
                    <Link to={"/privacy_policy"}>
                      <a href="#" className="text-white">
                        Privacy Policy
                      </a>
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link to={"/terms_of_use"}>
                      <a href="" className="text-white">
                        Terms of Use
                      </a>
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link to={"/refund_policy"}>
                      <a href="" className="text-white">
                        Refund Policy
                      </a>
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link to={"/grievance_officer"}>
                      <a href="" className="text-white">
                        Grievance officer
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className=" col-lg-2 col-md-3 col-sm-3 col-5">
                <h1 className="footer-heading">Tools</h1>
                <ul className="list-unstyled">
                  <li className="mt-4">
                    <Link to={"/products/Calculate_EMI_Interest"}>
                      <a href="#" className="text-white">
                        Loan Calculator
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
