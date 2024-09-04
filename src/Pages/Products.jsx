import React from "react";
import ProductCard from "../components/Cards/ProductCard";
import ProductsTitles from "../components/Titles/ProductsTitles";
import { Outlet, useLocation, Link } from "react-router-dom";

const Products = () => {
  const location = useLocation();

  const isBaseRoute = location.pathname === "/products";

  return (
    <div className="product">
      {isBaseRoute ? (
        <>
          <section className="container-fluid mt-11 product_section_1">
            <div className="row justify-content-xl-around justify-content-lg-center  justify-content-md-center justify-content-center">
              <div className="col-xl-5  col-lg-6 col-md-6 col-12 text-lg-start text-center mt-15">
                <div
                  data-aos="flip-right"
                  className="product-main-text-container"
                >
                  <h1 className="title-font fs-55 fw-normal text-light-blue">
                    At Samriddh Kendra, we offer
                    <span className="text-dark fw-medium">
                      {" "}
                      multiple products <br />
                    </span>{" "}
                    for our customer
                  </h1>
                  <div className="button-container w-100 d-flex flex-column  mt-7 gap-5">
                    <Link to={"/products/insurance/life"}>
                      <button className="btn custom-btn fs-24 text-white ms-5 mt-4 font-inter">
                        INSURANCE <img src="./BTNSTAR.png" alt="" />
                      </button>
                    </Link>
                    <Link
                      to={"/products/loan"}
                      className="text-white fw-medium w-80 text-end me-5"
                    >
                      <button className="btn custom-btn mt-5 fs-24 text-white font-inter ">
                        LOANS <img src="./BTNSTAR.png" alt="" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="image_Container col-xl-7 col-lg-6 col-md-6 col-12 order-lg-last order-md-last order-first">
                {/*  <img src="./LoanImg.png" className="img-fluid" /> */}
              </div>
            </div>
          </section>

          <div className="container-fluid product_section_2">
            <div className="container">
              <ProductsTitles text={"Loans"} />

              <header className="my-5">
                <p className="fs-26 font-inter fw-semibold ">Secured Loans</p>
              </header>

              <div className="row  justify-content-center align-items-center">
                <div
                  data-aos="flip-right"
                  className="col-lg-6 col-md-12 col-12 m-lg-0 m-md-4 m-4"
                >
                  <ProductCard
                    image="./loanHome.png"
                    cardTitle="Home Loans"
                    btnContent="Apply for loan"
                  />
                </div>
                <div
                  data-aos="flip-left"
                  className="col-lg-6 col-md-12 col-12 m-lg-0 m-md-4 m-4"
                >
                  <ProductCard
                    image="./lapLoan.png"
                    cardTitle="LAP Loans"
                    btnContent="Apply for loan"
                  />
                </div>
              </div>
              <header className="my-5">
                <p className="fs-26 font-inter fw-semibold ">Unsecured Loans</p>
              </header>

              <div className="row  justify-content-center align-items-center">
                <div
                  data-aos="flip-right"
                  className="col-lg-6 col-md-12 col-12 m-lg-0 m-md-4 m-4"
                >
                  <ProductCard
                    image="./loanAvatar.png"
                    cardTitle="Personal Loan"
                    btnContent="Apply for loan"
                  />
                </div>
                <div
                  data-aos="flip-left"
                  className="col-lg-6 col-md-12 col-12 m-lg-0 m-md-4 m-4"
                >
                  <ProductCard
                    image="./Business Loan.png"
                    cardTitle="Business Loan"
                    btnContent="Apply for loan"
                  />
                </div>
              </div>
            </div>

            <div className="container mt-40 pb-5">
              <ProductsTitles text={"Insurance"} />

              <div className="row mb-4 justify-content-center align-items-center">
                <div
                  data-aos="flip-right"
                  className="col-lg-6 col-md-12 col-12 m-lg-0 m-md-4 m-4"
                >
                  <ProductCard
                    image="./Health insurance.png"
                    cardTitle="Health insurance"
                    btnContent="Apply for loan"
                  />
                </div>
                <div
                  data-aos="flip-left"
                  className="col-lg-6 col-md-12 col-12 m-lg-0 m-md-4 m-4"
                >
                  <ProductCard
                    image="./Life Insurance.png"
                    cardTitle="Life Insurance"
                    btnContent="Apply for loan"
                  />
                </div>
              </div>

              <div className="row mb-4  justify-content-center align-items-center">
                <div
                  data-aos="flip-right"
                  className=" col-lg-6 col-md-12 col-12 m-lg-0 m-md-4 m-4"
                >
                  <ProductCard
                    image="./Shop insurance.png"
                    cardTitle="Shop insurance"
                    btnContent="Apply for loan"
                  />
                </div>
                <div
                  data-aos="flip-left"
                  className=" col-lg-6 col-md-12 col-12 m-lg-0 m-md-4 m-4"
                >
                  <ProductCard
                    image="./Motor insurance.png"
                    cardTitle="Motor insurance"
                    btnContent="Apply for loan"
                  />
                </div>
              </div>
              <div className="row mb-4  justify-content-center align-items-center">
                <div
                  data-aos="flip-right"
                  className=" col-lg-6 col-md-12 col-12 m-lg-0 m-md-4 m-4"
                >
                  <ProductCard
                    image="./Crop insurance.png"
                    cardTitle="Crop insurance"
                    btnContent="Apply for loan"
                  />
                </div>
                <div
                  data-aos="flip-left"
                  className=" col-lg-6 col-md-12 col-12 m-lg-0 m-md-4 m-4"
                >
                  <ProductCard
                    image="./Crop insurance2.png"
                    cardTitle="Crop insurance"
                    btnContent="Apply for loan"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Products;
