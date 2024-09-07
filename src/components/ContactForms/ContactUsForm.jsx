import React from "react";
import ApplyBtn from "./../Buttons/ApplyBtn";

const ContactUsForm = () => {
  return (
    <div className="about_section_7 my-10">
      <div className="container">
        <div className="form-container rounded-4">
          <header className="col-12">
            <h1 className="text-white font-inter">Get in Touch</h1>
            <p className="mt-3 mb-5 fs-3 text-medium-gray font-inter">
              Please call or text us, and our team will get in touch with you as
              soon as possible to assist you.
            </p>
          </header>

          <div className="d-flex mt-4 align-items-center">
            <form className=" col-lg-5 col-md-6 col-12">
              <div className="mb-3">
                <input
                  type="text"
                  className="rounded-lg-2 rounded-md-3 rounded-sm-4 form-control fs-2 font-inter p-4"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="rounded-lg-2 rounded-md-3 rounded-sm-4 form-control fs-2 font-inter p-4"
                  id="exampleFormControlInput1"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="rounded-lg-2 rounded-md-3 rounded-sm-4 form-control fs-2 font-inter p-4"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="rounded-lg-2 rounded-md-3 rounded-sm-4 form-control fs-2 font-inter p-4"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enquiry"
                ></textarea>
              </div>

              <ApplyBtn
                textColor="text-white"
                bgColor={"bg-primary"}
                text="Submit"
                width={"w-100"}
                arrow={false}
                arrowDark={false}
              />
            </form>

            <div className="col-lg-7 col-md-6 col-12">
              <div className="imageContainer d-lg-flex d-md-flex flex-column align-items-center d-sm-none d-none">
                <img className="img-fluid" src="./ContactImg.png" alt="" />

                <div className="number">
                  <p className="fs-2 text-medium-gray font-inter">
                    CONTACT INFO
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <img
                      style={{ width: "20px" }}
                      src="./callIcon.png"
                      alt=""
                    />
                    <p className="text-white fw-semibold fs-20 font-inter">
                      +91 8758493204
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;