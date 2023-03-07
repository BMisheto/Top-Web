import React from "react";
import AdminBar from "../../components/dashboard/navigation/AdminBar";
import { motion } from "framer-motion";
import UsersList from "../../components/dashboard/users/UsersList";

function UsersPage() {
  return (
    <motion.main className="min-h-[500px]">
      <AdminBar />

      <div className="subpixel-antialiased min-h-screen inset-0 flex flex-col justify-center items-center font-sans    mx-auto lg:justify-center lg:align-center lg:text-centen rounded-b-2xl p-3  ">
        <div className="flex flex-col justify-center  gap-2 ">
          <UsersList />
        </div>
      </div>
    </motion.main>
  );
}

export default UsersPage;
