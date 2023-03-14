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
    <Link
    to={`/post/${post._id}`}
     className="w-full">
      <motion.div 
      
      className=" min-w-full md:min-w-[500px] lg:min-w-[500px] flex flex-col gap-1 p-2 md:p-3  border border-gray-100 bg-gray-50 rounded-2xl hover:border-gray-300 active:border-gray-300 ">
        {/* Question or Topic */}
        <div className=" p-2 flex flex-col rounded-2xl  min-w-[300px] md:min-w-[400px] lg:min-w-[500px] bg-gray-50">
          {post.is_poll ? (
            <div className="flex flex-row justify-between text-sm">
              <h1 className="font-semibold">Question</h1>{" "}
              <h1 className="bg-gray-100 rounded-md border-gray-300 text-gray-500 border pl-2 p-1 pr-2">
                Poll
              </h1>
            </div>
          ) : (
            <h1 className="font-semibold text-sm">Topic</h1>
          )}

          <p className="max-w-sm bg-gray-50 text-[12x] font-semibold md:text-[15px] ">
            {post.title}
          </p>
        </div>

        {/* description */}

        <div className="flex flex-col gap-1 md:gap-2 p-2">
          <p className=" max-w-lg text-[14px] md:text-[16px]">
            {post.content}
          </p>
        </div>

        <div>
          
        </div>

        
      </motion.div>
    </Link>
  );
}

export default PostItem;
