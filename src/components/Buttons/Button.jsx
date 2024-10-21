import React from "react";
import { Link } from "react-router-dom";

const Button = ({ content }) => {
  return (
    <Link to={"/become_our_partner"}>
      <button className="btn fs-3 fw-bold text-dark cus-btn font-poppins rounded-0">
        {content}
        <span className="mx-3 ">
          <img
            className={`${
              content === "Download application" ? "move-bottom" : "move-right"
            }`}
            src={`${
              content === "Download application"
                ? "./download.png"
                : "./Arrow.png"
            }`}
            alt=""
          />
        </span>
      </button>
    </Link>
  );
};

export default Button;
