import React from "react";
import { AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { REACT_API_URL, REACT_APP_URL } from "../../utilities/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function EventItem({ event }) {
  const description = event.description.length > 100 ? `${event.description.substring(0, 100)}...` : event.description;
  return (
    <Link to={`/events/${event._id}`}>
    {/* item */}
    <motion.div
    whileHover={{ scale: 1.02 }}
     className="flex flex-col rounded-xl border border-gray-100   justify-center content-center bg-gray-50 min-h-[300px]">
      {/* image section */}
      <div className="max-w-[400px] md:w-full relative">
        <img
          src={`${REACT_API_URL}${event?.event_cover}`}
          className="h-[300px] w-full md:w-[400px] md:h-[300px]  lg:w-[400px] lg:h-[300px]  object-center object-cover rounded-t-xl"
          alt="donation cover"
        />

        <div className="absolute bottom-2 left-2">
        <h1 className="bg-gray-100 border border-gray-300 p-2 rounded-lg bg-opacity-90 text-[13px]  ">{event.location}</h1>
        

        </div>
        <div className="absolute bottom-2 right-2">
          <h1 className="bg-gray-100 border border-gray-300 p-2 rounded-lg bg-opacity-90 text-[13px] ">{event.start_date}</h1>
        

        </div>
      </div>

      {/* text section */}
      <div className="  flex flex-col items-start justify-center content-center p-2  bg-gray-50 rounded-xl">
        <h1 className="font-bold p-1">{event?.name}</h1>
        <p className="text-sm text-left max-w-sm  text-gray-600  p-1 ">{description}</p>
       
      </div>
    </motion.div>
  </Link>
  );
}

export default EventItem;
