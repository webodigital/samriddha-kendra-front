import React from "react";

const ProductsTitles = ({ text }) => {
  return (
    <div className="header">
      <h1 className="font-inter fw-bold fs-68 text-dark-blue">{text}</h1>
    </div>
  );
};

export default ProductsTitles;
