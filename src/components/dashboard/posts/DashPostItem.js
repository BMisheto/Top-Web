import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../../features/actions/postActions";
import {BsThreeDotsVertical, BsX} from "react-icons/bs";

function DashPostItem({ post }) {
  const navigate = useNavigate();
  const dispatch =  useDispatch();
  const [options, setOptions] = useState(false);
  
  const postDelete = useSelector((state) => state.postDelete);
  const { loading, success, error } = postDelete;
  useEffect(() => {
    if (success) {
      window.location.reload();
    } else {
      return;
    }
  }, [success]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this Post ?")) {
      dispatch(deletePost(id));
     
      
    }
  };
  return (
    <motion.div
     className="w-full">
      <div className="bg-gray-50 border min-w-full  flex flex-col gap-2 md:gap-3 p-2 md:p-3 rounded-lg  ">
        {/* Question or Topic */}
        <div className="relative p-2 md:p-3 flex flex-col rounded-lg  max-w-[300px] min-h-[100px] ">
          {post.is_poll ? (
            <h1 className="font-semibold">Question</h1>
          ) : (
            <h1 className="font-semibold">Topic</h1>
          )}

          <p className="max-w-lg ">{post.title}</p>

          <h1
          onClick={() => setOptions(!options)}
          className="absolute cursor-pointer p-2 rounded-full drop-shadow-lg top-2 right-2 bg-white"
        >
          <BsThreeDotsVertical />
        </h1>

        {/* {options && (
          <motion.div
            initial={{ opacity: 0,top: 0 }}
            animate={{ opacity: 1, top:8 }}
            exit={{ exit: 0 }}
            className="bg-white flex flex-row gap-1 justify-evenly p-2 absolute top-1 right-2 rounded-lg min-w-full drop-shadow-lg "
          >
           
            
            <h1
            onClick={() => navigate(`/posts/${post._id}`)}
            className=" cursor-pointer hover:bg-gray-500  hover:text-white rounded-md flex flex-row justify-between items-center content-center gap-2 p-2"
          >
            View
            <AiFillEye />
          </h1>
            <h1
            onClick={() => navigate(`/dashboard/posts/${post._id}/edit`)}
            className=" cursor-pointer hover:bg-gray-500 active:bg-green-500 active:text-white hover:text-white rounded-md flex flex-row justify-between items-center content-center gap-2 p-2"
          >
            Edit
            <AiFillEdit />
          </h1>
          <h1
            onClick={() => deleteHandler(post._id)}
            className=" cursor-pointer hover:bg-red-500 hover:text-white rounded-md flex flex-row justify-between items-center content-center gap-2 p-2"
          >
            Delete
            <AiFillDelete />
          </h1>


          <div className="w-full p-1 flex flex-row justify-center items-center content-center cursor-pointer">
            <BsX onClick={() => setOptions(!options)} className="text-md bg-gray-600 text-white rounded-full" />
            </div>
          </motion.div>
        )} */}
        </div>

        

        

        {/* description */}
          {options && (
            <motion.div
            initial={{ opacity: 0,top: 0 }}
            animate={{ opacity: 1, top:8 }}
            exit={{ exit: 0 }}
            
            className="flex flex-row justify-evenly items-center content-center z-50 w-full ">
            <Link
              to={`/post/${post._id}`}
              className=" flex flex-row gap-2 items-center content-center text-sm justify-center min-w-[80px] p-1  border bg-white border-gray-200 text-black hover:border-black hover:bg-black hover:text-white rounded-full shadow-md"
            >
              View
            </Link>
  
            <button
              onClick={() => navigate(`/dashboard/posts/${post._id}/edit`)}
              className=" flex flex-row gap-2 items-center content-center text-sm justify-center min-w-[80px] p-1 bg-white  border border-gray-200 text-black hover:border-green-500 hover:bg-green-500 hover:text-white rounded-full shadow-md"
            >
              Edit
              <AiFillEdit />
            </button>
            <button  
              onClick={() => deleteHandler(post._id)}
            className=" flex flex-row gap-2 items-center content-center text-sm justify-center min-w-[80px] p-1  border border-gray-200 text-black hover:border-red-500 bg-white hover:bg-red-500 hover:text-white rounded-full shadow-md">
              Delete
              <AiFillDelete />
            </button>
          </motion.div>


          )}
        

        
      </div>
    </motion.div>
  );
}

export default DashPostItem;
