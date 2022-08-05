import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  SunIcon,
  BellIcon,
  MoonIcon,
  OutlineCogIcon,
  OutlinePersonIcon,
  MenuIcon,
  LogoutIcon,
  SearchIcon,
} from "../../../../assests/icons";
import { setDarkMode } from "../../../redux/actions/action";
import CommonDropdown from "./../../../common/CommonDropdown";

const Navbar = () => {
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { dark_mode } = useSelector((state) => state.darkMode);

  return (
    <header
      className={
        "z-40 py-4 bg-gray-100  [box-shadow:0_5px_5px_-6px_#333] dark:bg-gray-800"
      }
    >
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-gray-700 dark:text-gray-200">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md  focus:outline-none focus:shadow-outline-purple"
          //   onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-8 h-8" aria-hidden="true" />
        </button>
        {/* <!-- Search input --> */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="pl-8 text-gray-700 h-9 text-sm w-full outline-none focus:ring-1 focus:ring-purple-400 rounded"
              placeholder="Search for projects"
              aria-label="Search"
            />
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:ring-purple-200 focus:ring-2"
              //   onClick={toggleMode}
              aria-label="Toggle color mode"
              onClick={() => {
                dispatch(setDarkMode(!dark_mode));
                localStorage.getItem("theme") === "dark"
                  ? localStorage.removeItem("theme")
                  : localStorage.setItem("theme", "dark");
              }}
            >
              {dark_mode ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </li>

          {/* <!-- Notifications menu --> */}
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:ring-purple-200 focus:ring-2"
              onClick={() =>
                setIsNotificationsMenuOpen(!isNotificationsMenuOpen)
              }
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <BellIcon className="w-5 h-5" aria-hidden="true" />
              {/* <!-- Notification badge --> */}
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>

            <CommonDropdown
              className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-gray-50 dark:bg-gray-700 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none"
              open={isNotificationsMenuOpen}
              setOpen={setIsNotificationsMenuOpen}
            >
              <div className="flex flex-col justify-between  py-3 px-2 text-sm">
                <a
                  href="#"
                  className="flex justify-between items-center hover:bg-gray-200 py-2 px-2 rounded"
                >
                  <h4 className="font-medium ">Messages</h4>
                  <span className="bg-red-100 text-red-600 rounded-full px-2">
                    13
                  </span>
                </a>
                <a
                  href="#"
                  className="flex justify-between items-center hover:bg-gray-200 py-2 px-2 rounded"
                >
                  <h4 className="font-medium ">Sales</h4>
                  <span className="bg-red-100 text-red-600 rounded-full px-2">
                    2
                  </span>
                </a>
                <a
                  href="#"
                  className="flex justify-between items-center hover:bg-gray-200 py-2 px-2 rounded"
                  onClick={() => alert("Hello Person")}
                >
                  <h4 className="font-medium">Alerts</h4>
                  <span className="bg-red-100 text-red-600 rounded-full px-2"></span>
                </a>
              </div>
            </CommonDropdown>
          </li>

          {/* <!-- Profile menu --> */}
          <li className="relative">
            <button
              className="rounded-full focus:ring-purple-200 focus:ring-2 focus:outline-none align-middle"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              aria-label="Account"
              aria-haspopup="true"
            >
              <img
                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                alt="user"
                aria-hidden="true"
                className="h-9 w-9 object-cover rounded-full "
              />
            </button>

            <CommonDropdown
              className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-gray-50 dark:bg-gray-700 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none"
              open={isProfileMenuOpen}
              setOpen={setIsProfileMenuOpen}
            >
              <div className="flex flex-col justify-between py-3 px-2 text-sm font-medium">
                <a
                  href="#"
                  className="flex gap-4 items-center hover:bg-gray-200 py-2 px-2 rounded"
                >
                  <OutlinePersonIcon className="w-4 h-4" />
                  <span>Profile</span>
                </a>
                <a
                  href="#"
                  className="flex gap-4 items-center hover:bg-gray-200 py-2 px-2 rounded"
                >
                  <OutlineCogIcon className="w-4 h-4 " />
                  <span>Settings</span>
                </a>
                <a
                  href="#"
                  className="flex gap-4 items-center hover:bg-gray-200 py-2 px-2 rounded"
                  onClick={() => alert("Log out Success")}
                >
                  <LogoutIcon className="w-4 h-4" />
                  <span>Log Out</span>
                </a>
              </div>
            </CommonDropdown>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
