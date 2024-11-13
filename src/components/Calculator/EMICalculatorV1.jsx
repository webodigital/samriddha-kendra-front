import React, { useState } from "react";
//import { useLazyQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { CALCULATE_LOAN } from "../../queries/CalculateLoanQuery";
import LoanAmountCalculator from "../Cards/LoanAmountCalculator";
import DonutChart from "../DataCharts/DonutChart";
import AmountCal from "../Cards/AmountCal";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [duration, setDuration] = useState(15);
  //const [calculateLoan, { data, loading, error }] = useLazyQuery(CALCULATE_LOAN);
  const [calculateLoan, { data, loading, error }] = useMutation(CALCULATE_LOAN);

  const handleCalculate = () => {
    calculateLoan({ variables: { loanAmount, interestRate, duration } });
  };

  const renderResults = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    if (data) {
      const { monthlyEMI, amount, interestSum, capitalSum, sum, installments } = data.calculateLoan;
      return (
        <>
          <DonutChart label1="Principal amount" label2="Interest amount" />
          <AmountCal title="Loan EMI" amount={`₹${monthlyEMI}`} />
          <AmountCal title="Principal Amount" amount={`₹${amount}`} />
          <AmountCal title="Interest Amount" amount={`₹${interestSum}`} />
          <AmountCal title="Total Payable amount" amount={`₹${capitalSum}`} />
        </>
      );
    }
    return null;
  };

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
              onChange={setLoanAmount}
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
              onChange={setInterestRate}
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
              onChange={setDuration}
            />
            <button onClick={handleCalculate} className="btn btn-primary mt-3">
              Calculate EMI
            </button>
          </div>
          <div className="col-lg-5">
            {renderResults()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;
