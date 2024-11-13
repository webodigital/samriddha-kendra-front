import React, { useState } from "react";
import ProductsTitles from "../Titles/ProductsTitles";
import LoanAmountCalculator from "../Cards/LoanAmountCalculator";
import DonutChart from "../DataCharts/DonutChart";
import AmountCal from "../Cards/AmountCal";
import MonthDropdown from "../Cards/SelectMonth";

const BalanceTransferCalculator = () => {
  // Define state variables for inputs
  const [loanAmount, setLoanAmount] = useState(1000000); // default loan amount 1L
  const [loanTenure, setLoanTenure] = useState(12); // default tenure in months
  const [currentInterestRate, setCurrentInterestRate] = useState(8); // default interest rate
  const [newInterestRate, setNewInterestRate] = useState(6); // default new interest rate
  const [emiPaid, setEmiPaid] = useState(6); // months of EMI already paid

  // Function to calculate EMI
  const calculateEMI = (loan, rate, tenure) => {
    const interestRate = rate / 1200; // Monthly interest rate
    const emi =
      (loan * interestRate) /
      (1 - Math.pow(1 + interestRate, -tenure)); // EMI formula
    return emi;
  };

  // Function to calculate total savings
  const calculateSavings = (currentEMI, newEMI) => {
    const monthlySavings = currentEMI - newEMI;
    const totalSavings = monthlySavings * loanTenure;
    return { monthlySavings, totalSavings };
  };

  // Calculate current EMI and new EMI
  const currentEMI = calculateEMI(loanAmount, currentInterestRate, loanTenure);
  const newEMI = calculateEMI(loanAmount, newInterestRate, loanTenure);

  // Calculate savings
  const { monthlySavings, totalSavings } = calculateSavings(currentEMI, newEMI);

  return (
    <section className="productDetailedSection_5 my-10">
      <div className="container">
        <ProductsTitles text={"Balance transfer calculator"} />
        <p className="mt-11 fs-20 font-inter">
          Transfer your outstanding loan amount from one lender to another, at
          a lower rate of interest. Calculate your new EMI for different
          interests rates, loan amounts and tenures, using Samriddh’s balance
          transfer calculator.
        </p>

        <div className="row mt-5">
          <div className="col-lg-6">
            <h2 className="fs-20 font-inter fw-bold">How To Use</h2>
            <ul className="fs-20 font-inter fw-medium mt-5">
              <li>Current outstanding loan amount (in rupees)</li>
              <li>Current rate of interest (in percentage)</li>
              <li>Loan tenure (in months)</li>
              <li>EMI paid (in months)</li>
              <li>New rate of interest (in percentage)</li>
            </ul>
          </div>
        </div>

        <section className="productDetailedSection_4 mt-11">
          <div className="container emiCalculator rounded-4">
            <h2 className="fw-semibold font-inter fs-25 text-white">
              Calculate EMI, Interest amount
            </h2>

            <div className="row mt-5">
              <div className="col-lg-6">
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
                  onChange={(e) => setLoanAmount(e.target.value)}
                />
                <MonthDropdown title={"Loan Tenure"} onChange={(e) => setLoanTenure(e.target.value)} />
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
                  onChange={(e) => setLoanAmount(e.target.value)}
                />
                <DonutChart label1={"Monthly EMI saved"} label2={"New EMI"} value1={monthlySavings} value2={newEMI} />
              </div>
              <div className="col-lg-6">
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
                  onChange={(e) => setCurrentInterestRate(e.target.value)}
                />
                <MonthDropdown title={"EMI Already paid"} onChange={(e) => setEmiPaid(e.target.value)} />
                <MonthDropdown title={"New Interest Rate"} onChange={(e) => setNewInterestRate(e.target.value)} />
                <AmountCal title={"New EMI"} amount={newEMI.toFixed(2)} />
                <AmountCal title={"Current EMI"} amount={currentEMI.toFixed(2)} />
                <AmountCal title={"Monthly EMI saved"} amount={monthlySavings.toFixed(2)} />
                <AmountCal title={"Total saving"} amount={totalSavings.toFixed(2)} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default BalanceTransferCalculator;
