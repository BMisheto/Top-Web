import { motion } from "framer-motion";
import React from "react";
import {
  AiFillCaretRight,
  AiFillHome,
  AiOutlineExport,
  AiOutlineLeft,
  AiOutlineLogout,
  AiOutlineRight,
  AiOutlineUser,
} from "react-icons/ai";
import {
  MdAddCircle,
  MdBlock,
  MdBrandingWatermark,
  MdCategory,
  MdCircleNotifications,
  MdLogout,
  MdOutlineBrandingWatermark,
  MdOutlineCreditCard,
  MdOutlineLocalShipping,
  MdPermIdentity,
  MdPriceCheck,
  MdRunCircle,
  MdSettingsSuggest,
  MdSpaceDashboard,
  MdStore,
} from "react-icons/md";
import { logout } from "../../../features/actions/userActions";
import { VscAccount, VscCircleSlash } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Backdrop from "../../backdrop/Backdrop";
import {
  BsDashCircleDotted,
  BsFilePostFill,
  BsFilterCircle,
} from "react-icons/bs";
import { CgCalendar } from "react-icons/cg";
import { HiCurrencyDollar } from "react-icons/hi";

function AdminSidebar({ handleClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        initial={{ left: -300 }}
        animate={{ left: 0 }}
        exit={{ left: -800 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white fixed  top-0 h-screen border  rounded-xl  flex flex-col gap-2 items-center content-center justify-around w-[50%] sm:w-[30%] md:w-[25%] lg:w-[15%] drop-shadow-xl  transition duration-75 delay-75 ease-in-out "
      >
        <div className="flex flex-row items-start content-start justify-start font-[600] text-gray-600 z-50">
          <div className="cursor-pointer text-[16px] flex items-start content-start ">
            <img
              src="/logo-small.png"
              height="60px"
              width="60px"
              className=" object-cover object-center"
            />
          </div>
        </div>
        {/* main */}
        <div className=" flex flex-col justify-start  items-start content-start gap-1 md:gap-1 font-[400] text-sm text-gray-700  w-3/4 rounded-md ">
          <p className="font-[600] p-1 ">Main</p>
          <div className="flex flex-col items-start content-start justify-between w-full">
            <div
              onClick={() => navigate("/dashboard")}
              className="flex flex-rows gap-2 justify-between items-center content-center transition-all delay-100 duration-100 group ease-in-out rounded-lg p-2  hover:bg-blue-600 hover:text-white   w-full cursor-pointer"
            >
              <h1 className="flex flex-row justify-center items-center content-start gap-1 md:gap-2">
                {" "}
                <MdSpaceDashboard className="text-xl " />
                Dashboard
              </h1>

              <AiFillCaretRight className="text-[13px]  " />
            </div>
          </div>
        </div>

        {/* List*/}
        <div className=" flex flex-col justify-start  items-start content-start gap-1 md:gap-1 font-[400] text-sm text-gray-700  w-3/4 rounded-md ">
          <p className="font-[600] p-1 ">Pages</p>

          <div className="flex flex-col items-start content-start justify-between w-full bg-gray-50 rounded-xl p-1 md:p-2 border-t border-l border-r border-gray-200  ">
            {/* Brands */}

            <div
              onClick={() => navigate("/dashboard/posts")}
              className="flex flex-rows gap-2 justify-between items-center content-center transition-all delay-100 duration-100 group ease-in-out rounded-lg p-2  hover:bg-blue-600 hover:text-white   w-full cursor-pointer"
            >
              <h1 className="flex flex-row justify-center items-center content-start gap-1 md:gap-2">
                <BsFilePostFill className="text-lg" />
                Posts
              </h1>

              <AiOutlineRight className="text-[13px] " />
            </div>

            {/* Category */}

            <div
              onClick={() => navigate("/dashboard/events")}
              className="flex flex-rows gap-2 justify-between items-center content-center transition-all delay-100 duration-100 group ease-in-out rounded-lg p-2  hover:bg-blue-600 hover:text-white   w-full cursor-pointer"
            >
              <h1 className="flex flex-row justify-center items-center content-start gap-1 md:gap-2">
                <CgCalendar className="text-lg " />
                Events
              </h1>

              <AiOutlineRight className="text-[13px] " />
            </div>

            {/* users */}

            <div
              onClick={() => navigate("/dashboard/users")}
              className="flex flex-rows gap-2 justify-between items-center content-center transition-all delay-100 duration-100 group ease-in-out rounded-lg p-2  hover:bg-blue-600 hover:text-white   w-full cursor-pointer"
            >
              <h1 className="flex flex-row justify-center items-center content-start gap-1 md:gap-2">
                <AiOutlineUser className="text-lg " />
                Users
              </h1>

              <AiOutlineRight className="text-[13px] " />
            </div>

            {/* Products */}

            <div
              onClick={() => navigate("/dashboard/donate")}
              className="flex flex-rows gap-2 justify-between items-center content-center transition-all delay-100 duration-100 group ease-in-out rounded-lg p-2  hover:bg-blue-600 hover:text-white   w-full cursor-pointer"
            >
              <h1 className="flex flex-row justify-center items-center content-start gap-1 md:gap-2">
                <HiCurrencyDollar className=" text-lg " />
                Donations
              </h1>
              <AiOutlineRight className="text-[13px] " />
            </div>
          </div>
        </div>

        {/* user */}
        <div className=" flex flex-col justify-start  items-start content-start gap-1 md:gap-1 font-[400] text-sm text-gray-700  w-3/4 rounded-md ">
          <p className="font-[600] p-1 ">User</p>
          <div className="flex flex-col items-start content-start justify-between w-full bg-gray-50 rounded-xl p-1 md:p-2 border-t border-l border-r border-gray-200  ">
            <div
              onClick={() => navigate("/dashboard/profile")}
              className="flex flex-rows gap-2 justify-between items-center content-center transition-all delay-100 duration-100 group ease-in-out rounded-lg p-2  hover:bg-blue-600 hover:text-white   w-full cursor-pointer"
            >
              <h1 className="flex flex-row justify-center items-center content-start gap-1 md:gap-2">
                <VscAccount className="text-md " />
                Profile
              </h1>
              <AiOutlineRight className="text-[13px] " />
            </div>
            <div
              onClick={logoutHandler}
              className="flex flex-rows gap-2 justify-between items-center content-center transition-all delay-100 duration-100 group ease-in-out rounded-lg p-2  hover:bg-red-600 hover:text-white   w-full cursor-pointer"
            >
              <h1 className="flex flex-row justify-center items-center content-start gap-1 md:gap-2">
                <AiOutlineLogout className="text-md " />
                Logout
              </h1>
              <AiOutlineRight className="text-[13px] " />
            </div>
          </div>
        </div>
        {/* Exit Admin */}
        <div className=" font-[400] text-sm text-gray-700   p-2 w-3/4">
          <p className="font-[600] p-1 ">Exit</p>

          <div
            onClick={() => navigate("/")}
            className="flex flex-rows gap-2 justify-between items-center content-center transition-all delay-100 duration-100 group ease-in-out rounded-lg p-2  hover:bg-blue-600 hover:text-white   w-full cursor-pointer"
          >
            <h1 className="flex flex-row justify-center items-center content-start gap-1 md:gap-2">
              <AiFillHome className="text-md " />
              Home
            </h1>
            <AiFillCaretRight className="text-[13px] " />
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
}

export default AdminSidebar;
