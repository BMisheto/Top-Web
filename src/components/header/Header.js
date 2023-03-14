import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import Sidebar from "./sidebar/Sidebar";
import { REACT_API_URL } from "../../utilities/utils";
import { HiUser } from "react-icons/hi";

function Header() {
  // sidebar
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  //set header bg
  const [scrolled, setIsScrolled] = useState(false);
  const [home, setHome] = useState(false);

  //show searchbox
  const [searchBox, setSearchBox] = useState(false);
  const showSearchBox = () => setSearchBox(!searchBox);

  //changeBackground
  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <motion.div className="bg-white transition delay-80 duration-80 ease-in-out h-[4rem]  fixed flex w-screen justify-around  top-0 z-40      pl-5 pr-5">
      <motion.nav className="w-full flex flex-row justify-between   lg:justify-evenly items-center content-center font-[200] p-2 mt-4 ">
        {/* Logo */}
        <Link className="" to="/">
          <img
            src="/logo-small.png"
            className="h-[40px] w-[40px] md:h-[30px] md:w-[30px] object-center "
            alt="logo"
          />
        </Link>

        {/* routes */}
        <div>
          <div className="hidden p-2 lg:flex flex-row justify-around text-[15px] space-x-8 font-[600]">
            <div className="p-2  hover:text-gray-800">
              <Link to="/">Feed</Link>
            </div>
            <div className="p-2 hover:text-gray-700">
              <Link to="/events">Events</Link>
            </div>

            <div className="p-2 hover:text-gray-700">
              <Link to="/donate">Donate</Link>
            </div>
          </div>
        </div>

        {/* Account */}
        <div className="hidden p-1 md:p-1 lg:flex">
          <Link
            className="flex flex-row items-center content-center justify-center gap-2 text-[15px] font-[600] text-gray-600"
            to="/account"
          >
            <h1 className=" ">Account</h1>
            
            <HiUser className="" />

            {/* <img
              src="/avatar.png"
              className=" w-[40px] h-[40px] object-cover object-center rounded-full border border-gray-300"
              alt="profile-image"
            /> */}
          </Link>
        </div>

        {/* Menu */}
        <div className="p-1 md:p-1 flex lg:hidden" onClick={showSidebar}>
          <AiOutlineMenu className="text-xl md:text-xl  font-light  cursor-pointer " />
        </div>

        {sidebar && (
          <AnimatePresence exitBeforeEnter={false}>
            <Sidebar sidebar={sidebar} handleClose={showSidebar} />
          </AnimatePresence>
        )}
      </motion.nav>
    </motion.div>
  );
}

export default Header;
