import React, { useState } from "react";
import ApplyBtn from "./../Buttons/ApplyBtn";
import LoadingOverlay from './../LoadingSpinners/LoadingOverlay'; 

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiry: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    /* const mutation = `
      mutation sendContact($name: String!, $phone: String!, $email: String!, $enquiry: String!) {
        sendContact(name: $name, phone: $phone, email: $email, enquiry: $enquiry) {
          success
          message
        }
      }
    `; */
    const mutation = `
      mutation sendContact($name: String!, $phone: String!, $email: String!, $enquiry: String!) {
        sendContact(name: $name, phone: $phone, email: $email, enquiry: $enquiry)
      }
    `;

    const variables = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      enquiry: formData.enquiry,
    };
    const YOUR_GRAPHQL_API_URL = "http://localhost:5000/graphql";
    try {
      const response = await fetch(YOUR_GRAPHQL_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add authorization headers here if needed
        },
        body: JSON.stringify({
          query: mutation,
          variables: variables,
        }),
        //referrerPolicy: 'no-referrer-when-downgrade' // or 'no-referrer' if needed
      });

      const result = await response.json();

      /* if (result.data?.submitContactForm?.success) {
        setMessage("Form submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          enquiry: "",
        });
      } else {
        setMessage(result.data?.submitContactForm?.message || "Submission failed. Please try again.");
      } */

      // Assuming the mutation returns a success message as a string
      if (result.data?.sendContact) {
        setMessage(result.data.sendContact); // The string message from the server
        setFormData({
          name: "",
          phone: "",
          email: "",
          enquiry: "",
        });
        // Clear the message after 5 seconds (5000 milliseconds)
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        
      } else {
        setMessage("Submission failed. Please try again.");
      }

    } catch (error) {
      setMessage("Error submitting the form. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div data-aos={"zoom-in"} className="about_section_7 my-10">
      <div className="container">
        {loading && <LoadingOverlay />} {/* Show loading overlay when loading is true */}
        
        <div className="form-container rounded-4">
          <header className="col-12">
            <h1 className="text-white font-inter">Get in Touch</h1>
            <p className="mt-3 mb-5 fs-3 text-medium-gray font-inter">
              Please call or text us, and our team will get in touch with you as
              soon as possible to assist you.
            </p>
          </header>

          <div className="row mt-11">
            <form className="col-lg-5 col-md-12 col-12" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-lg-2 rounded-md-3 rounded-sm-4 form-control fs-2 font-inter p-4"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <input
                  required
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="rounded-lg-2 rounded-md-3 rounded-sm-4 form-control fs-2 font-inter p-4"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-3">
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-lg-2 rounded-md-3 rounded-sm-4 form-control fs-2 font-inter p-4"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                  className="rounded-lg-2 rounded-md-3 rounded-sm-4 form-control fs-2 font-inter p-4"
                  rows="5"
                  placeholder="Enquiry"
                ></textarea>
              </div>

              {loading ? (
                <div className="text-white fs-3">Submitting...</div>
              ) : (
                <button type="submit" className="btn apply-button rounded-4 text-center w-100 py-2 px-4 font-inter  border-none d-flex align-items-center text-white bg-primary me-3 text-center w-100">Submit</button>
              )}

              {message && (
                <div className={`mt-3 fs-3 ${message.includes("successfully") ? "text-success" : "text-danger"}`}>
                  {message}
                </div>
              )}
            </form>

            <div className="col-lg-7 col-md-12 col-12">
              <div className="imageContainer d-lg-flex d-md-flex flex-column justify-content-center align-items-center mt-lg-0 mt-md-5 mt-11">
                <div className="w-80">
                  <img className="img-fluid" src="./Contact UsImg.webp" alt="Contact Us" />
                </div>

                <div className="number mt-5">
                  <p className="fs-2 text-medium-gray text-center fw-medium font-inter">CONTACT INFO</p>
                  <div className="d-flex flex-wrap justify-content-center gap-5">
                    <div className="d-flex align-items-center gap-3">
                      <img style={{ width: "20px" }} src="/mail.svg" alt="Mail" />
                      <a href="mailto:support@samriddhkedra.in" className="text-white mt-3 fw-semibold fs-20 font-inter">
                        support@samriddhkedra.in
                      </a>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <img style={{ width: "20px" }} src="./callIcon.png" alt="Call" />
                      <a href="tel:+918758493204" className="text-white fw-semibold fs-20 font-inter">
                        +91 8758493204
                      </a>
                    </div>
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
