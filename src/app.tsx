import React from "react";
import Layout from "./components/layout/layout";
import "./app.scss";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import initStore from "./lib/store";

const store = initStore();

const App: React.FunctionComponent = () => (
  <div className="__show-structure">
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </Provider>
  </div>
);

export default App;
