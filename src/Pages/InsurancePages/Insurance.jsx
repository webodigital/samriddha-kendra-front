import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Insurance = () => {
  return (
    <div className="insurance mt-11 ">
      <div className="content ">
        <Outlet />
      </div>
    </div>
  );
};

export default Insurance;
