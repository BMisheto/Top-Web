import React from 'react'
import { motion } from 'framer-motion'
import Posts from '../../components/posts/Posts'
import Search from '../../components/search/Search'
import PollBarGraph from '../../components/posts/PollBarGraph'


function Feed() {
  return (
    <motion.main className="min-h-[500px]">
    <div className="subpixel-antialiased min-h-screen inset-0 flex flex-col justify-center items-center font-sans    mx-auto lg:justify-center lg:align-center lg:text-centen rounded-b-2xl p-3  ">
      {/* central div */}
      <div className="flex flex-col">
        
      

    

        <Posts />

      </div>


      
    </div>
  </motion.main>
  )
}

export default Feed