import React from "react";
import Layout from "./components/layout/layout";
import "./app.scss";

const App: React.FunctionComponent = () => (
  <div className='__show-structure'>
    <Layout>Content (import router here)</Layout>
  </div>
);

export default App;
