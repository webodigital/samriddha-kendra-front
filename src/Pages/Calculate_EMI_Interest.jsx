import React from "react";
import ProductsTitles from "../components/Titles/ProductsTitles";
import LoanAmountCalculator from "../components/Cards/LoanAmountCalculator";
import DonutChart from "../components/DataCharts/DonutChart";
import AmountCal from "../components/Cards/AmountCal";
import MonthDropdown from "../components/Cards/SelectMonth";

const Calculate_EMI_Interest = () => {
  return (
    <div className="product_detailed_page">
      <section className="container-fluid resources-container mt-7">
        <div className="text">
          <h1 className="fs-55 text-white">
            Our Resources <br /> & tools
          </h1>
        </div>
      </section>

      <section className="productDetailedSection_2 mt-11">
        <div className="container">
          <ProductsTitles text={"EMI calculator"} />
          <p className="mt-11 fs-20 font-inter">
            Samriddh’s EMI calculator is easy, intuitive, and instantaneous.
            Calculate the EMI for your Home loan, business loan, personal loan,
            loan against property (LAP) or any other fully amortising loan using
            or EMI Calculator.
          </p>
        </div>
      </section>

      <section className="productDetailedSection_3 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="fs-20 font-inter fw-bold">How To Use</h2>
              <ul className="fs-20 font-inter fw-medium mt-5">
                <li>Enter the loan amount you wish to avail (In rupees)</li>
                <li>Enter the term of your loan (In months or years)</li>
                <li>Enter the rate of interest (In percentage)</li>
              </ul>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-md-5 mt-5">
              <h2 className="fs-20 font-inter fw-bold">
                How To Use EMI Calculator Video
              </h2>

              <div className="video-container mt-5">
                <iframe
                  className="img-fluid rounded-5"
                  src="https://www.youtube.com/embed/z6XAZve99xY?si=Rk0HIQ4rwdc31FAF"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <DonutChart
                label1={"Principle amount"}
                label2={"Interest amount"}
              />
              <AmountCal title={"Loan EMI"} amount={"44,986"} />{" "}
              <AmountCal title={"Principal Amount"} amount={"44,57,986"} />{" "}
              <AmountCal title={"Interest Amount"} amount={" 1,07,96,711"} />
              <AmountCal
                title={"Total Payable amount"}
                amount={"1,04,56,000"}
              />
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Calculate_EMI_Interest;
