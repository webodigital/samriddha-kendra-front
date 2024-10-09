import React from "react";

const GrievanceOfficer = () => {
  const contactInfo = {
    email: "grievance.samriddh@gmail.com",
    mobile: "9153985956",
  };

  return (
    <div className="container GrievanceOfficer mt-15 font-inter fs-20">
      <h1 className="text-center mb-5 fw-bold">
        Grievance Officer Contact Information
      </h1>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Field</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Email ID</td>
            <td>{contactInfo.email}</td>
          </tr>
          <tr>
            <td>Mobile Number</td>
            <td>{contactInfo.mobile}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GrievanceOfficer;
