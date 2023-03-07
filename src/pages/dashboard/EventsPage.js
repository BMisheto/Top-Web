import React from "react";
import AdminBar from "../../components/dashboard/navigation/AdminBar";
import { motion } from "framer-motion";
import DashEventList from "../../components/dashboard/events/DashEventList";

function EventsPage() {
  return (
    <motion.main className="min-h-[500px]">
      <AdminBar />

      <div className="subpixel-antialiased min-h-screen inset-0 flex flex-col justify-center items-center font-sans    mx-auto lg:justify-center lg:align-center lg:text-centen rounded-b-2xl p-3  ">
        <div className="flex flex-col justify-center  gap-2 ">
          <DashEventList />
        </div>
      </div>
    </motion.main>
  );
}

export default EventsPage;
