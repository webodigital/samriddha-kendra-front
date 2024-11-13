import React, { useState, useEffect } from "react";
import "./LoanAmountCalculator.css"; // Import the CSS for styling

// Define formatValueWithCommas before using it
const formatValueWithCommas = (value) => {
  return value ? parseFloat(value).toLocaleString("en-IN") : "";
};

const LoanAmountCalculator = ({
  text,
  value1,
  value2,
  value3,
  value4,
  value5,
  min,
  max,
  unit,
  onChange,
  defaultValue,
  allowDecimal = false,
}) => {
  const [rangeValue, setRangeValue] = useState(defaultValue || min);
  const [inputValue, setInputValue] = useState(
    formatValueWithCommas(defaultValue || min)
  );

  useEffect(() => {
    if (defaultValue !== undefined) {
      setRangeValue(defaultValue);
      setInputValue(formatValueWithCommas(defaultValue));
    }
  }, [defaultValue]);

  // Safely parse value to handle commas
  const parseValue = (value) => {
    if (typeof value === "string") {
      return parseFloat(value.replace(/,/g, ""));
    }
    return value;
  };

  const selectRange = (e) => {
    const value = parseFloat(e.target.value);
    setRangeValue(value);
    setInputValue(formatValueWithCommas(value));
    onChange(value);
  };

  const handleInputChange = (e) => {
    let rawValue = e.target.value;

    if (allowDecimal) {
      rawValue = rawValue.replace(/[^\d.]/g, ""); // Allow only numbers and decimal
      if (/^\d+(\.\d{0,1})?$/.test(rawValue)) {
        setInputValue(rawValue);
      }
    } else {
      rawValue = rawValue.replace(/\D/g, ""); // Allow only numbers
      if (/^\d*$/.test(rawValue)) {
        setInputValue(formatValueWithCommas(rawValue));
      }
    }
  };

  const handleBlur = () => {
    let numericValue = parseValue(inputValue);

    if (!isNaN(numericValue)) {
      if (numericValue < min) {
        numericValue = min;
      } else if (numericValue > max) {
        numericValue = max;
      } else if (allowDecimal) {
        numericValue = Math.round(numericValue * 100) / 100;
      } else {
        numericValue = Math.round(numericValue);
      }
    } else {
      numericValue = rangeValue;
    }

    setRangeValue(numericValue);
    setInputValue(formatValueWithCommas(numericValue));
    onChange(numericValue);
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
        <div className="input-wrapper">
          {unit === "₹" && <span className="unit-left">₹</span>}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className="inputAmount font-inter fs-20 fw-medium rounded-4"
          />
          {unit !== "₹" && <span className="unit-right">{unit}</span>}
        </div>
      </div>
      <div className="bottom-container mt-5 px-4">
        <input
          type="range"
          className="w-100 rangeInput"
          onChange={selectRange}
          value={rangeValue}
          min={min}
          max={max}
          step={allowDecimal ? 0.1 : 1}
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
