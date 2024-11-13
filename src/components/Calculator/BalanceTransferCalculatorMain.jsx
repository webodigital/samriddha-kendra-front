import React from "react";

import ProductsTitles from "../Titles/ProductsTitles";
import LoanAmountCalculator from "../Cards/LoanAmountCalculator";
import DonutChart from "../DataCharts/DonutChart";
import AmountCal from "../Cards/AmountCal";
import MonthDropdown from "../Cards/SelectMonth";

const BalanceTransferCalculator = () => {
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
            <div className="col-lg-6 mt-lg-0 mt-md-5 mt-5"></div>
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
                  />
                  <MonthDropdown title={"Loan Tenure"} />
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
                  <DonutChart label1={"Monthly EMI saved"} label2={"New EMI"} />
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
                  />
                  <MonthDropdown title={"EMI Already paid"} />
                  <MonthDropdown title={"New Interest Rate"} />
                  <AmountCal title={"New EMI"} amount={"44,986"} />{" "}
                  <AmountCal title={"Current EMI"} amount={"44,57,986"} />{" "}
                  <AmountCal
                    title={"Monthly EMI saved"}
                    amount={" 1,07,96,711"}
                  />
                  <AmountCal title={"Total saving"} amount={"1,04,56,000"} />
                </div>
              </div>
            </div>
          </section>
        </div>
    </section>
  );
};

export default BalanceTransferCalculator;
