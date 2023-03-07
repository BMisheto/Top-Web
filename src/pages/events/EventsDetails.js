import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { listEventDetails } from "../../features/actions/eventActions";
import { motion } from "framer-motion";
import { BsArrowLeft } from "react-icons/bs";
import { REACT_API_URL } from "../../utilities/utils";

function EventsDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getId = useParams();
  const eventId = getId.id;

  const eventDetails = useSelector((state) => state.eventDetails);
  const { loading, event, error } = eventDetails;

  // product detail dispatch
  useEffect(() => {
    dispatch(listEventDetails(eventId));
  }, [dispatch, eventId]);
  return (
    <div className="subpixel-antialiased min-h-screen inset-0 flex flex-col justify-center items-center font-sans    mx-auto lg:justify-center lg:align-center lg:text-centen rounded-b-2xl p-3 mt-[100px] ">
      {/* central div */}

      <div className="flex flex-col justify-center items-start content-center gap-3 md:gap-5 p-2 md:p-3">
        {/* back button */}
        <motion.div
          whileHover={{ scale: 0.97 }}
          onClick={() => navigate(-1)}
          className="mb-[50px] flex flex-row items-center content-center justify-center bg-black text-white min-w-[100px] rounded-full p-1 md:p-2 gap-1 md:gap-2 cursor-pointer"
        >
          <BsArrowLeft />
          <h1>Back</h1>
        </motion.div>

        <div className="flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-3">
          {/* image and title */}
          <div className="flex flex-col gap-2">
            {/* title */}
            <div className="flex flex-col gap-2 w-full">
              <img
                src={`${REACT_API_URL}${event.event_cover}`}
                className="w-full h-[400px] rounded-xl md:[600px] object-cover object-center drop-shadow-xl"
              />
            </div>

            {/* title */}
            
          </div>
          {/* description */}
          <div className=" flex flex-col gap-2 md:gap-3">
          <div className="flex flex-col gap-2 text-lg font-bold">{event.name}</div>
          <div className="flex flex-row justify-between  ">
            <div className="flex flex-col gap-1 md:gap-2 justify-center  text-md items-start content-start">
              <h1 className=" font-semibold text-gray-500">Start Date</h1>
              <p className="text-sm border bg-gray-100 p-1 md:p-2 rounded-lg text-gray-600">{event.start_date}</p>

            </div>
            <div className="flex flex-col gap-1 md:gap-2 justify-center  text-md items-end content-start">
              <h1 className=" font-semibold text-gray-500">End Date</h1>
              <p className="text-sm border bg-gray-100 p-1 md:p-2 rounded-lg text-gray-600">{event.end_date}</p>

            </div>
          </div>
          <div className="flex flex-row justify-between  ">
            <div className="flex flex-col gap-1 md:gap-2 justify-center  text-md items-start content-start">
              <h1 className=" font-semibold text-gray-500">Location</h1>
              <p className="text-sm border bg-gray-100 p-1 md:p-2 rounded-lg text-gray-600">{event.location}</p>

            </div>
            <div className="flex flex-col gap-1 md:gap-2 justify-center  text-md items-end content-start">
              <h1 className=" font-semibold text-gray-500">Venue</h1>
              <p className="text-sm border bg-gray-100 p-1 md:p-2 rounded-lg text-gray-600">{event.venue}</p>

            </div>
          </div>
         
            <p className="max-w-lg">{event.description}</p>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsDetails;
