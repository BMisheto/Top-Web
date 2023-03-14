import React from 'react'
import AllProfileDonations from '../../../components/donations/AllProfileDonations';
import { motion } from 'framer-motion';

function AllMyDonation() {
  return (
    <motion.main className="min-h-[500px]">
    <div className="subpixel-antialiased min-h-screen inset-0 flex flex-col justify-center items-center font-sans    mx-auto lg:justify-center lg:align-center lg:text-center rounded-b-2xl p-3  ">
    
      {/* <AllProfilePosts /> */}

      <AllProfileDonations />
      
    
    </div>
  </motion.main>
  )
}

export default AllMyDonation