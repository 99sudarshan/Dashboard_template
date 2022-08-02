import { lazy } from "react";

const Dashboard = lazy(() => import("../home/Dashboard"));
const Charts = lazy(() => import("../charts/Charts"));
const Page404 = lazy(() => import("../../common/Page404"));

const routes = [
  {
    path: "",
    component: Dashboard,
  },
  {
    path: "/charts",
    component: Charts,
  },
  {
    path: "/404",
    component: Page404,
  },
];

export default routes;
