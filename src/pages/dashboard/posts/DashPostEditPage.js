import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminBar from "../../../components/dashboard/navigation/AdminBar";
import { motion } from "framer-motion";
import DashEdit from "../../../components/dashboard/events/DashEdit";

function DashPostEditPage() {
  return (
    <motion.main className="min-h-[500px]">
      <AdminBar />
      <div className="subpixel-antialiased min-h-screen inset-0 flex justify-center items-center font-sans    mx-auto  p-3  mt-[70px] ">
        {/* main div */}
        <DashEdit />
      </div>
    </motion.main>
  );
}

export default DashPostEditPage;
