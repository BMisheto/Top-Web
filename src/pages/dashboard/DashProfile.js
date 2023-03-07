import React from "react";
import AdminBar from "../../components/dashboard/navigation/AdminBar";
import { motion } from "framer-motion";
import ProfileInformation from "../../components/dashboard/profile/ProfileInformation";
function DashProfile() {
  return (
    <motion.main className="min-h-[500px]">
      <AdminBar />

      <div className="subpixel-antialiased min-h-screen inset-0 flex justify-center items-center font-sans    mx-auto  p-3  mt-[50px]">
        {/* main div */}

        <div className="flex flex-col justify-center items-center content-center gap-2 md:gap-3 w-full">
          <ProfileInformation />
        </div>
      </div>
    </motion.main>
  );
}

export default DashProfile;
