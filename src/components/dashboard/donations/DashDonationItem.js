import React from "react";
import { AiFillDelete, AiFillEdit, AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { REACT_API_URL } from "../../../utilities/utils";
import { useDispatch } from "react-redux";
import { deleteDonation } from "../../../features/actions/donationsActions";
function DashDonationItem({donation}) {
  const navigate = useNavigate();
  const dispatch =  useDispatch();
  const description = donation.description.length > 100 ? `${donation.description.substring(0, 100)}...` : donation.description;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this Event ?")) {
      dispatch(deleteDonation(id));
      
    }
  };
  return (
  
      <motion.div
       className="flex flex-col rounded-xl border justify-center content-center bg-gray-50 min-h-[300px] p-2md:p-3">
        {/* image section */}
        <div className="w-full ">
          <img
            src={`${REACT_API_URL}${donation?.donation_cover}`}
            className="h-[200px] w-full md:w-full md:h-[300px]  lg:w-full lg:h-[300px]  object-center object-cover rounded-t-xl"
            alt="donation cover"
          />
        </div>

        {/* text section */}
        <div className="p-1 md:p-3 flex flex-col items-start justify-center content-center gap-1 text-sm">
          <h1 className="font-bold">{donation?.name}</h1>
         
          <div className="w-full flex flex-row justify-between items-center content-center text-sm">
            <p className="font-semibold text-gray-700">Target</p>
            <h1 className="text-gray-7800  p-1 md:p-2 rounded-md">
              {donation?.target}
              {""}
              
            </h1>
          </div>

          <div className="flex flex-row justify-between text-sm items-center content-center w-full">
          <button
            onClick={() => navigate(`/dashboard/donate/${donation._id}/edit`)}
            className="flex flex-row gap-1 bg-gray-200  hover:text-white hover:bg-green-500 rounded-full p-1 md:p-2 min-w-[80px] items-center content-center justify-center"
          >
            Edit
            <AiFillEdit />
          </button>
          <button 
           onClick={() => deleteHandler(donation._id)}
          className="flex flex-row gap-1 text-white bg-red-500 hover:bg-red-700 rounded-full p-1 md:p-2 min-w-[80px] items-center content-center justify-center">
            Delete
            <AiFillDelete />
          </button>
        </div>
        </div>
      </motion.div>
   
  )
}

export default DashDonationItem
