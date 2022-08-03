import React from "react";

const Main = ({ children }) => {
  return (
    <main className="h-full overflow-y-auto bg-white ">
      <div className="container grid px-6 mx-auto bg-inherit">{children}</div>
    </main>
  );
};

export default Main;
