import React from "react";
import { Link } from "react-router-dom";
import ApplyBtn from "../components/Buttons/ApplyBtn";

const ApplyForJob = () => {
  return (
    <div className="applyForJob">
      <section className="applyForJob_section1 mt-7 bg-dark-blue">
        <div className="container mx-3">
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
              <Link to="/apply">
                <ApplyBtn
                  textColor={"text-white"}
                  bgColor="bg-dark-blue"
                  text="Apply"
                  arrow={false}
                  arrowDark={false}
                  width=""
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="applyForJob_section2 mt-7">
        <div className="container px-4">
          <div className="row flex-column gap-5">
            <div className="aboutUs">
              <h2 className="font-inter fw-medium fs-24">About Us</h2>
              <p className="fs-20 font-inter mt-5">
                The Jar app is a habit-building micro-savings platform that
                helps users save fixed amounts from as little as ₹10 in 24K
                digital gold. Our users also have the option to convert these
                savings to cash or physical gold at their convenience. Jar also
                effortlessly facilitates investments by enabling users to save
                while they spend, utilizing our round-off method, like a digital
                piggy bank.
              </p>
              <p className="fs-20 font-inter mt-5">
                Founded by Misbah Ashraf, former founder of community-focused
                e-commerce platform Marsplay, and Nishchay AG, former director
                and founding member at mobility start-up Bounce, Jar's
                unwavering mission is to shatter psychological barriers to
                saving and investing, thus spearheading the Financial Fitness
                revolution for Bharat.
              </p>
              <p className="fs-20 font-inter mt-5">
                At Jar, we believe that savings are just the beginning for our
                customers. We want to walk alongside them through every step of
                their financial journey, which is why we have now expanded our
                offerings to meet those needs.
              </p>
            </div>

            <div className="role">
              <h2 className="font-inter fw-medium fs-24">About the role</h2>

              <ul className="mt-5">
                <li className="fs-20 font-inter">
                  You will model data in order to create reporting
                  infrastructure/dashboards for business process management
                </li>
                <li className="fs-20 font-inter">
                  You will be closely working with the business/product teams to
                  enable data-driven decision-making.
                </li>
                <li className="fs-20 font-inter">
                  You will drive data-driven decision-making through the
                  stakeholders
                </li>
              </ul>
            </div>
            <div className="role">
              <h2 className="font-inter fw-medium fs-24">
                Roles and Responsibilities
              </h2>

              <ul className="mt-5">
                <li className="fs-20 font-inter">
                  You will model data in order to create reporting
                  infrastructure/dashboards for business process management
                </li>
                <li className="fs-20 font-inter">
                  You will be closely working with the business/product teams to
                  enable data-driven decision-making.
                </li>
                <li className="fs-20 font-inter">
                  You will drive data-driven decision-making through the
                  stakeholders
                </li>
                <li className="fs-20 font-inter">
                  You will drive the team to adopt new and innovative ways of
                  solving business problems
                </li>
                <li className="fs-20 font-inter">
                  Drive product strategy and execute the prioritized roadmap for
                  your stream
                </li>
                <li className="fs-20 font-inter">
                  Lead a cross-functional team, partnering with engineering,
                  data, design, and other teams to ship major features and
                  product improvements driving efficiency
                </li>
                <li className="fs-20 font-inter">
                  You will influence new opportunities for business based on
                  internal/external data
                </li>
                <li className="fs-20 font-inter">
                  Define, track, and report on the key product, business, and
                  customer metrics
                </li>
              </ul>
            </div>

            <div className="role">
              <h2 className="font-inter fw-medium fs-24">
                Experience and Qualifications
              </h2>

              <ul className="mt-5">
                <li className="fs-20 font-inter">
                  You will model data in order to create reporting
                  infrastructure/dashboards for business process management
                </li>
                <li className="fs-20 font-inter">
                  You will be closely working with the business/product teams to
                  enable data-driven decision-making.
                </li>
                <li className="fs-20 font-inter">
                  You will drive data-driven decision-making through the
                  stakeholders
                </li>
                <li className="fs-20 font-inter">
                  You will drive the team to adopt new and innovative ways of
                  solving business problems
                </li>
                <li className="fs-20 font-inter">
                  Drive product strategy and execute the prioritized roadmap for
                  your stream
                </li>
                <li className="fs-20 font-inter">
                  Lead a cross-functional team, partnering with engineering,
                  data, design, and other teams to ship major features and
                  product improvements driving efficiency
                </li>
                <li className="fs-20 font-inter">
                  You will influence new opportunities for business based on
                  internal/external data
                </li>
                <li className="fs-20 font-inter">
                  Define, track, and report on the key product, business, and
                  customer metrics
                </li>
              </ul>
            </div>

            <div className="aboutUs">
              <h2 className="font-inter fw-medium fs-24">
                Additional Information
              </h2>
              <p className="fs-20 font-inter mt-5">
                Jar is a diverse and inclusive workplace that embraces the ideas
                and perspectives of all employees, and recognises their efforts
                and contributions regardless of ethnicity. Our workspace also
                boasts a great blend of youth and experience, which helps us
                maintain a transparent culture with no micromanagement. We also
                have flexible working hours, and provide medical insurance to
                all employees.
              </p>
            </div>

            <div className="button mt-7">
              <ApplyBtn
                textColor={"text-white"}
                bgColor="bg-dark-blue"
                text="Apply"
                arrow={false}
                arrowDark={false}
                fs={"fs-24"}
                width="w-15"
                fw={"fs-medium"}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyForJob;
