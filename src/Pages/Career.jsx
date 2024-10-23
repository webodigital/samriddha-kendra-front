import React from "react";
import ProductsTitles from "../components/Titles/ProductsTitles";
import ApplyBtn from "../components/Buttons/ApplyBtn";
import { Link, Outlet, useLocation } from "react-router-dom";

const Career = () => {
  const location = useLocation();

  const isBaseRoute = location.pathname === "/career/apply";

  return (
    <div className="career">
      {isBaseRoute ? (
        <Outlet />
      ) : (
        <>
          <section className="career_section1 bg-dark-blue mt-5">
            <div className="container h-100">
              <div className="row h-100 flex-column align-items-center text-center px-4">
                <h1 className="text-white mt-15 fs-55 fw-semibold title-font">
                  We are a small team that{" "}
                  <span className="text-warning">thinks big</span>
                </h1>

                <p className="fs-36 font-zilla text-secondary">
                  Join us to build this future together
                </p>

                <button className="btn mt-5 rounded fs-20 bg-primary">
                  <img src="./dropdown arrow.png" alt="" />
                </button>
              </div>
            </div>
          </section>

          <section className="career_section2">
            <div className="container p-66 rounded-4">
              <div className="row">
                <div className="col-lg-3 col-md-12 col-12">
                  <div className="card bg-dark-blue position-relative m-lg-3 m-md-5 m-6  p-5 rounded-4">
                    <div className="img-container">
                      <img
                        src="./Competitive salaries and perks.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <h2 className="font-inter fw-semibold mt-lg-5 mt-md-5 mt-7 fs-20 text-white">
                      Competitive salaries and perks
                    </h2>
                    <p className="fs-16 font-inter text-light-gray mt-4">
                      We offer fair compensation along with ESOPs and other
                      perks
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12 col-12">
                  <div className="card bg-dark-blue position-relative m-lg-3 m-md-5 m-6  p-5 rounded-4">
                    <div className="img-container">
                      <img
                        src="./Work friendly environment.png"
                        alt=""
                        className="img-fluid ps-lg-2 ps-md-3 ps-3"
                      />
                    </div>
                    <h2 className="font-inter fw-semibold mt-lg-5 mt-md-5 mt-7 fs-20 text-white">
                      Work friendly environment
                    </h2>
                    <p className="fs-16 font-inter text-light-gray mt-4">
                      With the relaxed and friendly atmosphere at our workplace,
                      productivity shoots up to the next level.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12 col-12">
                  <div className="card bg-dark-blue position-relative m-lg-3 m-md-5 m-6  p-5 rounded-4">
                    <div className="img-container">
                      <img
                        src="./Learning exposure.png"
                        alt=""
                        className="img-fluid ps-lg-2 ps-md-3 ps-3"
                      />
                    </div>
                    <h2 className="font-inter fw-semibold mt-lg-5 mt-md-5 mt-7 fs-20 text-white">
                      Learning exposure
                    </h2>
                    <p className="fs-16 font-inter text-light-gray mt-4">
                      Excited to learn more?We encourage the team to learn new
                      skills everyday.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12 col-12">
                  <div className="card bg-dark-blue position-relative m-lg-3 m-md-5 m-6  p-5 rounded-4">
                    <div className="img-container">
                      <img
                        src="./Work with founders.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <h2 className="font-inter fw-semibold mt-lg-5 mt-md-5 mt-7 fs-20 text-white">
                      Work with founders
                    </h2>
                    <p className="fs-16 font-inter text-light-gray mt-4">
                      Work directly with our co-founders and get mentored by our
                      pool of industry experts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="career_section3 mt-15 px-lg-0 px-md-0 px-sm-0 px-4">
            <div className="container">
              <h1 className="font-inter fw-bold fs-32 text-dark">OPENINGS</h1>

              <div className="d-flex justify-content-between align-items-center mt-7 flex-wrap">
                <h2 className="fs-26 font-inter fw-bold">
                  Careers at Samriddh Kendra
                </h2>
                <div className="searchContainer d-flex gap-3 rounded-4">
                  <img className="img-fluid mx-2" src="./search2.png" alt="" />
                  <input
                    type="text"
                    className="border-none w-100 fs-20 font-inter px-4"
                    placeholder="Search"
                  />
                </div>
              </div>

              {/* <form className="row g-3 mt-7">
                <div className="col-md-6">
                  <label className="form-label fs-20 font-inter">
                    Department
                  </label>
                  <select
                    className="form-select bg-transparent p-4 rounded-4 fs-20 font-inter text-light-gray"
                    aria-label="Disabled select example"
                  >
                    <option selected>Select department</option>
                    <option value="1">Associate Growth Manager</option>
                    <option value="2">HR</option>
                    <option value="3">Relationship Manager</option>
                    <option value="3">Recruiters </option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label fs-20 font-inter">
                    Location
                  </label>
                  <select
                    className="form-select bg-transparent p-4 rounded-4 fs-20 font-inter text-light-gray"
                    aria-label="Disabled select example"
                  >
                    <option selected>Select location</option>
                    <option value="1">Bengaluru</option>
                    <option value="2">Delhi</option>
                    <option value="3">Hyderabad</option>
                  </select>
                </div>
              </form> */}

              <div className="outputContainer d-flex flex-column gap-4 mt-5">
                <div className="bg-white p-5 shadow-lg border rounded-4 d-flex justify-content-between align-items-center gap-5">
                  <div className="">
                    <h2 className="fs-26 fw-medium font-inter">
                      Associate Growth Manager
                    </h2>
                    <div className="d-flex flex-wrap gap-lg-5 gap-md-4 gap-2">
                      <p className="fs-18 fw-medium font-inter text-light-gray">
                        Growth and Strategy
                      </p>
                      <p className="fs-18 fw-medium font-inter text-light-gray">
                        • Bengaluru, India
                      </p>
                      <p className="fs-18 fw-medium font-inter text-light-gray">
                        • 1-3 years
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <Link to="/career/apply">
                      <ApplyBtn
                        textColor={"text-white"}
                        bgColor="bg-dark-blue"
                        text="View Details"
                        arrow={false}
                        arrowDark={false}
                        width=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="bg-white p-5 shadow-lg border rounded-4 d-flex justify-content-between align-items-center gap-5">
                  <div className="">
                    <h2 className="fs-26 fw-medium font-inter">
                      Relationship Manager
                    </h2>
                    <div className="d-flex flex-wrap gap-lg-5 gap-md-4 gap-2">
                      <p className="fs-18 fw-medium font-inter text-light-gray">
                        Growth and Strategy
                      </p>
                      <p className="fs-18 fw-medium font-inter text-light-gray">
                        • Bengaluru, India
                      </p>
                      <p className="fs-18 fw-medium font-inter text-light-gray">
                        • 1-3 years
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <Link to="/career/apply">
                      <ApplyBtn
                        textColor={"text-white"}
                        bgColor="bg-dark-blue"
                        text="View Details"
                        arrow={false}
                        arrowDark={false}
                        width=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="bg-white p-5 shadow-lg border rounded-4 d-flex justify-content-between align-items-center gap-5">
                  <div className="">
                    <h2 className="fs-26 fw-medium font-inter">HR</h2>
                    <div className="d-flex flex-wrap gap-lg-5 gap-md-4 gap-2">
                      <p className="fs-18 fw-medium font-inter text-light-gray">
                        Growth and Strategy
                      </p>
                      <p className="fs-18 fw-medium font-inter text-light-gray">
                        • Bengaluru, India
                      </p>
                      <p className="fs-18 fw-medium font-inter text-light-gray">
                        • 1-3 years
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <Link to="/career/apply">
                      <ApplyBtn
                        textColor={"text-white"}
                        bgColor="bg-dark-blue"
                        text="View Details"
                        arrow={false}
                        arrowDark={false}
                        width=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="bg-white p-5 shadow-lg border rounded-4 d-flex justify-content-between align-items-center gap-5">
                  <div className="">
                    <h2 className="fs-26 fw-medium font-inter">Recruiters</h2>
                    <div className="d-flex flex-wrap gap-lg-5 gap-md-4 gap-2">
                      <p className="fs-18 fw-medium font-inter text-light-gray">
                        Growth and Strategy
                      </p>
                      <p className="fs-18 fw-medium font-inter text-light-gray">
                        • Bengaluru, India
                      </p>
                      <p className="fs-18 fw-medium font-inter text-light-gray">
                        • 1-3 years
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <ApplyBtn
                      textColor={"text-white"}
                      bgColor="bg-dark-blue"
                      text="View Details"
                      arrow={false}
                      arrowDark={false}
                      width=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Career;
