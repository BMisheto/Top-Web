import React from 'react';
import { motion } from 'framer-motion';
import MyDonations from '../../../components/account/MyDonations';


function MyDonationPage() {
  return (
    <motion.main className="">
    <div className="  ">
      {/* central div */}
      <div className="">
        
      

    

        <MyDonations />

      </div>


      
    </div>
  </motion.main>
  )
}

export default MyDonationPage