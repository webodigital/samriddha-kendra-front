import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Insurance = () => {
  return (
    <div className="insurance mt-11 ">
      <nav
        className="navbar  navbar-expand-lg font-inter I
      py-4 insuranceNav "
      >
        <div className="container ">
          <div className="w-100 d-flex justify-content-end align-items-center">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav gap-4 justify-content-center align-items-center w-100">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fs-20 fw-medium Active"
                      : "nav-link fs-20 fw-medium text-light-gray"
                  }
                  to="/products/insurance/life"
                >
                  Life Insurance
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fs-20 fw-medium Active"
                      : "nav-link fs-20 fw-medium text-light-gray"
                  }
                  to="/products/insurance/health"
                >
                  Health Insurance
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fs-20 fw-medium Active"
                      : "nav-link fs-20 fw-medium text-light-gray"
                  }
                  to="/products/insurance/motor"
                >
                  Motor Insurance
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fs-20 fw-medium Active"
                      : "nav-link fs-20 fw-medium text-light-gray"
                  }
                  to="/products/insurance/shop"
                >
                  Shop Insurance
                </NavLink>

                <a className="nav-link fs-20 fw-medium text-light-gray">
                  Claim - 1800-122-124468
                </a>
              </div>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>

      <div className="content ">
        <Outlet />
      </div>
    </div>
  );
};

export default Insurance;
