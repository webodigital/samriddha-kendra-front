import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

/*! Importing All Pages */

import Layout from "../Layout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Products from "../Pages/Products";
import ContactUs from "../Pages/ContactUs";
import BecomeOurPartner from "../Pages/BecomeOurPartner";
import Calculate_EMI_Interest from "../Pages/Calculate_EMI_Interest";
import EducationLoan from "../Pages/LoanPages/EducationLoan";
import Career from "../Pages/Career";
import ApplyForJob from "../Pages/ApplyForJob";
import Insurance from "../Pages/InsurancePages/Insurance";
import LifeInsurance from "../Pages/InsurancePages/LifeInsurance";
import HealthInsurance from "../Pages/InsurancePages/HealthInsurance";
import MotorInsurance from "../Pages/InsurancePages/MotorInsurance";
import Loan from "../Pages/LoanPages/Loan";
import ShopInsurance from "../Pages/InsurancePages/ShopInsurance";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="products" element={<Products />}>
        <Route path="insurance" element={<Insurance />}>
          <Route path="life" element={<LifeInsurance />} />
          <Route path="health" element={<HealthInsurance />} />
          <Route path="motor" element={<MotorInsurance />} />
          <Route path="shop" element={<ShopInsurance />} />
        </Route>
        <Route path="loan" element={<Loan />}>
          <Route path="education_loan" element={<EducationLoan />} />
        </Route>
        <Route
          path="Calculate_EMI_Interest"
          element={<Calculate_EMI_Interest />}
        />
      </Route>
      <Route path="contact" element={<ContactUs />} />
      <Route path="become_our_partner" element={<BecomeOurPartner />} />
      <Route path="career" element={<Career />}>
        <Route path="apply" element={<ApplyForJob />} />
      </Route>
      <Route
        path="*"
        element={
          <center className="mt-15">
            <h1>Page Not Found!!</h1>
          </center>
        }
      />
    </Route>
  )
);
