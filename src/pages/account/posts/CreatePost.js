import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import CreatePostItem from "../../../components/posts/CreatePostItem";

function CreatePost() {
  return (
    <motion.main className="min-h-[500px]">
      <div className="subpixel-antialiased min-h-screen inset-0 flex justify-center items-center font-sans    mx-auto  p-3  mt-[70px] ">
        {/* main div */}
        <CreatePostItem />
      </div>
    </motion.main>
  );
}

export default CreatePost;
