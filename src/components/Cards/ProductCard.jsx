import React from "react";
import Button from "./../Buttons/Button";
import { Link } from "react-router-dom";

const ProductCard = ({ image, cardTitle, btnContent, path, applyLink }) => {
  return (
    <div className="productCards rounded-5 my-2">
      <div className="w-50 mx-auto">
        <div className="img-container mx-auto w-100 me-xl-0 me-lg-5">
          <img className="w-75" src={image} alt="" />
        </div>
      </div>
      <div className="w-50">
        <p className="fs-26 text-white font-inter fw-semibold">{cardTitle}</p>

        <div className="d-flex flex-column gap-5">
          <div className="btn-containers">
            <Link to={`/products${path}`}>
              <button className="btn fs-3 text-white fw-bold cus-btn-transparent font-poppins">
                Know more
                <img className="move-right" src="./Arrow white.png" alt="" />
              </button>
            </Link>
          </div>

          <div className="btn-container">
            <a href={applyLink}>
              <Button content={btnContent} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
