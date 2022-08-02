import React, { useEffect, useState } from "react";
import CustomLink from "../../../../common/CustomLink";
import { routes } from "../../../routes/sidebar";
import SidebarSubmenu from "./SidebarSubmenu";
import { Link } from "react-router-dom";

const SidebarContent = () => {
  const [activeIndex, setActiveIndex] = useState("");
  const nav = window.location.pathname;
  // console.log(nav);

  const handleDropdown = (ind) => {
    if (ind !== "stop") {
      if (ind === activeIndex) {
        setActiveIndex("");
      } else setActiveIndex(ind);
    }
  };

  useEffect(() => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].subMenu) {
        for (let j = 0; j < routes[i].subMenu.length; j++) {
          if (nav === routes[i].subMenu[j].path) {
            setActiveIndex(i);
          }
        }
      }
    }
  }, [nav]);

  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a
        className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        href="#"
      >
        Windmill
      </a>
      <ul className="mt-6">
        {routes.map((route, i) =>
          !route.subMenu ? (
            <CustomLink
              to={route.path}
              key={i}
              index={i}
              activeIndex={activeIndex}
              setIndex={() => handleDropdown(i)}
            >
              {route.icon}
              <span className="ml-4">{route.name}</span>
            </CustomLink>
          ) : (
            <SidebarSubmenu
              route={route}
              key={i}
              activeIndex={activeIndex}
              setIndex={() => handleDropdown(i)}
              index={i}
            />
          )
        )}
      </ul>
      <div className="px-6 my-6">
        <Link
          to="/create-account"
          className="bg-purple-600 py-2 px-3 text-white rounded hover:bg-purple-700 animation"
        >
          Create account
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SidebarContent;

{
  /* <li className="relative px-6 py-3" key={route.name}>
  <NavLink
    exact
    to={route.path}
    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
    activeClassName=""
  >
    <Route path={route.path} exact={route.exact}>
      <span
        className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
        aria-hidden="true"
      ></span>
    </Route>
    <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
    <span className="ml-4">{route.name}</span>
  </NavLink>
</li>; */
}
