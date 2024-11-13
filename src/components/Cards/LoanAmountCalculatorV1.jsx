import React, { useState } from "react";

const LoanAmountCalculator = ({
  text,
  value1,
  value2,
  value3,
  value4,
  value5,
  min,
  max,
  unit, // New prop to handle units like ₹, %, Yrs
}) => {
  const [rangeValue, setRangeValue] = useState(min);

  const selectRange = (e) => {
    const value = e.target.value;
    setRangeValue(value);
  };

  const calculateGradientPercentage = () => {
    const percentage = ((rangeValue - min) / (max - min)) * 100;
    return percentage;
  };

  const gradientStyle = {
    background: `linear-gradient(90deg, #3d4cd8 ${calculateGradientPercentage()}%, transparent ${calculateGradientPercentage()}%)`,
  };

  return (
    <div className="loanCalculator rounded-4 mt-3">
      <div className="top-container d-flex justify-content-between">
        <p className="fs-20 fw-semibold text-light-gray font-inter">{text}</p>
        <input
          type="text"
          value={`${
            unit === "₹" ? `${unit} ${rangeValue}` : `${rangeValue} ${unit}`
          } `}
          onChange={(e) => selectRange(e)}
          className="inputAmount font-inter fs-20 fw-medium rounded-4"
        />
      </div>
      <div className="bottom-container mt-5 px-4">
        <input
          type="range"
          className="w-100 rangeInput"
          onChange={(e) => selectRange(e)}
          value={rangeValue}
          min={min}
          max={max}
          style={gradientStyle}
        />
        <div className="d-flex justify-content-between font-inter fs-16 fw-medium px-2 mt-2 text-light-gray">
          <p>{value1}</p>
          <p>{value2}</p>
          <p>{value3}</p>
          <p>{value4}</p>
          <p>{value5}</p>
        </div>
      </div>
    </div>
  );
};

export default LoanAmountCalculator;
