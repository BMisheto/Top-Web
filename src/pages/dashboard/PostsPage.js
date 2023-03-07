import React from "react";
import AdminBar from "../../components/dashboard/navigation/AdminBar";
import { motion } from "framer-motion";
import DashPostList from "../../components/dashboard/posts/DashPostList";

function PostsPage() {
  return (
    <motion.main className="min-h-[500px]">
      <AdminBar />

      <div className="subpixel-antialiased min-h-screen inset-0 flex flex-col justify-center items-center font-sans    mx-auto lg:justify-center lg:align-center lg:text-centen rounded-b-2xl p-3  ">
        <DashPostList />
      </div>
    </motion.main>
  );
}

export default PostsPage;
