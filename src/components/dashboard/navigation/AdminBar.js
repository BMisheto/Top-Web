import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AdminSidebar from "./AdminSidebar";
import { useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import { REACT_APP_URL } from "../../../utilities/utils";

function AdminBar() {
  // sidebar
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <motion.div className="h-[5rem] bg-white top-0  fixed flex w-full justify-around  z-50   rounded-xl  ">
      <nav className="w-[90%] flex flex-row justify-between  items-center content-center ">
        {/* Dashboard bar */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
         
          whileTap={{ scale: 0.9 }}
          className="p-1 md:p-2   rounded-md cursor-pointer  bg-blue-600"
          onClick={showSidebar}
        >
          <AiOutlineMenu className="text-white text-lg   m-1 " />
        </motion.div>

        {/* information */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="flex flex-row items-center content-center justify-betwen"
        >
          <div className="p-1 text-sm md:p-2 md:text-[15px]">
            <h1 className="text-gray-500">
              <span className="font-bold">Hello </span>
              {userInfo.first_name}
            </h1>
          </div>

          <div className="p-1 md:p-2">
            <img
              src={`${REACT_APP_URL}${userInfo.profile_photo}`}
              className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] object-center object-cover rounded-full"
            />
          </div>
        </motion.div>

        {sidebar && (
          <AnimatePresence exitBeforeEnter={false}>
            <AdminSidebar sidebar={sidebar} handleClose={showSidebar} />
          </AnimatePresence>
        )}
      </nav>
    </motion.div>
  );
}

export default AdminBar;
