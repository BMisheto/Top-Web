import React from "react";
import { BsUpload } from "react-icons/bs";

function UploadingLoader() {
  return (
    <div className="flex flex-row items-center content-center justify-center gap-2 md:gap-3 w-full animate-pulse">
      <div className="min-w-[100px] min-h-[100px] bg-gray-200 rounded-xl"></div>

      <div className="flex flex-col justify-center text-center content-center items-center gap-2 w-full">
        <h1 className="flex flex-row items-center content-center justify-center gap-2   p-1 md:p-2">
          Uploading <BsUpload />{" "}
        </h1>
      </div>
    </div>
  );
}

export default UploadingLoader;
