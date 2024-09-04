import React from "react";

const AmountCal = ({ title, amount }) => {
  return (
    <div className="d-flex justify-content-between align-items-center p-4 bg-white mt-3 px-5 rounded-4">
      <p className="text-light-blue fs-18 font-inter fw-medium">{title}</p>
      <p className="font-inter fw-semibold fs-20">₹{amount}</p>
    </div>
  );
};

export default AmountCal;
