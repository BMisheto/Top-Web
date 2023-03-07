import React, { useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import {listDonationDetails} from "../../features/actions/donationsActions"
import { motion } from 'framer-motion';
import { REACT_API_URL } from '../../utilities/utils';
import { HiCurrencyDollar } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';

function DonationDetails() {
    const dispatch = useDispatch();
  const navigate = useNavigate();


  const [modal, setModal] = useState(true);

  const getId = useParams();
  const donationId = getId.id;

  const donationDetails = useSelector((state) => state.donationDetails);
  const { loading, donation, error } = donationDetails;

  // product detail dispatch
  useEffect(() => {
    dispatch(listDonationDetails(donationId));
  }, [dispatch, donationId]);


  console.log(donation)
  return (
    <div className="subpixel-antialiased min-h-screen inset-0 flex flex-col justify-center items-center font-sans    mx-auto lg:justify-center lg:align-center lg:text-centen rounded-b-2xl p-3 mt-[100px] ">
      {/* central div */}

      <div className="flex flex-col justify-center items-start content-center gap-3 md:gap-5 p-2 md:p-3">
        {/* back button */}
        <motion.div
          whileHover={{ scale: 0.97 }}
          onClick={() => navigate(-1)}
          className="mb-[50px] flex flex-row items-center content-center justify-center bg-black text-white min-w-[100px] rounded-full p-1 md:p-2 gap-1 md:gap-2 cursor-pointer"
        >
          <BsArrowLeft />
          <h1>Back</h1>
        </motion.div>

        <div className="flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-3">
          {/* image and title */}
          <div className="flex flex-col gap-2">
            {/* title */}
            <div className="flex flex-col gap-2 w-full">
              <img
                src={`${REACT_API_URL}${donation.donation_cover}`}
                className="w-full h-[400px] rounded-xl md:[600px] object-cover object-center drop-shadow-xl"
              />
            </div>

            {/* title */}
            
          </div>
          {/* description */}
          <div className=" flex flex-col gap-2 md:gap-3  p-2 md:p-3 mt-5 md:mt-0">
          <div className="flex flex-col gap-2 text-md font-bold">{donation?.name}</div>
          <div className="flex flex-row justify-between  p-2 md:p-3 ">
            <div className="flex flex-col gap-1 md:gap-2 justify-center  text-md items-start content-start">
              <h1 className=" font-semibold text-sm text-gray-500">Date</h1>
              <p className="text-sm border bg-gray-100 p-1 md:p-2 rounded-lg text-gray-600">{donation?.date}</p>

            </div>
            <div className="flex flex-col gap-1 md:gap-2 justify-center  text-md items-end content-start">
              <h1 className="  font-semibold text-sm text-gray-500">Donators</h1>
              <p className="text-sm border bg-gray-100 p-1 md:p-2 rounded-lg text-gray-600">{donation.total}</p>

            </div>
          </div>
          <div className="flex flex-row justify-between p-2 md:p-3 ">
            <div className="flex flex-col gap-1 md:gap-2 justify-center  text-md items-start content-start">
              <h1 className="  font-semibold text-sm text-gray-500">Collected</h1>
              <p className="text-sm border bg-gray-100 p-1 md:p-2 rounded-lg text-gray-600">100000.00</p>

            </div>
            <div className="flex flex-col gap-1 md:gap-2 justify-center  text-md items-end content-start">
              <h1 className=" font-semibold text-sm text-gray-500">Target</h1>
              <p className="text-sm border bg-gray-100 p-1 md:p-2 rounded-lg text-gray-600">{donation.target}</p>

            </div>
          </div>
         
            <p className="max-w-lg">{donation.description}</p>

            <div className='w-full'>
                <button
                onClick={() => setModal(!modal)}
                 className="self-end flex flex-row items-center justify-center content-center gap-2 border border-gray-400 text-green-500 hover:border-green-500 hover:bg-green-500 hover:text-white min-w-[100px] rounded-lg p-2 
                ">Donate

                <HiCurrencyDollar />


                </button>
            </div>
           
          </div>


          {modal && (

<div className='fixed top-1/2 bottom-0  z-50 bg-gray-100 flex flex-col items-center content-center justify-center  border border-gray-300 w-[300px] md:w-[300px] rounded-xl'>
  <div className='flex flex-col  p-2 md:p-3 gap-3 md:gap-4 items-center content-center justify-center'>
    <div onClick={() => setModal(!modal)} className="cursor-pointer flex flex-row text-lg items-center content-center justify-center gap-2 md:gap-3">
      <h1>close</h1>
      <AiFillCloseCircle />
      </div>
    <div className='flex flex-row justify-start gap-2 md:gap-3'>
    <input type="radio"  />
      <h1 className='text-lg'>
        Mpesa
      </h1>
      

    </div>
    <div className='flex flex-row justify-start gap-2 md:gap-3'>
    <input type="radio"  />
      <h1 className='text-lg'>
        Tigo Pesa
      </h1>
      

    </div>
    <div className='flex flex-row justify-start gap-2 md:gap-3'>
    <input type="radio"  />
      <h1 className='text-lg'>
        Mastercard
      </h1>
      

    </div>
    <div className='flex flex-row justify-start gap-2 md:gap-3'>
    <input type="radio"  />
      <h1 className='text-lg'>
        Visa
      </h1>
      

    </div>
    <p className='bg-gray-300 text-center p-2 md:p-3 rounded-xl'>
      We haven't activated this feature for now
    </p>
    
   
    </div>


</div>



          )}

        
        </div>
      </div>
    </div>
  )
}

export default DonationDetails