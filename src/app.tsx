import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./app.scss";
import Layout from "./components/layout/layout";
import { MaterialProvider } from "./lib/material-provider";
import Routes from "./routes";

const App: React.FunctionComponent = () => (
  <div className="__show-structure">
    <MaterialProvider>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </MaterialProvider>
  </div>
);

export default App;
