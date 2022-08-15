import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assests/css/loader.css";
import "./assests/css/tailwind.css";
import PageLoading from "./components/common/PageLoading";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<PageLoading />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>
);
reportWebVitals();
