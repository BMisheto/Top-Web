import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CreateEventItem from "../../../components/events/CreateEventItem";
import Message from "../../../components/message/Message";
import { REACT_API_URL } from "../../../utilities/utils";

function CreateEvent() {
 
  return (
    <div className="">
      <main className="min-h-[500px] ">
        <div className="subpixel-antialiased  bg-hero-cover bg-no-repeat bg-bottom bg-cover  min-h-screen flex flex-row justify-around items-center font-sans    mx-auto lg:justify-around lg:align-center lg:text-centen  p-3 lg:p-0 mt-[60px]">
          {/* central div */}
          <CreateEventItem />
        </div>
      </main>
    </div>
  );
}

export default CreateEvent;
