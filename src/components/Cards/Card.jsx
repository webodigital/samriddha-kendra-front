import React from "react";

const Card = ({ title, description, steps, image }) => {
  return (
    <div>
      <div
        data-aos="flip-left"
        className="custom-card position-relative round-3 d-flex flex-column align-items-center justify-content-between"
      >
        <div className="top-container text-center d-flex flex-column gap-3 align-items-center">
          <img src={image} className="icon img-fluid" alt="" />
          <h2 className="card-title  mb-3 font-inter fw-semibold fs-24">
            {title}
          </h2>
          <p className="card-text fs-18 ">{description}</p>
        </div>

        <div className="steps-container text-center d-flex flex-column align-items-center">
          <p className="fs-18 fw-bold font-inter">STEP</p>
          <div className="steps fw-semibold fs-24 pb-1">{steps}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
