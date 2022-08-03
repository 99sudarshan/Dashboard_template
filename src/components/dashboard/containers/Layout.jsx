import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import routes from "../routes/dashboard";
import PageLoading from "../../common/PageLoading";
import Navbar from "../static/navbar/Navbar";
import DesktopSidebar from "../static/sidebar/DesktopSidebar";

const Page404 = lazy(() => import("../../common/Page404"));

const Layout = () => {
  return (
    <div className={`flex h-screen bg-gray-50  dark:bg-gray-900 `}>
      <DesktopSidebar />

      <div className="flex flex-col flex-1 w-full ">
        <Navbar />
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
