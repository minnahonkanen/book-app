import "./css/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./context/books";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider>
    <App />
  </Provider>
);
