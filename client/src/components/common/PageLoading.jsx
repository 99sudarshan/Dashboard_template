import React from "react";

const PageLoading = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PageLoading;
