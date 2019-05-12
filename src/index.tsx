import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./register_service_worker";
import App from "./app";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);

registerServiceWorker();
