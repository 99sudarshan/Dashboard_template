import React, { Fragment, useEffect, useRef } from "react";
import { Transition, Menu } from "@headlessui/react";

const CommonDropdown = ({ children, className, open, setOpen }) => {
  const cancelRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!cancelRef.current?.contains(e.target)) {
        setOpen(false);
      }
    });
  }, [cancelRef, open]);

  return (
    <>
      <Menu as={Fragment} ref={cancelRef}>
        <Transition
          show={open}
          as="div"
          enter="transition ease-out duration-200"
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
