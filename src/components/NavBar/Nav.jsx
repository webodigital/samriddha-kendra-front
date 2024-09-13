import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar fixed-top nav b-shadow">
        <div className="container align-items-center  font-poppins">
          <NavLink className={"navbar-brand"}>
            <img className="logo" src="/Samriddh Kendra Logo.png" alt="Logo" />
          </NavLink>
          <ul className="navLinks">
            <li className="nav-item ">
              <NavLink
                className={({ isActive }) => (isActive ? "Active" : "")}
                to={"about"}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => navigate("/products")}
              >
                <NavLink
                  className={({ isActive }) => (isActive ? "Active" : "")}
                  to={"/products"}
                >
                  Products
                </NavLink>
              </a>
              <ul className="dropdown-menu  rounded-4">
                <ul>
                  <li>
                    <a className="dropdown-item  fw-bold font-inter">Loan</a>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "Active dropdown-item" : "dropdown-item"
                      }
                      to={"/products/loan/home"}
                    >
                      Home Loan
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "Active dropdown-item" : "dropdown-item"
                      }
                      to={"/products/loan/lap"}
                    >
                      LAP Loan
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "Active dropdown-item" : "dropdown-item"
                      }
                      to={"/products/loan/personal"}
                    >
                      Personal Loan
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "Active dropdown-item" : "dropdown-item"
                      }
                      to={"/products/loan/education_loan"}
                    >
                      Education Loan
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "Active dropdown-item" : "dropdown-item"
                      }
                      to={"/products/loan/business"}
                    >
                      Business Loan
                    </NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a className="dropdown-item  fw-bold font-inter">
                      Insurance
                    </a>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "Active dropdown-item" : "dropdown-item"
                      }
                      to={"/products/insurance/health"}
                    >
                      Health insurance
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "Active dropdown-item" : "dropdown-item"
                      }
                      to={"/products/insurance/life"}
                    >
                      Life insurance
                    </NavLink>
                  </li>{" "}
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "Active dropdown-item" : "dropdown-item"
                      }
                      to={"/products/insurance/health"}
                    >
                      Shop insurance
                    </NavLink>
                  </li>{" "}
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "Active dropdown-item" : "dropdown-item"
                      }
                      to={"/products/insurance/motor"}
                    >
                      Motor insurance
                    </NavLink>
                  </li>{" "}
                  <li>
                    {" "}
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "Active dropdown-item" : "dropdown-item"
                      }
                      to={"/products/insurance/crop"}
                    >
                      Crop insurance
                    </NavLink>
                  </li>
                </ul>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "Active" : "")}
                to={"contact"}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "Active" : "")}
                to={"become_our_partner"}
              >
                Become Our Partner
              </NavLink>
            </li>
          </ul>
          <li className="nav-item d-lg-block d-md-none d-none">
            <a
              className="btn btn-outline-dark px-4 py-1 hover"
              href="https://sk-on-prem-production.web.app/login"
            >
              Login
            </a>
          </li>

          <div className="d-lg-none d-flex align-items-center gap-5">
            <li className="nav-item">
              <a className="btn btn-outline-dark px-4 py-1 hover ">Sign Up</a>
            </li>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fs-2"></span>
            </button>
          </div>
          <div
            className="offcanvas offcanvas-end slider p-2"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header ">
              <h5
                className="offcanvas-title w-100 text-center"
                id="offcanvasNavbarLabel"
              >
                <img
                  className="logo"
                  src="/Samriddh Kendra Logo.png"
                  alt="Logo"
                />
              </h5>
              <button
                type="button"
                className="btn-close fs-3"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-center gap-3">
                <li className="nav-item sidebar-li">
                  <NavLink
                    className={({ isActive }) => (isActive ? "Active" : "")}
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item sidebar-li">
                  <NavLink
                    className={({ isActive }) => (isActive ? "Active" : "")}
                    to={"about"}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item dropdown border-0">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => navigate("/products")}
                  >
                    <NavLink
                      className={({ isActive }) => (isActive ? "Active" : "")}
                      to={"/products"}
                    >
                      Products
                    </NavLink>
                  </a>
                  <ul className="dropdown-menu  rounded-4">
                    <ul>
                      <li>
                        <a className="dropdown-item  fw-bold font-inter">
                          Loan
                        </a>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "Active dropdown-item" : "dropdown-item"
                          }
                          to={"/products/loan/home"}
                        >
                          Home Loan
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "Active dropdown-item" : "dropdown-item"
                          }
                          to={"/products/loan/lap"}
                        >
                          LAP Loan
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "Active dropdown-item" : "dropdown-item"
                          }
                          to={"/products/loan/personal"}
                        >
                          Personal Loan
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "Active dropdown-item" : "dropdown-item"
                          }
                          to={"/products/loan/education_loan"}
                        >
                          Education Loan
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "Active dropdown-item" : "dropdown-item"
                          }
                          to={"/products/loan/business"}
                        >
                          Business Loan
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a className="dropdown-item  fw-bold font-inter">
                          Insurance
                        </a>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "Active dropdown-item" : "dropdown-item"
                          }
                          to={"/products/insurance/health"}
                        >
                          Health insurance
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "Active dropdown-item" : "dropdown-item"
                          }
                          to={"/products/insurance/life"}
                        >
                          Life insurance
                        </NavLink>
                      </li>{" "}
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "Active dropdown-item" : "dropdown-item"
                          }
                          to={"/products/insurance/health"}
                        >
                          Shop insurance
                        </NavLink>
                      </li>{" "}
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "Active dropdown-item" : "dropdown-item"
                          }
                          to={"/products/insurance/motor"}
                        >
                          Motor insurance
                        </NavLink>
                      </li>{" "}
                      <li>
                        {" "}
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "Active dropdown-item" : "dropdown-item"
                          }
                          to={"/products/insurance/crop"}
                        >
                          Crop insurance
                        </NavLink>
                      </li>
                    </ul>
                  </ul>
                </li>
                <li className="nav-item sidebar-li">
                  <NavLink
                    className={({ isActive }) => (isActive ? "Active" : "")}
                    to={"contact"}
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item sidebar-li">
                  <NavLink
                    className={({ isActive }) => (isActive ? "Active" : "")}
                    to={"become_our_partner"}
                  >
                    Become Our Partner
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="button-container">
              <button className="btn btn-dark-blue fs-3">
                {" "}
                <a
                  style={{ color: "#fff" }}
                  className="px-4 py-1 hover"
                  href="https://sk-on-prem-production.web.app/login"
                >
                  Login
                </a>
              </button>
              <button className="btn btn-dark-blue fs-3"> Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
