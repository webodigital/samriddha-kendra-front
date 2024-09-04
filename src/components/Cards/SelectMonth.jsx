import React, { useState } from "react";

const MonthDropdown = ({ title }) => {
  const [selectedMonthNumber, setSelectedMonthNumber] = useState("");

  const handleMonthChange = (event) => {
    const monthNumber = event.target.value;
    setSelectedMonthNumber(monthNumber);
  };

  const handleInputChange = (event) => {
    const inputNumber = event.target.value;

    if (inputNumber === "" || (inputNumber >= 1 && inputNumber <= 12)) {
      setSelectedMonthNumber(inputNumber);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-4 bg-white mt-3 px-5 rounded-4">
        <p className="text-light-blue fs-18 font-inter fw-medium">{title}</p>
        <div className="month-container">
          <select
            className="month-dropdown text-white fs-20 fw-medium font-inter rounded-4"
            onChange={handleMonthChange}
            value={selectedMonthNumber}
          >
            <option value="">Months</option>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">Aug</option>
            <option value="9">Sept</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
          <input
            type="text"
            className="month-input fs-20 fw-semibold font-inter "
            value={selectedMonthNumber}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
};

export default MonthDropdown;
