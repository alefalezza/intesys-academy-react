import React from "react";
import { Route, Switch } from "react-router-dom";
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
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/patients' exact component={Patients} />
      <Route path='/patients/:id' component={Patient} />
      <Route path='/staff' exact component={Staff} />
      <Route path='/staff/:id' component={StaffMember} />
      <Route path='/pharmacy' exact component={Pharmacy} />
      <Route path='/ward' exact component={Ward} />
      <Route path='/billing' exact component={Billing} />
      <Route path='/news' exact component={News} />
    </Switch>
  );
};

export default Routes;
