import React, { useEffect, useState } from "react";

import CreateItem from "../../../components/donations/CreateItem";

function CreateDonation() {
  
  return (
    <div className="">
      <main className="min-h-[500px] ">
        <div className="subpixel-antialiased  bg-hero-cover bg-no-repeat bg-bottom bg-cover  min-h-screen flex flex-row justify-around items-center font-sans    mx-auto lg:justify-around lg:align-center lg:text-centen  p-3 lg:p-0 mt-[60px]">
          {/* central div */}

          <CreateItem />
        </div>
      </main>
    </div>
  );
}

export default CreateDonation;
