import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Loan = () => {
  return (
    <>
      <div className="insurance mt-11 ">
        <div className="content ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Loan;
