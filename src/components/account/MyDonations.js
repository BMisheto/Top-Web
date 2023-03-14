import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router';
import { listMyDonations } from '../../features/actions/donationsActions';
import { motion } from 'framer-motion';
import { AiOutlineRight } from 'react-icons/ai';
import MyDonationItem from '../donations/MyDonationItem';
import { Link } from 'react-router-dom';

function MyDonations() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation();
  const params = useParams();
  const [choices,SetChoices] = useState(false);


  const donationMyList = useSelector((state) => state.donationMyList);

  const { donations, page, pages, loading, error } = donationMyList;


  const { search } = useLocation();

  const route = location.route;

  /* FIRING OFF THE ACTION CREATORS USING DISPATCH */

  let keyword =
    location.search; /* IF USER SEARCHES FOR ANYTHING THEN THIS KEYWORD CHANGES AND USE EFFECT GETS TRIGGERED */

  useEffect(() => {
    dispatch(listMyDonations(keyword));
  }, [dispatch, keyword]);
  return (
    <motion.div className=" p-1 md:p-2   flex flex-col gap-3  text-black  mx-auto bg-white ">
    <div className="flex flex-row justify-between items-center content-center">
      <h1>Your Events</h1>

      <Link
        to={"/account/donations"}
        className="flex flex-row gap-1 items-center content-center justify-center  md:gap-2"
      >
        View All
        <AiOutlineRight />
      </Link>
    </div>

    {/* center items */}
    {loading ? <div>Loading</div> : ""}

    {(donations == 0) & !loading ? (
      <div className="flex flex-col  justify-center items-center content-center min-h-[300px] min-w-[200px] md:min-w-[300px] md:w-[90%] bg-gray-50 border border-gray-100 rounded-xl">
        <h1 className="text-gray-500 text-md md:text-xl">0 Donations</h1>
      </div>
    ) : (
      <div className="flex flex-col md:grid md:grid-cols-2 w-full lg:grid-cols-3 justify-center content-center items-center gap-3 md:gap-4   ">
        {donations?.map((donation) => (
          <MyDonationItem key={donation._id} donation={donation} />
        ))}
      </div>
    )}
  </motion.div>
  )
}

export default MyDonations