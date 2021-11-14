import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const { worker } = require("./mocks/browser");
worker.start();

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
