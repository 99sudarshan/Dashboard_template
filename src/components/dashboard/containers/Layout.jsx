import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import routes from "../routes/dashboard";
import PageLoading from "../../common/PageLoading";
import Navbar from "../static/navbar/Navbar";
import DesktopSidebar from "../static/sidebar/DesktopSidebar";
import MobileSidebar from "./../static/sidebar/MobileSidebar";
const Page404 = lazy(() => import("../../common/Page404"));

const Layout = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleWidth = () => {
    const innerWidth = window.innerWidth;
    setWidth(innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => {
      window.addEventListener("resize", handleWidth);
    };
  });

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900">
      <DesktopSidebar
        isToggle={toggleSidebar}
        width={width}
        toggle={() => setToggleSidebar(false)}
      />
      <MobileSidebar
        isToggle={toggleSidebar}
        width={width}
        toggle={() => setToggleSidebar((preval) => !preval)}
      />
      <div className="flex flex-col flex-1 w-full">
        <Navbar isToggle={toggleSidebar} toggle={setToggleSidebar} />
        <Main>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    path={route.path}
                    element={<route.component />}
                  />
                ) : null;
              })}
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </Main>
      </div>
    </div>
  );
};

export default Layout;
