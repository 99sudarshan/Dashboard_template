import React, { lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import Login from "./components/auth/login/Login";
import { setDarkMode } from "./components/redux/actions/action";
const Layout = lazy(() => import("./components/dashboard/containers/Layout"));

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { dark_mode } = useSelector((state) => state.darkMode);

  useEffect(() => {
    const dark = localStorage.getItem("theme");
    dispatch(setDarkMode(dark === "dark" ? true : false));
  }, [location]);
  return (
    <div className={`relative ${dark_mode ? "dark" : ""}`}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<Login />} />
        <Route path="/forgot-password" element={<Login />} />
        <Route path="/dashboard/*" element={<Layout />} />
      </Routes>
    </div>
  );
};

export default App;
