import { ChartIcon, DashboardIcon, LogoutIcon } from "../../../assests/icons";

export const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <DashboardIcon className="w-5 h-5" />,
  },
  {
    path: "/dashboard/charts",
    name: "Charts",
    icon: <ChartIcon className="w-5 h-5" />,
  },
  {
    name: "Pages",
    icon: <LogoutIcon className="w-5 h-5" />,
    subMenu: [
      {
        path: "/login",
        name: "Login",
      },
      {
        path: "/dashboard/404",
        name: "Page404",
      },
      {
        path: "/create-account",
        name: "Create Account",
      },
      {
        path: "/forgot-password",
        name: "Forgot Password",
      },
    ],
  },
];
