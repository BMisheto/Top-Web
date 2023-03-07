import React from "react";
import { AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { Link } from "react-router-dom";
import { REACT_API_URL } from "../../utilities/utils";
import { motion } from "framer-motion";

function DonateItem({ donation }) {
  const description = donation.description.length > 100 ? `${donation.description.substring(0, 100)}...` : donation.description;
  
  
  return (
    <Link to={`/donate/${donation._id}`}>
      {/* item */}
      <motion.div
      whileHover={{ scale: 1.02 }}
       className="flex flex-col rounded-xl border-b justify-center content-center bg-gray-50 min-h-[300px]">
        {/* image section */}
        <div className="w-full ">
          <img
            src={`${REACT_API_URL}${donation?.donation_cover}`}
            className="h-[200px] w-full md:w-full md:h-[300px]  lg:w-full lg:h-[300px]  object-center object-cover rounded-t-xl"
            alt="donation cover"
          />
        </div>

        {/* text section */}
        <div className="p-1 md:p-3 flex flex-col items-start justify-center content-center gap-1">
          <h1 className="font-bold">{donation?.name}</h1>
          <p className="text-sm text-left max-w-sm p-1 text-gray-600   ">{description}</p>
          <div className="w-full flex flex-row justify-between items-center content-center text-sm">
            <p className="font-semibold text-gray-700">Target</p>
            <h1 className="text-gray-7800  p-1 md:p-2 rounded-md">
              {donation?.target}
              {""}
              
            </h1>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default DonateItem;
