import React from "react";

import LoanAmountCalculator from "../Cards/LoanAmountCalculator";
import DonutChart from "../DataCharts/DonutChart";
import AmountCal from "../Cards/AmountCal";
//import MonthDropdown from "../Cards/SelectMonth";

const EMICalculator = () => {
  return (
    <section className="productDetailedSection_4 mt-11">
      <div className="container emiCalculator rounded-4">
        <h2 className="fw-semibold font-inter fs-25 text-white">
          Calculate EMI, Interest amount
        </h2>

        <div className="row mt-5">
          <div className="col-lg-7">
            <LoanAmountCalculator
              text={"Loan Amount"}
              value1={"1L"}
              value2={"25L"}
              value3={"50L"}
              value4={"75L"}
              value5={"1cr"}
              min={100000}
              max={10000000}
              unit={"₹"}
            />
            <LoanAmountCalculator
              text={"Interest Rate"}
              value1={"4%"}
              value2={"8%"}
              value3={"12%"}
              value4={"16%"}
              value5={"20%"}
              min={4}
              max={20}
              unit={"%"}
            />
            <LoanAmountCalculator
              text={"Loan Tenure"}
              value1={"5Y"}
              value2={"10Y"}
              value3={"15Y"}
              value4={"20Y"}
              value5={"25Y"}
              min={5}
              max={25}
              unit={"Yrs"}
            />
          </div>
          <div className="col-lg-5">
            <DonutChart label1={"Principle amount"} label2={"Interest amount"} />
            <AmountCal title={"Loan EMI"} amount={"44,986"} />
            <AmountCal title={"Principal Amount"} amount={"44,57,986"} />
            <AmountCal title={"Interest Amount"} amount={"1,07,96,711"} />
            <AmountCal title={"Total Payable amount"} amount={"1,04,56,000"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;
