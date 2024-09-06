import ContactUsForm from "../components/ContactForms/ContactUsForm";
import Button from "./../components/Buttons/Button";

const ContactUs = () => {
  return (
    <div className="contactPage">
      <div className="d-flex">
        <div className="col-6">
          <div className="img-container mt-7">
            <img
              className="img-fluid rounded-5"
              src="/SamridhdhImg.webp"
              alt=""
            />
          </div>
        </div>

        <div className="col-6">
          <div className="txt mt-15 text-center p-5">
            {" "}
            <p className="p-5 fs-24 font-inter fw-medium">
              <span className="font-inter fw-bold title-font fs-40">
                SAMRIDDH KENDRA{" "}
              </span>{" "}
              is an early stage Fi Tech player working in the field of Finance
              and technology to bridge the gap between rural customers and
              Finance Institutions. Want to create an Impact? Join Samriddh
              Kendra for building a Samriddh Bharat.
            </p>
            <div className="mt-7">
              <div className="btn-container text-center m-auto">
                <Button content={"Download application"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
