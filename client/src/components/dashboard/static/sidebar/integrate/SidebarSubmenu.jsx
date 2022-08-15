import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DropdownIcon } from "../../../../../assests/icons";

const SidebarSubmenu = ({
  activeIndex,
  index,
  route,
  setIndex,
  toggle,
  isToggle,
  width,
}) => {
  const [pathName, setPathName] = useState("");
  const nav = useLocation().pathname;

  useEffect(() => {
    if (nav) {
      setPathName(nav);
    }
  }, [nav]);

  return (
    <>
      <div className="relative cursor-pointer">
        {activeIndex === index && (
          <span className="absolute inset-y-0 left-0 w-1 bg-purple-700 rounded-tr-lg rounded-br-lg"></span>
        )}
        <div className={` sidebar-item justify-between`} onClick={setIndex}>
          <div className="flex items-center">
            {route.icon}
            {(!isToggle || width < 1023) && (
              <span className="ml-4">{route.name}</span>
            )}
          </div>
          <DropdownIcon
            className={`h-5 w-5 animation  transform ${
              activeIndex === index ? "-rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>
      <div
        className={`px-6  overflow-hidden animation ${
          (activeIndex === index && width < 1023) ||
          (activeIndex === index && !isToggle && width > 1023)
            ? "max-h-40"
            : "max-h-0"
        }`}
      >
        <ul
          className={`p-2 flex flex-col h-auto mt-2 space-y-2 text-sm font-medium text-gray-500  shadow-inner bg-white dark:text-gray-400 dark:bg-gray-900  `}
        >
          {route.subMenu.map((data, index) => {
            const { path, name } = data;
            return (
              <Link
                to={path}
                key={index + 1}
                className={`px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                  pathName === path && "text-gray-800"
                }`}
                onClick={toggle}
              >
                {name}
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SidebarSubmenu;
