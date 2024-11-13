import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { CALCULATE_LOAN } from "../../queries/CalculateLoanQuery";
import LoanAmountCalculator from "../Cards/LoanAmountCalculator";
import DonutChart from "../DataCharts/DonutChart";
import AmountCal from "../Cards/AmountCal";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(15);
  const [calculateLoan, { data, loading, error }] = useMutation(CALCULATE_LOAN);

  const handleCalculate = () => {
    calculateLoan({
      variables: {
        loanAmount,
        interestRate,
        duration: loanTenure,
      },
    });
  };

  // Call handleCalculate on component mount to load default calculation
  useEffect(() => {
    handleCalculate();
  }, []);

  const renderResults = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    if (data) {
      const { monthlyEMI, amount, interestSum, capitalSum } = data.calculateLoan;
      return (
        <>
          <DonutChart label1="Principal Amount" label2="Interest Amount" value1={amount} value2={interestSum} />
          <AmountCal title="Loan EMI" amount={`${monthlyEMI.toLocaleString()}`} />
          <AmountCal title="Principal Amount" amount={`${amount.toLocaleString()}`} />
          <AmountCal title="Interest Amount" amount={`${interestSum.toLocaleString()}`} />
          <AmountCal title="Total Payable Amount" amount={`${capitalSum.toLocaleString()}`} />
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
              text="Loan Amount"
              value1="1L"
              value2="25L"
              value3="50L"
              value4="75L"
              value5="1cr"
              min={100000}
              max={10000000}
              unit="₹"
              onChange={(value) => setLoanAmount(Number(String(value).replace(/,/g, '')))} // Ensure `value` is a string
              defaultValue={5000000}
              allowDecimal={false}
            />


            <LoanAmountCalculator
              text="Interest Rate"
              value1="4%"
              value2="8%"
              value3="12%"
              value4="16%"
              value5="20%"
              min={4}
              max={20}
              unit="%"
              onChange={(value) => setInterestRate(parseFloat(value))}
              defaultValue={8.5}
              allowDecimal={true}
            />

            <LoanAmountCalculator
              text="Loan Tenure"
              value1="5Y"
              value2="10Y"
              value3="15Y"
              value4="20Y"
              value5="25Y"
              min={5}
              max={25}
              unit="Yrs"
              onChange={(value) => setLoanTenure(parseInt(value, 10))}
              defaultValue={15}
              allowDecimal={false}
            />

            <div className="float-end">
              <button onClick={handleCalculate} className="btn btn-primary btn-lg mt-3">
                Calculate EMI
              </button>
            </div>

          </div>
          <div className="col-lg-5">{renderResults()}</div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;
