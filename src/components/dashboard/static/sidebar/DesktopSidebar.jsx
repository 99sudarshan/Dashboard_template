import React from "react";
import SidebarContent from "./integrate/SidebarContent";

const DesktopSidebar = () => {
  return (
    <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-gray-100 dark:bg-gray-800 lg:block aside">
      <SidebarContent />
    </aside>
  );
};

export default DesktopSidebar;
