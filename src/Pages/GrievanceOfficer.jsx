import React from "react";

const GrievanceOfficer = () => {
  const contactInfo = {
    merchantsupport: {
      email: "merchantsupport@samriddhkendra.in",
      mobile: "9153985958",
    },
    support: {
      email: "Support@samriddhkendra.in",
      mobile: "9153985960",
    },
    grievance: {
      email: "grievance.samriddh@gmail.com",
      mobile: "9153985959",
    },
  };

  return (
    <div className="container GrievanceOfficer mt-15 font-inter fs-20 px-5">
      <h1 className="text-center mb-4 fw-bold">
        Grievance Officer Contact Information
      </h1>
      <div className="table-responsive hideScrollBar">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Contact Type</th>
              <th>Email ID</th>
              <th>Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Merchant Support</td>
              <td>{contactInfo.merchantsupport.email}</td>
              <td>{contactInfo.merchantsupport.mobile}</td>
            </tr>
            <tr>
              <td>Support</td>
              <td>{contactInfo.support.email}</td>
              <td>{contactInfo.support.mobile}</td>
            </tr>
            <tr>
              <td>Grievance</td>
              <td>{contactInfo.grievance.email}</td>
              <td>{contactInfo.grievance.mobile}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GrievanceOfficer;
