import React, { useEffect, useState } from "react";
import {
  AiFillBoxPlot,
  AiFillDelete,
  AiFillEdit,
  AiFillEye,
  AiFillHeart,
  AiOutlineComment,
  AiOutlineDotChart,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { REACT_API_URL } from "../../../utilities/utils";
import { useDispatch, useSelector } from "react-redux";
import { deleteDonation } from "../../../features/actions/donationsActions";
import { FaDotCircle } from "react-icons/fa";
import { BsThreeDots, BsThreeDotsVertical, BsX } from "react-icons/bs";
import Backdrop from "../../backdrop/Backdrop";
function DashDonationItem({ donation }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [options, setOptions] = useState(false);

  const description =
    donation.description.length > 100
      ? `${donation.description.substring(0, 100)}...`
      : donation.description;

  const donationDelete = useSelector((state) => state.donationDelete);
  const { loading, success, error } = donationDelete;

  useEffect(() => {
    if (success) {
      window.location.reload();
    } else {
      return;
    }
  }, [success]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this Event ?")) {
      dispatch(deleteDonation(id));
    }
  };
  return (
  
    <motion.div 
    
    className="flex flex-col rounded-xl border border-gray-100   justify-center content-center bg-gray-50 min-h-[300px]">
      {/* image section */}
      <div className="max-w-[400px] md:w-full relative">
      <img
            src={`${REACT_API_URL}${donation?.donation_cover}`}
            className="h-[200px] w-full md:w-[400px] md:h-[300px]  lg:w-[400px] lg:h-[300px]  object-center object-cover rounded-t-xl"
            alt="donation cover"
          />

        <h1
          onClick={() => setOptions(!options)}
          className="absolute cursor-pointer p-2 rounded-full drop-shadow-lg top-2 right-2 bg-white"
        >
          <BsThreeDotsVertical />
        </h1>

        {options && (
          <motion.div
            initial={{ opacity: 0,top: 0 }}
            animate={{ opacity: 1, top:8 }}
            exit={{ exit: 0 }}
            className="bg-white flex flex-col gap-2 justify-center p-2 absolute top-1 right-2 rounded-lg min-w-[30%] drop-shadow-lg "
          >
            <div className="w-full  rounded-full p-1 flex flex-row justify-end cursor-pointer">
            <BsX onClick={() => setOptions(!options)} className="text-md bg-gray-600 text-white rounded-full" />
            </div>
            
            <h1
            onClick={() => navigate(`/donate/${donation._id}`)}
            className="bg-gray-50 cursor-pointer hover:bg-gray-500  hover:text-white rounded-md flex flex-row justify-between items-center content-center gap-2 p-2"
          >
            View
            <AiFillEye />
          </h1>
            <h1
            onClick={() => navigate(`/dashboard/donate/${donation._id}/edit`)}
            className="bg-gray-50 cursor-pointer hover:bg-green-500 active:bg-green-500 active:text-white hover:text-white rounded-md flex flex-row justify-between items-center content-center gap-2 p-2"
          >
            Edit
            <AiFillEdit />
          </h1>
          <h1
            onClick={() => deleteHandler(donation._id)}
            className="bg-gray-50 cursor-pointer hover:bg-red-500 hover:text-white rounded-md flex flex-row justify-between items-center content-center gap-2 p-2"
          >
            Delete
            <AiFillDelete />
          </h1>
          </motion.div>
        )}
      </div>

      {/* text section */}
      <div className="  flex flex-col items-start justify-center content-center p-2  bg-gray-50 rounded-xl">
          <h1 className="font-bold p-1">{donation?.name}</h1>
          <p className="text-sm text-left max-w-sm  text-gray-600  p-1 ">{description}</p>
         
        </div>
    </motion.div>
   
  );
}

export default DashDonationItem;
