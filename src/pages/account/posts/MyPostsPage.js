import React from 'react'
import { motion } from 'framer-motion'
import MyPosts from '../../../components/account/MyPosts'
function MyPostsPage() {
  return (
    <motion.main className="">
    <div className="  ">
      {/* central div */}
      <div className="">
        
      

    

        <MyPosts />

      </div>


      
    </div>
  </motion.main>
  )
}

export default MyPostsPage