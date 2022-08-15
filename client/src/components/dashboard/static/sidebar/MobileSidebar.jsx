import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../../common/CustomLink";
import SidebarSubmenu from "./integrate/SidebarSubmenu";
import { routes } from "../../routes/sidebar";

const MobileSidebar = ({ isToggle, toggle, width }) => {
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
    <>
      {isToggle && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={toggle}
        ></div>
      )}
      <aside
        className={`fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-gray-200 dark:bg-gray-800 lg:hidden transform animation ${
          isToggle ? "translate-x-0" : "-translate-x-full"
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
                  setIndex={() => {
                    handleDropdown(i);
                    toggle();
                  }}
                >
                  {route.icon}
                  <span className="ml-4">{route.name}</span>
                </CustomLink>
              ) : (
                <SidebarSubmenu
                  width={width}
                  route={route}
                  key={i}
                  activeIndex={activeIndex}
                  setIndex={() => handleDropdown(i)}
                  index={i}
                  toggle={toggle}
                />
              )
            )}
          </ul>
          <div className="px-6 my-6">
            <Link to="/create-account" className="button-style gap-2">
              <span> Create account</span>
              <span className="ml-2" aria-hidden="true">
                +
              </span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;
