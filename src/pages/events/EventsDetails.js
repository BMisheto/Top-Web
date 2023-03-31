import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { listEventDetails } from "../../features/actions/eventActions";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowLeft, BsEye, BsInfoCircle } from "react-icons/bs";
import { REACT_API_URL } from "../../utilities/utils";
import { AiFillCalendar } from "react-icons/ai";
import {
  addAttending,
  listAttendance,
} from "../../features/actions/attendingActions";
import AttendingModal from "../../components/events/AttendingModal";
import { Link } from "react-router-dom";

function EventsDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modal, SetModal] = useState(false);
  const [isLogged, SetisLogged] = useState(false);
  const [isListed, SetIsListed] = useState(false);
  const [isAttending, SetIsAttending] = useState(false);

  const getId = useParams();
  const eventId = getId.id;

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const eventDetails = useSelector((state) => state.eventDetails);
  const { loading, event, error } = eventDetails;

  const attendingList = useSelector((state) => state.attendingList);
  const { attending, count: attendingCount } = attendingList;

  let isUserAttending = isAttending;

  // product detail dispatch
  useEffect(() => {
    dispatch(listEventDetails(eventId));
    dispatch(listAttendance(eventId));

    if (!userInfo || userInfo == null) {
      SetisLogged(false);
    } else {
      SetisLogged(true);
      let isAttending = attending.some(
        (attendee) => attendee.user == userInfo.id
      );
    }
  }, [dispatch, eventId, userInfo, isAttending]);

  // const isUserAttending = attending.some(
  //   (attendee) => attendee.user == userInfo.id
  // );

  const handleModal = () => {
    SetModal(!modal);
  };

  return (
    <div className="subpixel-antialiased min-h-screen inset-0 flex flex-col justify-center items-center content-center font-sans    mx-auto  lg:align-center lg:text-centen rounded-b-2xl p-3 mt-[50px] ">
      {/* central div */}

      {loading ? (
        <div className="flex flex-col justify-center items-start content-center gap-3 md:gap-5 p-2 md:p-3  w-full md:w-[80%] lg:w-[80%]">
          <h1>Loading</h1>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-start content-center gap-3 md:gap-5 p-2 md:p-3  w-full md:w-[80%] lg:w-[80%]">
          {/* back button */}
          <motion.div
            onClick={() => navigate(-1)}
            className="mb-[20px] flex flex-row items-center content-center justify-center text-gray-500 hover:text-black min-w-[100px] rounded-full p-1 md:p-2 gap-1 md:gap-2 cursor-pointer"
          >
            <BsArrowLeft />
            <h1>Back</h1>
          </motion.div>

          <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2 md:gap-3">
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
              <div className="flex flex-col gap-2 text-lg font-bold">
                {event.name}
              </div>

              <div className="flex flex-row justify-between  ">
                <div className="flex flex-col gap-1 md:gap-2 justify-center  text-md items-start content-start">
                  <h1 className=" font-semibold text-gray-500">Start Date</h1>
                  <p className="text-sm border bg-gray-100 p-1 md:p-2 rounded-lg text-gray-600">
                    {event.start_date}
                  </p>
                </div>
                <div className="flex flex-col gap-1 md:gap-2 justify-center  text-md items-end content-start">
                  <h1 className=" font-semibold text-gray-500">End Date</h1>
                  <p className="text-sm border bg-gray-100 p-1 md:p-2 rounded-lg text-gray-600">
                    {event.end_date}
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between  ">
                <div className="flex flex-col gap-1 md:gap-2 justify-center  text-md items-start content-start">
                  <h1 className=" font-semibold text-gray-500">Location</h1>
                  <p className="text-sm border bg-gray-100 p-1 md:p-2 rounded-lg text-gray-600">
                    {event.location}
                  </p>
                </div>
                <div className="flex flex-col gap-1 md:gap-2 justify-center  text-md items-end content-start">
                  <h1 className=" font-semibold text-gray-500">Venue</h1>
                  <p className="text-sm border bg-gray-100 p-1 md:p-2 rounded-lg text-gray-600">
                    {event.venue}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-1 md:gap-2 justify-center  text-md items-end content-start">
                <h1 className=" font-semibold text-gray-500">Attending</h1>

                <div className="flex flex-row gap-2 justify-evenly items-center content-center">
                  <p className="text-sm border bg-gray-100 p-1 md:p-2 rounded-lg text-gray-600">
                    {attendingCount}
                  </p>
                </div>
              </div>

              <p className="max-w-lg">{event.description}</p>

              {modal && (
                <AnimatePresence exitBeforeEnter={false}>
                  <AttendingModal
                    event={event}
                    isAttending={isAttending}
                    handleClose={handleModal}
                  />
                </AnimatePresence>
              )}

              {isLogged ? (
                <div>
                  {!isAttending && (
                    <div className="w-full">
                      <motion.button
                        onClick={handleModal}
                        className="self-end flex flex-row items-center justify-center content-center gap-2  text-white bg-green-500 hover:border-green-500 hover:bg-green-500 hover:text-white min-w-[100px] w-full  rounded-lg p-2 h-[50px] hover:drop-shadow-xl 
  "
                      >
                        Attend
                        <AiFillCalendar />
                      </motion.button>
                    </div>
                  )}
                  {iuserAttending && (
                    <div className="w-full">
                      <motion.button
                        onClick={handleModal}
                        className="self-end flex flex-row items-center justify-center content-center gap-2  text-white bg-gray-700 hover:border-green-500 hover:bg-gray-800 hover:text-white min-w-[100px]  w-full  rounded-lg p-2 h-[50px] hover:drop-shadow-xl 
  "
                      >
                        Remove
                        <AiFillCalendar />
                      </motion.button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-row gap-2 justify-center content-center items-center bg-slate-100 border p-2 rounded-xl">
                  <BsInfoCircle />
                  Log in to be able to attend
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventsDetails;
