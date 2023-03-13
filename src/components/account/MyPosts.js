import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import { listMyPosts } from "../../features/actions/postActions";
import DashPostItem from "../dashboard/posts/DashPostItem";
import Search from "../search/Search";
import { motion } from "framer-motion";
import MyPostItem from "../posts/MyPostItem";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

function MyPosts({ id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [choices, SetChoices] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const postMyList = useSelector((state) => state.postMyList);

  const { posts, page, pages, loading, error } = postMyList;

  const { search } = useLocation();

  const route = location.route;

  /* FIRING OFF THE ACTION CREATORS USING DISPATCH */

  let keyword =
    location.search; /* IF USER SEARCHES FOR ANYTHING THEN THIS KEYWORD CHANGES AND USE EFFECT GETS TRIGGERED */

  useEffect(() => {
    let _;

    if (!userInfo) {
      navigate("/login");
    } else {
      dispatch(listMyPosts(keyword, userInfo._id));
    }
  }, [dispatch, id, userInfo]);

  return (
    <motion.div className=" p-1 md:p-2   flex flex-col gap-3  text-black  mx-auto bg-white ">
        <div className="flex flex-row justify-between items-center content-center">
            <h1>Your Posts</h1>

            
            <Link to={'/account/posts'}
            className="flex flex-row gap-1 items-center content-center justify-center  md:gap-2">
              View All
              <AiOutlineRight />
              </Link>
        </div>

  


{/* <Search /> */}

{/* center items */}
{loading ? <div>Loading</div> : ""}


{posts == 0 & !loading ? (
<div className="flex flex-col  justify-center items-center content-center min-h-[300px] min-w-[200px] md:min-w-[600px] bg-gray-50 border border-gray-100 rounded-xl">
<h1 className="text-gray-500 text-md md:text-xl">0 Posts</h1>
</div>


) : (
<div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 justify-center content-center items-center gap-3 md:gap-4   ">
  {posts?.map((post) => (
    <MyPostItem key={post._id} post={post} />
  )
  )}



</div>

)}




</motion.div>
  );
}

export default MyPosts;
