import React from "react";

const Title = ({ first_text, span_text, last_text }) => {
  return (
    <div className="container">
      <p className="title-font mt-7 py-2 fs-36 fw-medium text-secondary">
        {first_text} <span className="text-black fw-semibold">{span_text}</span>{" "}
        {last_text}
      </p>
    </div>
  );
};

export default Title;
