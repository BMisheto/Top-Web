import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router';
import { listDonations } from '../../features/actions/donationsActions';
import Search from '../search/Search';
import DonateItem from './DonateItem';
import { motion } from 'framer-motion';

function DonationList() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const location = useLocation();
    const params = useParams();
    
  
  
    const donationList = useSelector((state) => state.donationList);
  
    const { donations, page, pages, loading, error } = donationList;
  
   
    const { search } = useLocation();
  
    const route = location.route;
  
    /* FIRING OFF THE ACTION CREATORS USING DISPATCH */
  
    let keyword =
      location.search; /* IF USER SEARCHES FOR ANYTHING THEN THIS KEYWORD CHANGES AND USE EFFECT GETS TRIGGERED */
  
    useEffect(() => {
      let _;
   
        dispatch(listDonations(keyword));
    
  
    }, [dispatch, keyword]);
  return (
    <motion.div className=" p-1 md:p-2   flex flex-col gap-3 justify-center content-center items-center text-black  mx-auto bg-white mt-[100px]">

    

    <Search />

    {/* center items */}
    {loading ? <div>Loading</div> : ""}


    {donations == 0 & !loading ? (
      <div className="flex flex-col  justify-center items-center content-center min-h-[300px] min-w-[200px] md:min-w-[300px] md:w-[90%] bg-gray-50 border border-gray-100 rounded-xl">
      <h1 className="text-gray-500 text-md md:text-xl">0 Events</h1>
    </div>


    ) : (
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 justify-center content-center items-center gap-3 md:gap-4   ">
        {donations?.map((donation) => (
          <DonateItem key={donation._id} donation={donation} />
        )
        )}
      
      
      
    </div>

    )}

    

    
  </motion.div>
  )
}

export default DonationList