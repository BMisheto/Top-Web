import React, { Children } from "react";
import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div className="absolute min-h-screen w-screen " onClick={onClick}>
      {children}
    </motion.div>
  );
};

export default Backdrop;
