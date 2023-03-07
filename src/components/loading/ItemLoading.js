import React from "react";

function ItemLoading() {
  return (
    <div className="flex flex-col justify-evenly items-center content-center gap-2 md:gap-3 opacity-60">
      {/* table head */}

      <div className="bg-gray-200 animate-pulse w-full h-[3rem] rounded-xl"></div>

      {/* table items */}

      <div className="flex flex-row justify-evenly items-center content-center gap-1 md:gap-2 w-full">
        <div className="bg-gray-200 rounded-xl animate-pulse h-[2.5rem]  min-w-[80px] md:min-w-[100px]"></div>
        <div className="bg-gray-200 rounded-xl animate-pulse h-[2.5rem]  min-w-[80px] md:min-w-[100px]"></div>
        <div className="bg-gray-200 rounded-xl animate-pulse h-[2.5rem]  min-w-[80px] md:min-w-[100px]"></div>
        <div className="bg-gray-200 rounded-xl animate-pulse h-[2.5rem]  min-w-[80px] md:min-w-[100px]"></div>
        <div className="hidden md:flex bg-gray-200 rounded-xl animate-pulse h-[2.5rem]  min-w-[80px] md:min-w-[100px]"></div>
      </div>
      <div className="flex flex-row justify-evenly items-center content-center gap-1 md:gap-2 w-full">
        <div className="bg-gray-200 rounded-xl animate-pulse h-[2.5rem]  min-w-[80px] md:min-w-[100px]"></div>
        <div className="bg-gray-200 rounded-xl animate-pulse h-[2.5rem]  min-w-[80px] md:min-w-[100px]"></div>
        <div className="bg-gray-200 rounded-xl animate-pulse h-[2.5rem]  min-w-[80px] md:min-w-[100px]"></div>
        <div className="bg-gray-200 rounded-xl animate-pulse h-[2.5rem]  min-w-[80px] md:min-w-[100px]"></div>
        <div className="hidden md:flex bg-gray-200 rounded-xl animate-pulse h-[2.5rem]  min-w-[80px] md:min-w-[100px]"></div>
      </div>
    </div>
  );
}

export default ItemLoading;
