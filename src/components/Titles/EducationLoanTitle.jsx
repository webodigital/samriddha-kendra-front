import React from "react";

const EducationLoanTitle = ({
  title,
  color,
  cusColor,
  fontSize,
  ratings,
  pera,
  txtCenter,
  pera2,
}) => {
  return (
    <div className={`container w-100 ${txtCenter} my-7`}>
      <h1
        className={`${fontSize} fw-bolder font-inter ${
          color === "black"
            ? "text-dark"
            : color === "white"
            ? "text-white"
            : cusColor
        }`}
      >
        {title}
      </h1>
      <div
        className={`d-flex align-items-center  ${
          pera2 ? "flex-column" : ""
        } gap-4 mt-3`}
      >
        <p
          className={`fs-18 font-inter ${txtCenter} w-100  ${
            color === "black" ? "text-dark" : "text-white"
          } fw-medium mt-3`}
        >
          {pera}
        </p>{" "}
        <p className="fs-16 font-inter fw-medium mt-3">{pera2}</p>{" "}
        {ratings ? (
          <span className="fs-18 fw-bold text-dark font-inter">
            <img src="/Rating 1.png" alt="" /> 4.7 (3246)
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default EducationLoanTitle;
