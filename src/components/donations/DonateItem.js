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
       className="flex flex-col rounded-xl border border-gray-100   justify-center content-center bg-gray-50 min-h-[300px]">
        {/* image section */}
        <div className="max-w-[400px] md:w-full relative">
          <img
            src={`${REACT_API_URL}${donation?.donation_cover}`}
            className="h-[300px] w-full md:w-[400px] md:h-[300px]  lg:w-[400px] lg:h-[300px]  object-center object-cover rounded-t-xl"
            alt="donation cover"
          />
        </div>

        {/* text section */}
        <div className="  flex flex-col items-start justify-center content-center p-2  bg-gray-50 rounded-xl">
          <h1 className="font-bold p-1">{donation?.name}</h1>
          <p className="text-sm text-left max-w-sm  text-gray-600  p-1 ">{description}</p>
         
        </div>
      </motion.div>
    </Link>
  );
}

export default DonateItem;
