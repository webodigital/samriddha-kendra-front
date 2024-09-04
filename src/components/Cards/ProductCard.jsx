import React from "react";
import Button from "./../Buttons/Button";
import { Link } from "react-router-dom";

const ProductCard = ({ image, cardTitle, btnContent }) => {
  return (
    <div className="productCards rounded-5">
      <div className="w-50">
        <div className="img-container me-xl-0 me-lg-5">
          <img className="img-fluid" src={image} alt="" />
        </div>
      </div>
      <div className="w-50">
        <p className="fs-26 text-white font-inter fw-semibold">{cardTitle}</p>

        <div className="d-flex flex-column gap-5">
          <div className="btn-containers">
            <Link to={"/products/Calculate_EMI_Interest"}>
              <button className="btn fs-3 text-white fw-bold cus-btn-transparent font-poppins">
                Know more
                <img className="move-right" src="./Arrow white.png" alt="" />
              </button>
            </Link>
          </div>
          <Link to="/products/loan/education_loan">
            <div className="btn-container">
              <Button content={btnContent} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
