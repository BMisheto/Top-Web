import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { motion } from 'framer-motion';
import {Link} from "react-router-dom"
import { AiFillRightCircle } from 'react-icons/ai';
import { listEvents } from '../../../features/actions/eventActions';
import { listUsers } from '../../../features/actions/userActions';

function UserItems() {
    const dispatch = useDispatch();
    const location = useLocation();
    const params = useParams();
  
    const [filters, setFilters] = useState(false);
  
    const userList = useSelector((state) => state.userList);
  
    const { loading, error, count } = userList;
  
    
  
    const route = location.route;
  
    /* FIRING OFF THE ACTION CREATORS USING DISPATCH */
  
    let keyword =
      location.search; /* IF USER SEARCHES FOR ANYTHING THEN THIS KEYWORD CHANGES AND USE EFFECT GETS TRIGGERED */
  
    useEffect(() => {
      let _;
      dispatch(listUsers(keyword));
    }, [dispatch, keyword]);
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05 }}
    className="flex flex-col justify-center items-center content-center gap-1 md:gap-2 text-[13px] md:text-[14px]  bg-gray-50 border-t border-l border-r border-gray-100 hover:drop-shadow-xl p-1 md:p-2 rounded-xl  w-full"
  >
    {/* big number */}
    <h1 className="text-[2rem] md:text-[4rem] font-[450] drop-shadow-md ">
      {count}
    </h1>
    <Link
      to="/dashboard/users"
      className="flex flex-row justify-center items-center content-center gap-1 text-blue-600 hover:text-blue-500 "
    >
      Users <AiFillRightCircle />
    </Link>
  </motion.div>
  )
}

export default UserItems