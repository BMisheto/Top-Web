import React from "react";
import {
  AiFillHeart,
  AiOutlineArrowRight,
  AiOutlineCheck,
  AiOutlineComment,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";
import PostPoll from "./PostPoll";

function PostItem({ post }) {
  
  return (
    <motion.div className="w-full">
      <div className="border min-w-full md:min-w-[500px] lg:min-w-[500px] flex flex-col gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-[#fdfdfd]">
        {/* Question or Topic */}
        <div className="border p-2 md:p-3 flex flex-col rounded-lg  min-w-[300px] md:min-w-[400px] lg:min-w-[500px] bg-gray-50">
          {post.is_poll ? (
            <div className="flex flex-row justify-between"><h1 className="font-semibold">Question</h1>   <h1 className="bg-gray-200 rounded-lg border-gray-300 text-gray-300 border p-2 md:p-3">Poll</h1></div>
            
            ) : (<h1 className="font-semibold">Topic</h1>)}
          
          <p className="max-w-lg bg-gray-50">{post.title}</p>
        </div>

        

        {/* Choices
        {
          (post.is_poll ? (
            <PostPoll  postId={post._id}/>
          ) : (
            ""
          ))
        } */}

        {/* description */}
        
            <div className="flex flex-col gap-2 md:gap-3 p-1 md:p-2">
            <p className="p-1 max-w-lg text-[14px] md:text-[16px]">
              {post.content}
            </p>
          </div>

        

        
        
          
         

        <div className="flex flex-row justify-end it w-full ">
          <Link
          to={`/post/${post._id}`}
           className=" flex flex-row gap-2 items-center content-center justify-center min-w-[80px] p-1  border border-black text-black hover:bg-black hover:text-white rounded-full">
            View
          </Link>
        </div>

        {/* post comment */}
        {post.is_poll ? "" :  <CommentForm postId={post._id} /> }
        
      </div>
    </motion.div>
  );
}

export default PostItem;
