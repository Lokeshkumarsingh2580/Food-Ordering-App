import React from "react";

import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ContextApi, foodContext } from "./Context/ContextApi.jsx";
import { createRoot } from "react-dom/client";

const rootelem = document.getElementById("root");
const root = createRoot(rootelem);

export { foodContext };

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextApi>
        <App />
      </ContextApi>
    </BrowserRouter>
  </React.StrictMode>
);
