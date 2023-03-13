import React from "react";
import DashEdit from "../../../components/dashboard/events/DashEdit";
import { motion } from "framer-motion";
function ProfilePostEdit() {
  return (
    <motion.main className="min-h-[500px]">
      <div className="subpixel-antialiased min-h-screen inset-0 flex justify-center items-center font-sans    mx-auto  p-3  mt-[70px] ">
        {/* main div */}
        <DashEdit />
      </div>
    </motion.main>
  );
}

export default ProfilePostEdit;
