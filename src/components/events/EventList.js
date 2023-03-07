import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router';
import {listEvents} from "../../features/actions/eventActions"
import Search from '../search/Search';
import { motion } from 'framer-motion';
import EventItem from './EventItem';
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


  
   
  
  return (
    <motion.div className=" p-1 md:p-2   flex flex-col gap-3 justify-center content-center items-center text-black  mx-auto bg-white mt-[100px]">

    

    <Search />

    {/* center items */}
    {loading ? <div>Loading</div> : ""}


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

    

    
  </motion.div>
  )
}

export default EventList