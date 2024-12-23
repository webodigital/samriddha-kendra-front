import React from "react";
import { Link } from "react-router-dom";

const ApplyBtn = ({
  textColor,
  bgColor,
  text,
  arrow,
  arrowDark,
  width,
  fs,
  fw,
  url,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Link
      to={url}
      className={`btn apply-button rounded-4 text-center ${
        !url && "coming"
      } ${width}  ${fs ? fs : "fs-18"} ${
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
    </Link>
  );
};

export default ApplyBtn;
