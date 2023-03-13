import React, { Children } from "react";
import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div className="absolute h-auto w-auto " onClick={onClick}>
      {children}
    </motion.div>
  );
};

export default Backdrop;
