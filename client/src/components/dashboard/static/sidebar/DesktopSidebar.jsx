import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../../common/CustomLink";
import SidebarSubmenu from "./integrate/SidebarSubmenu";
import { routes } from "../../routes/sidebar";

const DesktopSidebar = ({ isToggle, toggle, width }) => {
  const [activeIndex, setActiveIndex] = useState("");
  const nav = window.location.pathname;

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
    <aside
      className={`z-30 flex-shrink-0 hidden  overflow-y-auto bg-gray-200 dark:bg-gray-800 lg:block aside animation ${
        isToggle ? "w-20" : "w-64"
      }`}
    >
      <div className="py-4 text-gray-600 dark:text-gray-400">
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
                {!isToggle && width > 1023 && (
                  <span className="ml-4">{route.name}</span>
                )}
              </CustomLink>
            ) : (
              <SidebarSubmenu
                width={width}
                route={route}
                isToggle={isToggle}
                key={i}
                activeIndex={activeIndex}
                setIndex={() => {
                  handleDropdown(i);
                  toggle();
                }}
                index={i}
                toggle={toggle}
              />
            )
          )}
        </ul>
        <div className="px-6 my-6">
          <Link to="/create-account" className="button-style gap-2 ">
            {!isToggle && <span>Create account</span>}
            <span className="">+</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default DesktopSidebar;
