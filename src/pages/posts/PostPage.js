import React, { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import PostComment from "../../components/posts/CommentForm";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { listPostDetails } from "../../features/actions/postActions";
import PostComments from "../../components/posts/PostComments";
import CommentForm from "../../components/posts/CommentForm";
import PostPoll from "../../components/posts/PostPoll";
import Charts from "../../components/posts/Charts";

function PostPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getId = useParams();
  const postId = getId.id;

  const postDetails = useSelector((state) => state.postDetails);
  const { loading, post, error, comments } = postDetails;

  // product detail dispatch
  useEffect(() => {
    dispatch(listPostDetails(postId));
  }, [dispatch, postId]);

  return (
    <div className="subpixel-antialiased min-h-screen inset-0 flex flex-col justify-center items-center font-sans    mx-auto lg:justify-center lg:align-center lg:text-centen rounded-b-2xl p-3 mt-[100px] ">
      {/* central div */}

      {loading ? (
        <div className="flex flex-col items-center content-center justify-center text-center">
          <h1>Loading</h1>

        </div>
      ):(<div className="flex flex-col justify-center items-start content-center gap-3 md:gap-5 p-2 md:p-3">
        {/* back button */}
        <motion.div
          whileHover={{ scale: 0.97 }}
          onClick={() => navigate(-1)}
          className="mb-[50px] flex flex-row items-center content-center justify-center bg-black text-white min-w-[100px] rounded-full p-1 md:p-2 gap-1 md:gap-2 cursor-pointer"
        >
          <BsArrowLeft />
          <h1>Back</h1>
        </motion.div>

        {/* title */}
        <div className="flex flex-col gap-2">
          {post.is_poll ? (
            <h1 className="text-lg font-bold">Question</h1>
          ) : (
            <h1 className="text-lg font-bold">Topic</h1>
          )}

          <h1 className="text-lg md:text-xl">{post.title}</h1>
        </div>

        {/* description */}
        <div className="">
          <p className="max-w-2xl">
            {post?.content}
          </p>
        </div>

        {/* polls */}
        {post.is_poll ? (
          <div className="w-full">
          <PostPoll postId={postId}  />

          </div>
        ) : 
          ""
        }

        {/* charts */}
        {post.is_poll ? (
          <Charts  postId={postId}  />
        ) : (
          ""
        )}

        {/* post comment */}
        {post.is_poll ? (
          ""
        ) : (
          <div className="min-w-full md:min-w-[600px]">
            <CommentForm postId={post._id} />
          </div>
        )}

        {/* comments */}
        {!post.is_poll && (
          <PostComments isPoll={post.is_poll} comments={comments}  postId={post._id} />
        )}
      </div>
      )}
    </div>
  );
}

export default PostPage;
