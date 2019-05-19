import React from "react";
import Layout from "./components/layout/layout";
import "./app.scss";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FunctionComponent = () => (
  <div className='__show-structure'>
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  </div>
);

export default App;
