import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Search from "../search/Search";
import {
  AiFillHeart,
  AiFillPlusCircle,
  AiFillSave,
  AiOutlineComment,
  AiOutlinePlus,
  AiTwotoneSave,
} from "react-icons/ai";
import { FaPoll } from "react-icons/fa";
import PostItem from "./PostItem";
import { BsFilePostFill, BsX } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate, useParams } from "react-router";
import { createPost, listPosts } from "../../features/actions/postActions";
import { POST_CREATE_RESET } from "../../features/constants/postConstants";
import PollBarGraph from "./PollBarGraph";
import { GraphData as data } from "../fakeData.js/GraphData";
import PollPieChart from "./PollPieChart";

function Posts() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation();
  const params = useParams();
  const [choices,SetChoices] = useState(false);


  const postList = useSelector((state) => state.postList);

  const { posts, page, pages, loading, error } = postList;

  



  const { search } = useLocation();

  const route = location.route;

  /* FIRING OFF THE ACTION CREATORS USING DISPATCH */

  let keyword =
    location.search; /* IF USER SEARCHES FOR ANYTHING THEN THIS KEYWORD CHANGES AND USE EFFECT GETS TRIGGERED */

  useEffect(() => {
    let _;
   
      dispatch(listPosts(keyword));
    
  }, [dispatch, keyword]);

  
  const showChoices = () => {
    SetChoices(!choices);
  };

  const createPostHandler = () => {
    dispatch(createPost());
  };

  return (
    <motion.div className=" p-1 md:p-2   flex flex-col gap-3 justify-center content-center items-center text-black  mx-auto bg-white mt-[100px]">

      <div className="p-2 md:p-3 flex flex-col items-center content-center justify-center mt-[50px]">
        <div className="shadow-md border rounded-lg">
        <img src="/logo-small.png" className="h-[80px] w-[80px]  p-2 object-fit " />

        </div>

        <h1 className="font-bold p-1">Sema</h1>
        

      </div>

        




      <Search />

      {/* center items */}
      {loading ? <div>Loading</div> : ""}


      {posts == 0 & !loading ? (
        <div className="flex flex-col justify-center items-center content-center min-h-[300px] min-w-[200px] md:min-w-[300px] md:w-[90%] bg-gray-50 border border-gray-100 rounded-xl">
        <h1 className="text-gray-500 text-md md:text-xl">0 Posts</h1>
      </div>


      ) : (
        <div className="flex flex-col justify-center content-center items-center gap-3 md:gap-4   ">
          {posts?.map((post) => (
            <PostItem key={post._id} post={post} />
          )
          )}
        
        
        
      </div>

      )}

      

      <div className="fixed bottom-10  right-10">
        {/* sema choice */}

        {choices ? (

          <motion.div 
          animate={{ bottom: 0, opacity: 1 }}
        initial={{ bottom: -100, opacity: 0 }}
        exit={{ bottom: -800, opacity: 0 }}

          className="flex flex-col p-2 md:p-3 gap-3">
          <motion.div 
          whileHover={{ scale: 1.05 }}
          className=" text-[1.1rem] md:text-[1.3rem] flex flex-row items-center content-center justify-center gap-2 bg-black text-white rounded-full p-2 min-w-[100px] cursor-pointer">
            <h1>Poll</h1>
            <FaPoll />
          </motion.div>
          <motion.div
           onClick={createPostHandler}
          whileHover={{ scale: 1.05 }}
           className=" text-[1.1rem] md:text-[1.3rem] flex flex-row items-center content-center justify-center gap-2 bg-black text-white rounded-full p-2 min-w-[100px] cursor-pointer">
            <h1>Post</h1>

            <BsFilePostFill />
          </motion.div>
        </motion.div>
        ):""}
        

        {/* sema button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={showChoices}
          className="flex flex-row items-center content-center justify-center bg-black text-white  p-2 rounded-full min-w-[110px] cursor-pointer"
        >
          <h1 className="p-1 text-[1.1rem] md:text-[1.3rem]">Sema</h1>
          {choices ? (<BsX className="text-[1rem]  md:text-[1.5rem]"/>): (<AiOutlinePlus className="text-[1rem]  md:text-[1.5rem]" />)}
          
          
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Posts;
