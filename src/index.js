import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assests/css/loader.css";
import "./assests/css/tailwind.css";
import PageLoading from "./components/common/PageLoading";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Suspense fallback={<PageLoading />}>
      <App />
    </Suspense>
  </BrowserRouter>
);
reportWebVitals();
