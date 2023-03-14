import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "../../backdrop/Backdrop";
import { BsX } from "react-icons/bs";

import { Link, useNavigate } from "react-router-dom";
import { CgFeed, CgCalendar } from "react-icons/cg";
import { HiCurrencyDollar, HiUser } from "react-icons/hi";
import { FaUser } from "react-icons/fa";

function Sidebar({ handleClose }) {
  const navigate = useNavigate();

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        animate={{ right: 0, opacity: 1 }}
        initial={{ right: -100, opacity: 0 }}
        exit={{ right: -100, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className=" text-gray-800 fixed top-0 right-0  min-h-[94%] w-[50%] md:w-[30%] border border-gray-100  bg-[#fafafa] flex flex-col justify-evenly items-center content-center lg:hidden xl:hidden drop-shadow-xl shadow-gray-300/75  rounded-2xl   m-4"
      >
        {/* social */}

        <div className="w-1/2 flex flex-row items-center content-center justify-around font-[600] text-gray-600">
          <div
            onClick={handleClose}
            className="cursor-pointer text-[15px] flex flex-row items-center content-center gap-2 bg-white  rounded-full p-2 text-gray-600"
          >
            <h1 className="text-left font-[500] text-[13px]">Close</h1>
            <BsX className="text-white font-[600] bg-blue-600 rounded-full" />
          </div>
        </div>

        {/* dashboard */}

        {/* navigation */}
        <nav className="flex flex-col space-y-5  text-[14px] font-[600] items-start content-center justify-center text-gray-800">
          <div className="p-2 hover:text-orange-500 hover:bg-gray-100 rounded-lg">
            <Link
              to="/"
              className="flex flex-row items-center content-center justify-center gap-2 md:gap-3"
            >
              <CgFeed className="text-lg md:text-xl" />
              <h1 className="text-md ">Feed</h1>
            </Link>
          </div>

          <div className="p-2 hover:text-orange-500 hover:bg-gray-100 rounded-lg">
            <Link
              to="/events"
              className="flex flex-row items-center content-center justify-center gap-2 md:gap-3"
            >
              <CgCalendar className="text-lg md:text-xl" />
              <h1 className="text-md ">Events</h1>
            </Link>
          </div>

          {/*Account Popup */}

          <div className="p-2 hover:text-orange-500 hover:bg-gray-100 rounded-lg">
            <Link
              to="/Donate"
              className="flex flex-row items-center content-center justify-center gap-2 md:gap-3"
            >
              <HiCurrencyDollar className="text-lg md:text-xl" />
              <h1 className="text-md ">Donate</h1>
            </Link>
          </div>

          <div className="p-2 hover:text-orange-600 hover:bg-gray-100 rounded-lg">
            <Link
              to="/account"
              className="flex flex-row items-center content-center justify-center gap-2 md:gap-3"
            >
              <HiUser className="" />
              <h1>Account</h1>
            </Link>
          </div>
        </nav>

        {/* social */}

        <div className="w-1/2 text-[13px] flex flex-row justify-around font-[600] text-black">
          <div className=" p-2 cursor-pointer hover:bg-black hover:text-white">
            <h1>IG</h1>
          </div>

          <div className=" p-2 cursor-pointer hover:bg-black hover:text-white">
            <h1>Tw</h1>
          </div>

          <div className="rounded-xl p-2 cursor-pointer hover:bg-black hover:text-white">
            <h1>Fb</h1>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
}

export default Sidebar;
