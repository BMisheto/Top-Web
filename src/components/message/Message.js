import React from "react";
import { BsCheck } from "react-icons/bs";
import { VscWarning } from "react-icons/vsc";
import { AnimatePresence, motion } from "framer-motion";
import { AiTwotoneWarning } from "react-icons/ai";

function Message({ children, type }) {
  return (
    <AnimatePresence>
      {type == "error" && (
        <motion.div
          animate={{ opacity: 1, bottom: 0 }}
          initial={{ opacity: 0, bottom: 20 }}
          exit={{ opacity: 0, bottom: 50 }}
          className="flex flex-row justify-center items-center content-start   text-center space-x-1  lg:p-4 text-gray-500 border border-orange-300  gap-2 rounded-xl bg-[#fafafa] drop-shadow-md mt-[5px] mb-[5px] h-[50px]"
        >
          {/* icons */}
          <div className="flex flex-row  justify-evenly items-center content-center p-1 md:p-2 m-2">
            <VscWarning className="text-orange-500 text-lg m-2   " />

            <h1 className="text-[13px] md:text-[14px]">{children}</h1>
          </div>
        </motion.div>
      )}

      {type == "success" && (
        <motion.div
          animate={{ opacity: 1, bottom: 0 }}
          initial={{ opacity: 0, bottom: 20 }}
          exit={{ opacity: 0, bottom: 50 }}
          className="flex flex-row justify-center items-center content-start   text-center space-x-1  lg:p-4 text-gray-500 border border-green-300  gap-2 rounded-xl bg-[#fafafa] drop-shadow-lg mt-[10px] mb-[10px] h-[50px]"
        >
          {/* icons */}
          <div className="flex flex-row  justify-evenly items-center content-center p-1 md:p-2 m-2">
            <BsCheck className="bg-green-500 text-white text-lg rounded-full m-2" />

            <h1 className="text-[13px] md:text-[14px]">{children}</h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Message;
