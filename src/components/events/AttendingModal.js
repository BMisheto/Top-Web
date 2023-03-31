import React, { lazy, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Backdrop from "../backdrop/Backdrop";
import { motion } from "framer-motion";
import { BsInfo, BsInfoCircleFill, BsX } from "react-icons/bs";
import { REACT_API_URL } from "../../utilities/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  addAttending,
  removeAttending,
} from "../../features/actions/attendingActions";
import Message from "../message/Message";

function AttendingModal({ handleClose, event, isAttending }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [NewError, setNewError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");
  const [notlogged, setNotLogged] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo == "") {
      setNotLogged(true);
    } else {
      setUser(userInfo.id);
    }
  }, [userInfo]);

  const handleSubmit = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("user", user);

    fetch(`${REACT_API_URL}/events/attending/add/${event._id}/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        window.location.reload();
      })
      .catch((error) => {
        setLoading(false);
        setNewError(true);
        setMessage(error);
      });
  };
  const handleRemove = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("user", user);

    fetch(`${REACT_API_URL}/events/attending/remove/${event._id}/`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        window.location.reload();
      })
      .catch((error) => {
        setLoading(false);
        setNewError(true);
        setMessage(error);
      });
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className=" min-w-[90%] min-h-[400px] md:min-w-[400px] md:right-10 border rounded-2xl p-2 md:p-3 flex flex-col items-start content-start fixed bg-white z-40  gap-2 drop-shadow-lg bottom-4"
      >
        {/* close button */}
        <div className="w-full flex flex-row items-end content-end justify-end ">
          <button
            onClick={handleClose}
            className="bg-gray-50 flex flex-row items-center content-center justify-center gap-2 p-1 rounded-full border"
          >
            <h1 className="text-sm">Close</h1>
            <BsX className="bg-gray-600 text-white rounded-full" />
          </button>
        </div>

        {/* items */}

        {loading ? (
          <div className="w-full flex flex-col gap-2 items-center content-center justify-center">
            <div className="bg-gray-100 h-[130px] md:h-[200px] w-full rounded-xl animate-pulse"></div>
            <div className="bg-gray-100 h-[50px] w-full rounded-xl animate-pulse"></div>
            <div className=" h-[100px] animate-pulse ">Loading...</div>
          </div>
        ) : (
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-2 w-full p-1 md:p-2">
              <img
                src={`${REACT_API_URL}${event.event_cover}`}
                loading={lazy}
                className="w-full h-[130px] md:h-[200px] rounded-xl object-cover object-center drop-shadow-xl"
              />
            </div>

            <div className="flex flex-col justify-center content-center items-start p-1 md:p-2">
              <h1 className="text-lg font-semibold">{event.name}</h1>
              <h1 className="flex flex-col text-[15px] md:text-[15px] text-gray-700 ">
                Venue{"   "}
                <span className="text-gray-500 font-semibold">
                  {event.venue}
                </span>
              </h1>
              <h1 className="flex flex-col text-[15px] md:text-[15px] text-gray-700 ">
                Location{"   "}
                <span className="text-gray-500 font-semibold">
                  {event.location}
                </span>
              </h1>
              <h1 className="flex flex-col text-[15px] md:text-[15px] text-gray-700 ">
                Start Date{"   "}
                <span className="text-gray-500 font-semibold">
                  {event.start_date}
                </span>
              </h1>
            </div>

            {isAttending ? (
              <p className="p-2 bg-gray-50 border border-gray-100 rounded-xl flex flex-row items-center content-center justify-start gap-2 ">
                <BsInfoCircleFill className="text-gray-500" />
                Remove from list
              </p>
            ) : (
              <p className="p-2 bg-gray-50 border border-gray-100 rounded-xl flex flex-row items-center content-center justify-start gap-2 ">
                <BsInfoCircleFill className="text-gray-500" /> Confirm attending
                this event
              </p>
            )}

            {NewError && <Message type="error">{message}</Message>}

            <div className="flex flex-row justify-between items-center content-center p-1">
              {isAttending ? (
                <button
                  onClick={() => handleRemove()}
                  className="text-green-500 rounded-lg min-w-[80px] p-2"
                >
                  Remove
                </button>
              ) : (
                <button
                  onClick={(e) => handleSubmit()}
                  className="text-green-500 rounded-lg min-w-[80px] p-2"
                >
                  Confirm
                </button>
              )}

              <button
                onClick={handleClose}
                className="bg-red-500 text-white rounded-lg min-w-[80px] p-2"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </Backdrop>
  );
}

export default AttendingModal;
