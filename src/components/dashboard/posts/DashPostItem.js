import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../features/actions/postActions";

function DashPostItem({ post }) {
  const navigate = useNavigate();
  const dispatch =  useDispatch();

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this Post ?")) {
      dispatch(deletePost(id));
      window.location.reload();
      
    }
  };
  return (
    <motion.div
    whileHover={{scale:1.03}}
     className="w-full">
      <div className="border min-w-full  flex flex-col gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-[#fdfdfd] shadow-xl">
        {/* Question or Topic */}
        <div className="border p-2 md:p-3 flex flex-col rounded-lg  max-w-[300px] min-h-[100px] bg-gray-50">
          {post.is_poll ? (
            <h1 className="font-semibold">Question</h1>
          ) : (
            <h1 className="font-semibold">Topic</h1>
          )}

          <p className="max-w-lg bg-gray-50">{post.title}</p>
        </div>

        {/* Choices */}

        {/* description */}

        <div className="flex flex-row justify-evenly items-center content-center it w-full ">
          <Link
            to={`/post/${post._id}`}
            className=" flex flex-row gap-2 items-center content-center text-sm justify-center min-w-[80px] p-1  border border-gray-200 text-black hover:border-black hover:bg-black hover:text-white rounded-full"
          >
            View
          </Link>

          <button
            onClick={() => navigate(`/dashboard/posts/${post._id}/edit`)}
            className=" flex flex-row gap-2 items-center content-center text-sm justify-center min-w-[80px] p-1  border border-gray-200 text-black hover:border-green-500 hover:bg-green-500 hover:text-white rounded-full"
          >
            Edit
            <AiFillEdit />
          </button>
          <button  
            onClick={() => deleteHandler(post._id)}
          className=" flex flex-row gap-2 items-center content-center text-sm justify-center min-w-[80px] p-1  border border-gray-200 text-black hover:border-red-500 hover:bg-red-500 hover:text-white rounded-full">
            Delete
            <AiFillDelete />
          </button>
        </div>

        
      </div>
    </motion.div>
  );
}

export default DashPostItem;
