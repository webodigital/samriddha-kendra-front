import React from "react";
import ProductsTitles from "../components/Titles/ProductsTitles";
//import LoanAmountCalculator from "../components/Cards/LoanAmountCalculator";
//import DonutChart from "../components/DataCharts/DonutChart";
//import AmountCal from "../components/Cards/AmountCal";
//import MonthDropdown from "../components/Cards/SelectMonth";
import EMICalculator from "../components/Calculator/EMICalculator";
import BalanceTransferCalculator from "../components/Calculator/BalanceTransferCalculator";

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

              <div className="video-container mt-4 w-100 h-100 rounded-5">
                {/* <iframe
                  className="img-fluid rounded-5"
                  src="https://www.youtube.com/embed/z6XAZve99xY?si=Rk0HIQ4rwdc31FAF"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe> */}

                <img
                  src="/Coming Soon.webp"
                  className="img-fluid  border w-100 rounded-5 object-fit-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <EMICalculator/>

      <BalanceTransferCalculator/>

    </div>
  );
};

export default Calculate_EMI_Interest;
