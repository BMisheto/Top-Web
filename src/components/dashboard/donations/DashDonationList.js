import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router';
import { motion } from 'framer-motion';
import { CgCalendar } from 'react-icons/cg';
import { BsCalendarPlus } from 'react-icons/bs';
import { DONATION_CREATE_RESET } from '../../../features/constants/donationConstants';
import { createDonation, listDonations } from '../../../features/actions/donationsActions';
import DashEventItem from '../events/DashEventItem';
import DashDonationItem from './DashDonationItem';
import Search from '../../search/Search';
import { HiCurrencyDollar } from "react-icons/hi";
import AdminSearch from '../navigation/AdminSearch';




function DashDonationList() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation();
  const params = useParams();
  const [choices,SetChoices] = useState(false);


  const donationList = useSelector((state) => state.donationList);

  const { donations, page, pages, loading, error } = donationList;



  const donationCreate = useSelector((state) => state.donationCreate);
  const {
    donation: createdDonation,
    success: successCreate,
    loading: loadingCreate,
    error: errorCreate,
  } = donationCreate;

 
  const { search } = useLocation();

  const route = location.route;

  /* FIRING OFF THE ACTION CREATORS USING DISPATCH */

  let keyword =
    location.search; /* IF USER SEARCHES FOR ANYTHING THEN THIS KEYWORD CHANGES AND USE EFFECT GETS TRIGGERED */

  useEffect(() => {
    dispatch({type: DONATION_CREATE_RESET})

    if(successCreate){
      navigate(`/dashboard/donate/${createdDonation._id}/edit`)
    } else {
      dispatch(listDonations(keyword));

    }
 
     
  

  }, [dispatch, 
    successCreate,createdDonation,keyword]);



  const createDonationHandler = () => {
    dispatch(createDonation());
  };



  return (
    <motion.div className=" p-1 md:p-2   flex flex-col gap-3 justify-center content-center items-center text-black  mx-auto bg-white mt-[100px]">

    <div className='w-full flex flex-row items-end justify-end'>
        <motion.button 
        onClick={createDonationHandler}
        className="flex flex-row items-center content-center justify-center gap-1 md:gap-2 bg-gray-100 border hover:bg-gray-200  rounded-full min-w-[150px] text-sm p-2 md:p-2">
            Add Donation
            
            <HiCurrencyDollar/>
        </motion.button>

    </div>

    <div className="w-full">
        <AdminSearch />

    </div>




{/* <Search /> */}

{/* center items */}
{loading ? <div>Loading</div> : ""}


{donations == 0 & !loading ? (
  <div className="flex flex-col  justify-center items-center content-center min-h-[300px] min-w-[200px] md:min-w-[300px] md:w-[90%] bg-gray-50 border border-gray-100 rounded-xl">
  <h1 className="text-gray-500 text-md md:text-xl">0 Events</h1>
</div>


) : (
  <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 justify-center content-center items-center gap-3 md:gap-4   ">
    {donations?.map((donation) => (
      <DashDonationItem donation={donation} />
    )
    )}
  
  
  
</div>

)}




</motion.div>
  )
}

export default DashDonationList