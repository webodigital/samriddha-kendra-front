import React from "react";

const ApplyBtn = ({
  textColor,
  bgColor,
  text,
  arrow,
  arrowDark,
  width,
  fs,
  fw,
}) => {
  return (
    <button
      className={`btn apply-button rounded-4 text-center ${width}  ${
        fs ? fs : "fs-18"
      } ${
        fw ? fw : "fw-semibold"
      } py-2 px-4 font-inter  border-none d-flex align-items-center ${textColor} ${bgColor} `}
    >
      <span className="me-3 text-center w-100">{text}</span>
      {arrow ? (
        <img
          className="img-fluid"
          src={`${arrowDark ? "/arrowDark.png" : "/rightArrow.png"}`}
          alt=""
        />
      ) : (
        ""
      )}
    </button>
  );
};

export default ApplyBtn;
