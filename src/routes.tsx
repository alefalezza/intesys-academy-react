import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/home";
import Patients from "./components/patients";
import Patient from "./components/patient";
import Staff from "./components/staff";
import StaffMember from "./components/staff_member";
import Pharmacy from "./components/pharmacy";
import Ward from "./components/ward";
import Billing from "./components/billing";
import News from "./components/news";

const Routes: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/patients">
        <Patients />
      </Route>
      <Route path="/patients/:id">
        <Patient />
      </Route>
      <Route path="/staff">
        <Staff />
      </Route>
      <Route path="/staff/:id">
        <StaffMember />
      </Route>
      <Route path="/pharmacy">
        <Pharmacy />
      </Route>
      <Route path="/ward">
        <Ward />
      </Route>
      <Route path="/billing">
        <Billing />
      </Route>
      <Route path="/news">
        <News />
      </Route>
    </Routes>
  );
};

export default Routes;
