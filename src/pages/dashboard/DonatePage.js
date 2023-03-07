import React from "react";
import AdminBar from "../../components/dashboard/navigation/AdminBar";
import DateTime from "../../components/date/DateTime";
import { motion } from "framer-motion";
import DashDonationList from "../../components/dashboard/donations/DashDonationList";

function DonatePage() {
  return (
    <motion.main className="min-h-[500px]">
      <AdminBar />

      <div className="subpixel-antialiased min-h-screen inset-0 flex flex-col justify-center items-center font-sans    mx-auto lg:justify-center lg:align-center lg:text-centen rounded-b-2xl p-3  ">
        
         <DashDonationList />
        
      </div>
    </motion.main>
  );
}

export default DonatePage;
