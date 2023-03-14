import React, { useEffect, useState } from 'react'
import { AiFillDelete, AiFillEdit, AiFillEye } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteEvent } from '../../features/actions/eventActions';
import { REACT_API_URL } from '../../utilities/utils';
import { motion } from 'framer-motion';
import { BsThreeDotsVertical, BsX } from 'react-icons/bs';

function MyEventItem({event}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [options, setOptions] = useState(false);
  const description =
    event.description.length > 100
      ? `${event.description.substring(0, 100)}...`
      : event.description;

  const eventDelete = useSelector((state) => state.eventDelete);
  const { loading, success, error } = eventDelete;

  useEffect(() => {
    if (success) {
      window.location.reload();
    } else {
      return;
    }
  }, [success]);
  /* HANDLER */
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this Event ?")) {
      dispatch(deleteEvent(id));
    }
  };
  return (
    <motion.div 
    
    className="flex flex-col rounded-xl border border-gray-100   justify-center content-center bg-gray-50 min-h-[300px]">
      {/* image section */}
      <div className="max-w-[400px] md:w-full relative">
      <img
            src={`${REACT_API_URL}${event?.event_cover}`}
            className="h-[300px] w-full md:w-[400px] md:h-[300px]  lg:w-[400px] lg:h-[300px]  object-center object-cover rounded-t-xl"
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
            className="bg-white flex flex-col gap-1 justify-center p-2 absolute top-1 right-2 rounded-lg min-w-[30%] drop-shadow-lg "
          >
            <div className="w-full p-1 flex flex-row justify-end cursor-pointer">
            <BsX onClick={() => setOptions(!options)} className="text-md bg-gray-600 text-white rounded-full" />
            </div>
            
            <h1
            onClick={() => navigate(`/events/${event._id}`)}
            className=" cursor-pointer hover:bg-gray-500  hover:text-white rounded-md flex flex-row justify-between items-center content-center gap-2 p-2"
          >
            View
            <AiFillEye />
          </h1>
            <h1
            onClick={() => navigate(`/account/events/${event._id}/edit`)}
            className=" cursor-pointer hover:bg-gray-500 active:bg-green-500 active:text-white hover:text-white rounded-md flex flex-row justify-between items-center content-center gap-2 p-2"
          >
            Edit
            <AiFillEdit />
          </h1>
          <h1
            onClick={() => deleteHandler(event._id)}
            className=" cursor-pointer hover:bg-red-500 hover:text-white rounded-md flex flex-row justify-between items-center content-center gap-2 p-2"
          >
            Delete
            <AiFillDelete />
          </h1>
          </motion.div>
        )}
      </div>

      {/* text section */}
      <div className="  flex flex-col items-start justify-center content-center p-2  bg-gray-50 rounded-xl">
          <h1 className="font-bold p-1">{event?.name}</h1>
          <p className="text-sm text-left max-w-sm  text-gray-600  p-1 ">{description}</p>
         
        </div>
    </motion.div>
  )
}

export default MyEventItem