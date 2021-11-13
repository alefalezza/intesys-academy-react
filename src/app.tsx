import React from "react";
import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Patients from "./components/patients";
import Patient from "./components/patient";
import Staff from "./components/staff";
import StaffMember from "./components/staff_member";
import Pharmacy from "./components/pharmacy";
import Ward from "./components/ward";
import Billing from "./components/billing";
import News from "./components/news";
import { MaterialProvider } from "./lib/material-provider";
import Layout from "./components/layout/layout";

const App: React.FunctionComponent = () => (
  <div className="__show-structure">
    <MaterialProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="patients" element={<Patients />} />
          <Route path="patients/:id" element={<Patient />} />
          <Route path="staff" element={<Staff />} />
          <Route path="staff/:id" element={<StaffMember />} />
          <Route path="pharmacy" element={<Pharmacy />} />
          <Route path="ward" element={<Ward />} />
          <Route path="billing" element={<Billing />} />
          <Route path="news" element={<News />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </MaterialProvider>
  </div>
);

export default App;
