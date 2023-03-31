import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate, useParams } from "react-router";
import { motion } from "framer-motion";
import { CgCalendar } from "react-icons/cg";
import { BsCalendarPlus } from "react-icons/bs";
import Search from "../../../components/search/Search";
import AdminSearch from "../navigation/AdminSearch";
import { POST_CREATE_RESET } from "../../../features/constants/postConstants";
import { createPost, listPosts } from "../../../features/actions/postActions";
import DashPostItem from "./DashPostItem";
import Paginate from "../navigation/Paginate";

function DashPostList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [choices, SetChoices] = useState(false);

  const postList = useSelector((state) => state.postList);

  const { posts, page, pages, loading, error } = postList;

  const postCreate = useSelector((state) => state.postCreate);
  const {
    post: createdPost,
    success: successCreate,
    loading: loadingCreate,
    error: errorCreate,
  } = postCreate;

  const { search } = useLocation();

  const route = location.route;

  /* FIRING OFF THE ACTION CREATORS USING DISPATCH */

  let keyword =
    location.search; /* IF USER SEARCHES FOR ANYTHING THEN THIS KEYWORD CHANGES AND USE EFFECT GETS TRIGGERED */

  useEffect(() => {
    dispatch({ type: POST_CREATE_RESET });

    if (successCreate) {
      navigate(`/dashboard/posts/${createdPost._id}/edit`);
    } else {
      dispatch(listPosts(keyword));
    }
  }, [dispatch, successCreate, createdPost, keyword]);

  const createPostHandler = () => {
    dispatch(createPost());
  };

  return (
  <motion.div className=" p-1 md:p-2   flex flex-col gap-3 justify-center content-center items-center text-black  mx-auto bg-white mt-[100px] ">

  <div className='w-full flex flex-row items-end justify-end gap-2 md:gap-3'>
      <motion.button 
      whileHover={{scale: 1.05}}
      onClick={() => navigate('/dashboard/posts/create')}
      className="flex flex-row items-center content-center justify-center gap-1 md:gap-2 bg-gray-100 border hover:bg-gray-200  rounded-full min-w-[120px] text-sm p-2 md:p-2">
          Add Posts
          
          <BsCalendarPlus />
      </motion.button>

    

  </div>

  <div className="w-full">
      <AdminSearch />

  </div>




{/* <Search /> */}

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


{/* pagination */}
<div className="p-2 md:p-3 mt-[20px]">
        <Paginate page={page} pages={pages} keyword={keyword} route="/dashboard/posts" />
      </div>




</motion.div>
)
}

export default DashPostList;
