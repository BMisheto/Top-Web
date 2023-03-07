import React from "react";
import DashHome from "../../components/dashboard/DashHome";
import { motion } from "framer-motion";
import AdminBar from "../../components/dashboard/navigation/AdminBar";
import DateTime from "../../components/date/DateTime";
import EventItems from "../../components/dashboard/items/EventItems";
import PostItems from "../../components/dashboard/items/PostItems";
import UserItems from "../../components/dashboard/items/UserItems";
import DonateItems from "../../components/dashboard/items/DonateItems";
import DashPostList from "../../components/dashboard/posts/DashPostList";
import DashPostItem from "../../components/dashboard/posts/DashPostItem";

function Dashboard() {
  return (
    <motion.main className="min-h-[500px]">
      <AdminBar />

      <div className="subpixel-antialiased min-h-screen inset-0 flex flex-col justify-center items-center font-sans    mx-auto lg:justify-center lg:align-center lg:text-centen rounded-b-2xl p-3 mt-[140px] ">
        <div lassName="flex flex-col justify-center  gap-2 ">
          <DateTime />

          <div className="border-t border-l border-r rounded-xl flex flex-col gap-2 text-[13px] md:text-[16px] p-1 md:p-2 w-full">
            {/* Heading */}
            <h1 className="font-[450] text-gray-700 drop-shadow-xl">
              Overview
            </h1>

            {/* items */}
            <div className=" grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-row justify-between items-center content-center gap-2 md:gap-3  border-l border-r rounded-xl p-2 md:p-3 w-full ">
              {/* product totalPrice */}
              <UserItems />
              <PostItems />
              <EventItems />
              <DonateItems />
            </div>
          </div>
         
        </div>
      </div>
    </motion.main>
  );
}

export default Dashboard;
