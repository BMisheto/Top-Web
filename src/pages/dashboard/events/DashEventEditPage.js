import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import AdminBar from "../../../components/dashboard/navigation/AdminBar";
import {
  listEventDetails,
  updateEvent,
} from "../../../features/actions/eventActions";
import {
  EVENT_DETAILS_REQUEST,
  EVENT_UPDATE_RESETS,
} from "../../../features/constants/eventCostants";
import { REACT_APP_URL } from "../../../utilities/utils";
import { motion } from "framer-motion";
import DateTimePicker from "react-datetime-picker";
import { MdUpdate } from "react-icons/md";
import UploadingLoader from "../../../components/loading/UploadingLoader";

function DashEventEditPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [venue, setVenue] = useState("");
  const [location, setLocation] = useState("");
  

  const [uploading, setUploading] = useState(false);

  const [coverImage, setCoverImage] = useState("");

  const [uploadingCover, setUploadingCover] = useState(false);

  const getId = useParams();
  const eventId = getId.id;

  const donationUpdate = useSelector((state) => state.donationUpdate);
  const {
    success: successUpdate,
    loading: loadingUpdate,
    error: errorUpdate,
  } = donationUpdate;

  const eventDetails = useSelector((state) => state.eventDetails);
  const { loading, event, error } = eventDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // product detail dispatch
  useEffect(() => {
    // CHECK IF PRODUCT WAS UDPATED
    if (successUpdate) {
      dispatch({ type: EVENT_UPDATE_RESETS });
      dispatch({ type: EVENT_DETAILS_REQUEST });
      navigate("/dashboard/event");
    } else {
      if (!event.name || event._id !== Number(eventId)) {
        dispatch(listEventDetails(eventId));
      } else {
        setName(event.name);
        setDescription(event.description);
        setStartDate(event.start_date);
        setEndDate(event.end_date);
        setVenue(event.venue);
        setLocation(event.location);

        setCoverImage(event.event_cover);
      }
    }
  }, [dispatch, event, eventId, navigate, successUpdate]);

  /* HANDLERS */

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      updateEvent({
        _id: eventId,
        name,
        description,
        start_date,
        end_date,
        venue,
        location,

        coverImage,
      })
    );
  };

  // DISPATCH TO UDPATE PRODUCT

  const coverImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("image", file);
    formData.append("event_id", eventId);

    setUploadingCover(true);

    try {
      const config = {
        header: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `${REACT_APP_URL}/events/upload/cover/`,
        formData,
        config
      );
      setCoverImage(data);
      setUploadingCover(false);
    } catch (error) {
      setUploadingCover(false);
    }
  };

  return (
    <motion.main className="min-h-[500px]">
      <AdminBar />

      <div className="subpixel-antialiased min-h-screen inset-0 flex justify-center items-center font-sans    mx-auto  p-3  mt-[70px] ">
        {/* main div */}
        <div className=" flex flex-col  ">
          {/* Heading */}

          <div className="flex flex-row justify-between items-center content-center w-full">
            <div className=" text-lg md:text-xl  p-2 text-gray-700 font-[500]">
              <h1>Event</h1>
            </div>

            <div className="text-lg md:text-xl  p-2 text-gray-700 font-bold">
              <h1>{event._id}</h1>
            </div>
          </div>

          {/* Product details */}

          <form
            onSubmit={submitHandler}
            className=" flex flex-col gap-2 md:gap-3 center w-full  items-center content-center"
          >
            {/* Product name & Offfer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 1, scale: 1 }}
              className="flex flex-col gap-1 justify-center md:gap-2 w-auto border-t border-l border-r p-1 md:p-2 rounded-xl"
            >
              {/* Name and More */}

              <div className="flex flex-col md:grid justify-center md:grid-cols-2 gap-1 md:gap-2 border-t border-l border-r rounded-xl  p-2 md:p-3 bg-[#fafafa] w-full h-full">
                <div className="flex flex-col gap-2 h-full w-full">
                  {/* event name */}
                  <div className="flex flex-col  justify-start content-start  items-start gap-1 md:gap-2 p-1 md:p-2 text-[13px] md:text-[15px] w-auto">
                    <h1 className="font-[500] text-gray-700">Name</h1>

                    <input
                      className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                                                            placeholder:text-[15px]
                                                            placeholder:pl-4  min-w-[300px] md:min-w-[320px] lg:min-w-[400px] h-[60px] drop-shadow-sm "
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Product Name"
                    />
                  </div>

                  {/* event venue */}
                  <div className="flex flex-col  justify-start content-start  items-start gap-1 md:gap-2 p-1 md:p-2 text-[13px] md:text-[15px] w-auto">
                    <h1 className="font-[500] text-gray-700">Venue</h1>

                    <input
                      className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                                                            placeholder:text-[15px]
                                                            placeholder:pl-4  min-w-[300px] md:min-w-[320px] lg:min-w-[400px] h-[60px] drop-shadow-sm "
                      type="text"
                      value={venue}
                      onChange={(e) => setVenue(e.target.value)}
                      required
                      placeholder="Product Name"
                    />
                  </div>
                  {/* event location */}
                  <div className="flex flex-col  justify-start content-start  items-start gap-1 md:gap-2 p-1 md:p-2 text-[13px] md:text-[15px] w-auto">
                    <h1 className="font-[500] text-gray-700">Location</h1>

                    <input
                      className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                                                            placeholder:text-[15px]
                                                            placeholder:pl-4  min-w-[300px] md:min-w-[320px] lg:min-w-[400px] h-[60px] drop-shadow-sm "
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                      placeholder="Event Name"
                    />
                  </div>
                </div>

                <div className="flex flex-col  h-full  gap-2">
                  {/* event Description */}
                  <div className="flex flex-col  justify-start content-start  items-start gap-1 md:gap-2 p-1 md:p-2 text-[13px] md:text-[15px] w-full h-full">
                    <h1 className="font-[500] text-gray-700">Description</h1>

                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Description"
                      className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                                                        placeholder:text-[15px]
                                                        placeholder:pl-4 min-w-[300px] md:min-w-[320px] lg:min-w-[400px] h-full text-[15px] min-h-[200px]"
                    ></textarea>
                  </div>

                  <div className="flex flex-col  justify-start content-start  items-start gap-1 md:gap-2 p-1 md:p-2 text-[13px] md:text-[15px] w-full h-full">
                    <h1 className="font-[500] text-gray-700">Start Date</h1>
                    <input
                      className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                                                            placeholder:text-[15px]
                                                            placeholder:pl-4  min-w-[300px] md:min-w-[320px] lg:min-w-[400px] h-[60px] drop-shadow-sm "
                      type="text"
                      value={start_date}
                      onChange={(e) => setStartDate(e.target.value)}
                      required
                      placeholder="Start Date"
                    />
                  </div>
                  <div className="flex flex-col  justify-start content-start  items-start gap-1 md:gap-2 p-1 md:p-2 text-[13px] md:text-[15px] w-full h-full">
                    <h1 className="font-[500] text-gray-700">End Date</h1>
                    <input
                      className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                                                            placeholder:text-[15px]
                                                            placeholder:pl-4  min-w-[300px] md:min-w-[320px] lg:min-w-[400px] h-[60px] drop-shadow-sm "
                      type="text"
                      value={end_date}
                      onChange={(e) => setEndDate(e.target.value)}
                      required
                      placeholder="Start Date"
                    />
                  </div>
                </div>
              </div>

              {/* Offer and Featured */}
              <div className="  border-l border-r rounded-xl  p-2 md:p-3 ">
                <button
                  type="submit"
                  className=" transition duration-100 delay-100 ease-in-out flex flex-row items-center content-center justify-center gap-2 md:gap-3  border-gray-200 bg-blue-600 text-white p-1 md:p-2 rounded-xl h-[50px] hover:drop-shadow-md hover:bg-blue-500 hover:border-blue-500 hover:text-white min-w-full md:min-w-[200px]"
                >
                  <h1>Update</h1>
                  <MdUpdate />
                </button>
              </div>
            </motion.div>

            {/* image upload */}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 1, scale: 1 }}
              className="flex flex-col md:grid md:grid-cols-2 justify-evenly gap-2 md:gap-3  border-t border-l border-r p-1  md:p-2 rounded-xl w-full "
            >
              {/* cover image */}
              <div className=" rounded-md items-start content-start flex flex-col gap-3 p-1   md:p-2 w-full ">
                <h1 className="font-[500] text-gray-700 text-[13px] md:text-[14px]">
                  Cover Image
                </h1>

                {uploadingCover ? (
                  <UploadingLoader />
                ) : (
                  <div className="flex flex-row items-start justify-evenly gap-2 w-full">
                    {coverImage && (
                      <div className="p-1">
                        <img
                          src={`${REACT_APP_URL}${coverImage}`}
                          className="w-[200px] h-[200px] object-center object-cover rounded-md drop-shadow-lg"
                        />
                      </div>
                    )}

                    {/* HANDLER */}

                    <div className="flex flex-col items-start content-start justify-evenly gap-2 p-1  ">
                      <input
                        type="text"
                        placeholder="Cover image"
                        className="max-w-[150px] text-[12px] outline-none"
                      />
                      <input
                        class="block w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 cursor-pointer focus:outline-none "
                        aria-describedby="file_input_help"
                        id="file_input"
                        type="file"
                        onChange={coverImageUpload}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </form>

          {/* navigation */}
          <div></div>
        </div>
      </div>
    </motion.main>
  );
}

export default DashEventEditPage;
