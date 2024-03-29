import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router';
import {listEvents} from "../../features/actions/eventActions"
import Search from '../search/Search';
import { motion } from 'framer-motion';
import EventItem from './EventItem';
import EventLoading from '../loading/EventLoading';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsCalendar, BsFilePostFill, BsX } from 'react-icons/bs';
import { HiCurrencyDollar } from 'react-icons/hi';
import Paginate from '../dashboard/navigation/Paginate';
function EventList() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const location = useLocation();
    const params = useParams();
    const [choices,SetChoices] = useState(false);
  
  
    const eventList = useSelector((state) => state.eventList);
  
    const { events, page, pages, loading, error } = eventList;
  
   
    const { search } = useLocation();
  
    const route = location.route;
  
    /* FIRING OFF THE ACTION CREATORS USING DISPATCH */
  
    let keyword =
      location.search; /* IF USER SEARCHES FOR ANYTHING THEN THIS KEYWORD CHANGES AND USE EFFECT GETS TRIGGERED */
  
    useEffect(() => {
      let _;
   
        dispatch(listEvents(keyword));
    
  
    }, [dispatch, keyword]);


    const showChoices = () => {
    SetChoices(!choices);
  };

  const createPostHandler = () => {
    navigate("/feed/create/post");
  };
  const createEventHandler = () => {
    navigate("/feed/create/event");
  };
  const createDonationHandler = () => {
    navigate("/feed/create/donation");
  };


  
   
  
  return (
    <motion.div className=" p-1 md:p-2   flex flex-col gap-3 justify-center content-center items-center text-black  mx-auto bg-white mt-[100px]">

    

    <Search />

    {/* center items */}
    {loading ? <EventLoading /> : ""}


    


    {events == 0 & !loading ? (
      <div className="flex flex-col  justify-center items-center content-center min-h-[300px] min-w-[200px] md:min-w-[300px] md:w-[90%] bg-gray-50 border border-gray-100 rounded-xl">
      <h1 className="text-gray-500 text-md md:text-xl">0 Events</h1>
    </div>


    ) : (
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 justify-center content-center items-center gap-3 md:gap-4   ">
        {events?.map((event) => (
          <EventItem key={event._id} event={event} />
        )
        )}
      
      
      
    </div>

    )}

    {/* pagination */}
<div className="p-2 md:p-3 mt-[20px]">
        <Paginate page={page} pages={pages} keyword={keyword} route="/events" />
      </div>





     <div className="fixed bottom-10  right-10">
        {/* sema choice */}

        {choices ? (
          <motion.div
            animate={{ bottom: 0, opacity: 1 }}
            initial={{ bottom: -100, opacity: 0 }}
            exit={{ bottom: -800, opacity: 0 }}
            className="flex flex-col p-2 md:p-3 gap-3"
          >
            <motion.div
              onClick={createPostHandler}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
              className=" text-sm md:text-[17px] flex flex-row items-center content-center justify-center gap-2 bg-gray-700 text-white rounded-full p-2 min-w-[120px] h-[50px] cursor-pointer shadow-lg"
            >
              <h1>Post</h1>

              <BsFilePostFill />
            </motion.div>
            <motion.div
            onClick={createEventHandler}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
              className=" text-sm md:text-[17px] flex flex-row items-center content-center justify-center gap-2 bg-gray-700 text-white rounded-full p-2 min-w-[120px] h-[50px] cursor-pointer shadow-lg"
            >
              <h1>Event</h1>

              <BsCalendar />
            </motion.div>
            <motion.div
             onClick={createDonationHandler}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
              className=" text-sm md:text-[17px] flex flex-row items-center content-center justify-center gap-2 bg-gray-700 text-white rounded-full p-2 min-w-[120px] h-[50px] cursor-pointer shadow-lg"
            >
              <h1>Donation</h1>

              <HiCurrencyDollar />
            </motion.div>
          </motion.div>
        ) : (
          ""
        )}

        {/* sema button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={showChoices}
          className="flex flex-row items-center content-center justify-center bg-black text-white  p-2 rounded-full min-w-[110px] cursor-pointer"
        >
          <h1 className="p-1 text-[1.1rem] md:text-[1.3rem]">Sema</h1>
          {choices ? (
            <BsX className="text-[1rem]  md:text-[1.5rem]" />
          ) : (
            <AiOutlinePlus className="text-[1rem]  md:text-[1.5rem]" />
          )}
        </motion.div>
      </div>

    

    
  </motion.div>
  )
}

export default EventList