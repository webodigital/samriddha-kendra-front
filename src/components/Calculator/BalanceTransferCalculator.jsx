import React, { useState, useEffect } from "react";
import ProductsTitles from "../Titles/ProductsTitles";
import LoanAmountCalculator from "../Cards/LoanAmountCalculator";
import DonutChart from "../DataCharts/DonutChart";
import AmountCal from "../Cards/AmountCal";
import MonthDropdown from "../Cards/SelectMonth";

const BalanceTransferCalculator = () => {
  // Define state variables for inputs
  const [loanAmount, setLoanAmount] = useState(5000000); // default loan amount
  const [loanTenure, setLoanTenure] = useState(25); // default tenure in months
  const [currentInterestRate, setCurrentInterestRate] = useState(8); // default interest rate
  const [newInterestRate, setNewInterestRate] = useState(8.75); // default new interest rate
  const [emiPaid, setEmiPaid] = useState(10); // months of EMI already paid

  // State variables for calculated values
  const [currentEMI, setCurrentEMI] = useState(0);
  const [newEMI, setNewEMI] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);

  // Function to calculate EMI
  const calculateEMI = (loan, rate, tenure) => {
    // Convert annual interest rate to monthly and decimal
    const monthlyInterestRate = (rate / 12) / 100;
    // Convert tenure in years to months
    const tenureInMonths = tenure * 12;
    const emi = (loan * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -tenureInMonths));
    return emi;
  };

  // Function to calculate total savings
  const calculateSavings = (currentEMI, newEMI) => {
    const monthlySavings = currentEMI - newEMI;
    const totalSavings = monthlySavings * loanTenure;
    return { monthlySavings, totalSavings };
  };

  const handleCalculate = () => {

    // Calculate current EMI and new EMI
    const calculatedCurrentEMI = calculateEMI(loanAmount, currentInterestRate, loanTenure);
    const calculatedNewEMI = calculateEMI(loanAmount, newInterestRate, loanTenure);

    // Calculate savings
    const { monthlySavings, totalSavings } = calculateSavings(calculatedCurrentEMI, calculatedNewEMI);

    // Set calculated values in state
    setCurrentEMI(Math.round(calculatedCurrentEMI));
    setNewEMI(Math.round(calculatedNewEMI));
    setMonthlySavings(Math.round(monthlySavings));
    setTotalSavings(Math.round(totalSavings));
  };

  // Calculate default values on mount
  useEffect(() => {
    handleCalculate();
  }, []);

  const renderResults = () => {
    return (
      <>
        <DonutChart label1={"Monthly EMI saved"} label2={"New EMI"} value1={monthlySavings} value2={newEMI} />
        <AmountCal title={"New EMI"} amount={newEMI.toLocaleString()} />
        <AmountCal title={"Current EMI"} amount={currentEMI.toLocaleString()} />
        <AmountCal title={"Monthly EMI saved"} amount={monthlySavings.toLocaleString()} />
        <AmountCal title={"Total saving"} amount={totalSavings.toLocaleString()} />
      </>
    );
  };

  return (
    <section className="productDetailedSection_5 my-10">
      <div className="container">
        <ProductsTitles text={"Balance transfer calculator"} />
        <p className="mt-11 fs-20 font-inter">
          Transfer your outstanding loan amount from one lender to another, at
          a lower rate of interest. Calculate your new EMI for different
          interests rates, loan amounts, and tenures using Samriddh’s balance
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
                  text="Loan Amount"
                  value1="1L"
                  value2="25L"
                  value3="50L"
                  value4="75L"
                  value5="1cr"
                  min={100000}
                  max={10000000}
                  unit="₹"
                  onChange={(value) => setLoanAmount(Number(String(value).replace(/,/g, '')))}
                  defaultValue={5000000}
                  allowDecimal={false}
                />

                <LoanAmountCalculator
                  text="Current Interest Rate"
                  value1="4%"
                  value2="8%"
                  value3="12%"
                  value4="16%"
                  value5="20%"
                  min={4}
                  max={20}
                  unit="%"
                  onChange={(value) => setCurrentInterestRate(parseFloat(value))}
                  defaultValue={8}
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
                  unit="Years"
                  onChange={(value) => setLoanTenure(parseInt(value, 10))}
                  defaultValue={25}
                  allowDecimal={false}
                />

                {/* <MonthDropdown title={"EMI Already Paid"} onChange={(e) => setEmiPaid(parseInt(e.target.value))} />
                <MonthDropdown title={"New Interest Rate"} onChange={(e) => setNewInterestRate(parseFloat(e.target.value))} /> */}
                
                {/* <LoanAmountCalculator
                  text="EMI Already Paid"
                  value1="0"
                  value2="20"
                  value3="100"
                  value4="200"
                  value5="300"
                  min={0}
                  max={300}
                  onChange={(value) => setEmiPaid(parseInt(value))}
                  defaultValue={0}
                  allowDecimal={false}
                /> */}

                <LoanAmountCalculator
                  text="New Interest Rate"
                  value1="4%"
                  value2="8%"
                  value3="12%"
                  value4="16%"
                  value5="20%"
                  min={4}
                  max={20}
                  unit="%"
                  onChange={(value) => setNewInterestRate(parseFloat(value))}
                  defaultValue={8.5}
                  allowDecimal={true}
                />

                <div className="float-end">
                  <button onClick={handleCalculate} className="btn btn-primary btn-lg mt-3">
                    Calculate EMI
                  </button>
                </div>
              </div>

              <div className="col-lg-6">{renderResults()}</div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default BalanceTransferCalculator;
