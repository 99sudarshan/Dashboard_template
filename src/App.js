import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/dashboard/containers/Layout";
import Dashboard from "./components/dashboard/home/Dashboard";
import Login from "./components/auth/login/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<Login />} />
        <Route path="/forgot-password" element={<Login />} />
        <Route path="/dashboard/*" element={<Layout />} />
      </Routes>
    </>
  );
};

export default App;
