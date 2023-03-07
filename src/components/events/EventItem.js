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
        className="flex flex-col rounded-xl  border-b justify-start content-start items-start bg-gray-50 min-h-[300px] drop-shadow-xl cursor-pointer "
      >
        {/* image section */}
        <div className="w-full relative">
          <img
            src={`${REACT_API_URL}${event.event_cover}`}
            className="h-[200px] w-full md:w-full md:h-[300px]  lg:w-full lg:h-[300px]  object-center object-cover rounded-t-xl"
            alt="event cover"
          />
        </div>

        {/* text section */}
        <div className="p-2 md:p-3 flex flex-col items-start justify-center content-center gap-1  bg-gray-50 rounded-b-xl w-full">
          <h1 className="font-bold text-lg p-1">{event.name}</h1>
          <div className="flex flex-row justify-between w-full text-sm text-gray-800">
            <h1 className="text bg-gray-200 p-1 md:p-2 rounded-md">
              {event.location}
            </h1>
            <h1 className="text-sm bg-gray-200 p-1 md:p-2 rounded-md">
              {event.start_date}
            </h1>
          </div>

          <p className="text-sm text-left max-w-sm p-1 text-gray-600">
            {description}
          </p>

         
        </div>
      </motion.div>
    </Link>
  );
}

export default EventItem;
