import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import { motion } from "framer-motion";
import { createPost, listPosts } from "../../../features/actions/postActions";
import DashPostItem from "../posts/DashPostItem"


function DashItems() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const [choices, SetChoices] = useState(false);
  
    const postList = useSelector((state) => state.postList);
  
    const { posts, page, pages, loading, error } = postList;
  
    
    /* FIRING OFF THE ACTION CREATORS USING DISPATCH */
  
    let keyword =
      location.search; /* IF USER SEARCHES FOR ANYTHING THEN THIS KEYWORD CHANGES AND USE EFFECT GETS TRIGGERED */
  
    useEffect(() => {
      
        dispatch(listPosts(keyword));
      
    }, [dispatch,  keyword]);
  
    const createPostHandler = () => {
      dispatch(createPost());
    };
  
  return (
    <motion.div className=" p-1 md:p-2   flex flex-col gap-3 justify-center content-center items-center text-black  mx-auto bg-white mt-[100px] w-full">

        <div>

  
  





{/* center items */}
{loading ? <div>Loading</div> : ""}


{posts == 0 & !loading ? (
<div className="flex flex-col  justify-center items-center content-center min-h-[300px] min-w-[200px] md:min-w-[300px] md:w-[90%] bg-gray-50 border border-gray-100 rounded-xl">
<h1 className="text-gray-500 text-md md:text-xl">0 Posts</h1>
</div>


) : (
<div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 justify-center content-center items-center gap-3 md:gap-4   ">
  {posts?.map((post) => (
    <DashPostItem key={post._id} post={post} />
  )
  )}



</div>

)}



</div>
</motion.div>
  )
}

export default DashItems