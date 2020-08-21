import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* component, React 는 component 와 함께 동작 */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
