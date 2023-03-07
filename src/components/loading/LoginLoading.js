import React from "react";

function LoginLoading() {
  return (
    <div className="flex flex-col justify-start  content-center items-center space-y-4 w-full">
      <div className="p-2 min-w-[300px] md:min-w-[400px] h-[60px] rounded-lg bg-gray-200 animate-pulse"></div>
      <div className="p-2 min-w-[300px] md:min-w-[400px] h-[60px] rounded-lg bg-gray-200 animate-pulse"></div>
    </div>
  );
}

export default LoginLoading;
