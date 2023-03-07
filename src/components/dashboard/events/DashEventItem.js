import React from "react";
import { REACT_API_URL } from "../../../utilities/utils";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../../../features/actions/eventActions";

function DashEventItem({ event }) {
  const navigate = useNavigate();
  const dispatch =  useDispatch();
  const description = event.description.length > 100 ? `${event.description.substring(0, 100)}...` : event.description;
   /* HANDLER */
   const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this donation ?")) {
      dispatch(deleteEvent(id));
     
    }
  };
  return (
    <motion.div className="flex flex-col rounded-xl  border-b justify-start content-start items-start bg-gray-50 min-h-[200px] border cursor-pointer ">
      {/* image section */}
      <div className="w-full relative">
        <img
          src={`${REACT_API_URL}${event.event_cover}`}
          className="h-auto w-full md:w-full md:h-[300px]  lg:w-full lg:h-[300px]  object-center object-cover rounded-t-xl"
          alt="event cover"
        />
      </div>

      {/* text section */}
      <div className="p-2 md:p-3 flex flex-col items-start justify-center content-center gap-1  bg-gray-50 rounded-b-xl w-full">
        <h1 className="font-bold text-md p-1">{event.name}</h1>
        <h1 className="text-sm max-w-sm">{description}</h1>

        <div className="flex flex-row justify-between text-sm items-center content-center w-full">
          <button
            onClick={() => navigate(`/dashboard/events/${event._id}/edit`)}
            className="flex flex-row gap-1 bg-gray-200  hover:text-white hover:bg-green-500 rounded-full p-1 md:p-2 min-w-[80px] items-center content-center justify-center"
          >
            Edit
            <AiFillEdit />
          </button>
          <button
           onClick={() => deleteHandler(event._id)}
           className="flex flex-row gap-1 text-white bg-red-500 hover:bg-red-700 rounded-full p-1 md:p-2 min-w-[80px] items-center content-center justify-center">
            Delete
            <AiFillDelete />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default DashEventItem;
