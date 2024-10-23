import React, { useContext } from "react";
import ApplyBtn from "../components/Buttons/ApplyBtn";
import { useParams } from "react-router-dom";
import CreatingContext from "../context/ContexAPI";

const ApplyForJob = () => {
  const jobPosition = useParams();
  const jobTitle = jobPosition.id.replaceAll("_", " ");
  const { jobDescriptions } = useContext(CreatingContext);

  const filterJobs = jobDescriptions.filter(
    (job) => job.jobTitle.toLowerCase() === jobTitle.toLowerCase()
  );

  return (
    <div className="applyForJob">
      <section className="applyForJob_section1 mt-7 bg-dark-blue">
        <div className="container mx-3">
          <div className="bg-white p-5 shadow-lg border rounded-4 d-flex justify-content-between align-items-center gap-5">
            <div className="">
              <h2 className="fs-26 fw-medium font-inter text-capitalize">
                {filterJobs[0].jobTitle}
              </h2>
              <div className="d-flex flex-wrap gap-lg-5 gap-md-4 gap-2">
                <p className="fs-18 fw-medium font-inter text-light-gray">
                  {filterJobs[0].company}
                </p>
                <p className="fs-18 fw-medium font-inter text-light-gray">
                  • {filterJobs[0].location}
                </p>
              </div>
            </div>
            <div className="">
              <ApplyBtn
                textColor={"text-white"}
                bgColor="bg-dark-blue"
                text="Apply Now"
                arrow={false}
                arrowDark={false}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="applyForJob_section2 mt-7">
        <div className="container px-4">
          <div className="row flex-column gap-5">
            <div className="aboutUs">
              <h2 className="font-inter fw-medium fs-24">About Us</h2>
              <p className="fs-20 font-inter mt-4">{filterJobs[0].aboutUs}</p>
            </div>

            <div className="role">
              <h2 className="font-inter fw-medium fs-24">About the role</h2>

              <p className="fs-20 font-inter mt-4">
                {filterJobs[0].jobOverview}
              </p>
            </div>
            <div className="role">
              <h2 className="font-inter fw-medium fs-24">
                Roles and Responsibilities
              </h2>

              <ul className="mt-4">
                {filterJobs[0].keyResponsibilities.map((res, i) => (
                  <li key={i} className="fs-20 font-inter">
                    {res}
                  </li>
                ))}
              </ul>
            </div>

            <div className="role">
              <h2 className="font-inter fw-medium fs-24">
                Experience and Qualifications
              </h2>

              <ul className="mt-4">
                {filterJobs[0].qualifications.map((qul, i) => (
                  <li key={i} className="fs-20 font-inter">
                    {qul}
                  </li>
                ))}
              </ul>
            </div>

            <div className="aboutUs">
              <h2 className="font-inter fw-medium fs-24">Why Join Us</h2>
              <ul className="mt-4">
                {filterJobs[0].whyJoinUs.map((qul, i) => (
                  <li key={i} className="fs-20 font-inter">
                    {qul}
                  </li>
                ))}
              </ul>
            </div>

            <div className="button d-flex gap-4 align-items-center my-3">
              <ApplyBtn
                textColor={"text-white"}
                bgColor="bg-dark-blue"
                text="Apply Now"
                arrow={false}
                arrowDark={false}
              />
              <ApplyBtn
                textColor={"text-dark"}
                bgColor="bg-white border border-3"
                text="Go Back"
                arrow={false}
                arrowDark={false}
                url={"/career"}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyForJob;
