import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { listComments } from "../../features/actions/commentActions";
import CommentItem from "./CommentItem";

function PostComments() {
  const dispatch = useDispatch();

  const location = useLocation();

  const getId = useParams();
  const postId = getId.id;

  const commentList = useSelector((state) => state.commentList);
  const { loading, comments, error, count } = commentList;
  const route = location.route;
  useEffect(() => {
       dispatch(listComments(postId));
    
  }, [dispatch, postId]);

  return (
    <div className="flex flex-col items-start content-center justify-center">
      {loading ? (
        <div className="min-w-[300px] min-h-[100px] bg-gray-100 animate-pulse rounded-xl flex flex-col items-center justify-center ">
          Loading
        </div>
      ) : (
        <div className="flex flex-col gap-2 md:gap-3 md:grid md:grid-cols-2 justify-center items-center content-center">
        {comments?.map((comment) => (
          <CommentItem key={comment._id} comment={comment} />
        ))}
      </div>)}
      

     
    </div>
  );
}

export default PostComments;
