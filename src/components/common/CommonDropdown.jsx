import React, { Fragment, useRef } from "react";
import { Transition, Menu } from "@headlessui/react";

const CommonDropdown = ({ children, className, Open }) => {
  const cancelRef = useRef();
  return (
    <>
      <Menu as={Fragment}>
        <Transition
          show={Open}
          as="div"
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className={className}>{children}</Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default CommonDropdown;
