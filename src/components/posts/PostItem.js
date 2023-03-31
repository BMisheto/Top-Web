import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineArrowRight,
  AiOutlineCheck,
  AiOutlineComment,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import CommentForm from "./CommentForm";
import PostPoll from "./PostPoll";
import PostPollItems from "./PostPollItems";
import { votePoll } from "../../features/actions/pollActions";
import { useDispatch, useSelector } from "react-redux";
import { REACT_API_URL } from "../../utilities/utils";

function PostItem({ post }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [voting, setVoting] = useState();
  const pollUpdate = useSelector((state) => state.pollUpdate);

  const { loading, success, error } = pollUpdate;

  useEffect(() => {
    if (success) {
      window.location.reload();
    } else {
      return;
    }
  }, [success]);

  function handleVote(id) {
    dispatch(votePoll(id));
  }
  return (
    <div className="w-full">
      <motion.div className=" min-w-full md:min-w-[500px] lg:min-w-[500px] flex flex-col gap-1 p-2 md:p-3 bg-[#fdfdfd] border border-gray-100  rounded-2xl hover:border-gray-300 active:border-gray-300 ">
        <div className=" flex flex-row justify-between items-center content-center">
          <div
            className="flex flex-row gap-1 p-1 items-start justify-center content-start"
          >
           
        </div>

        {/* Question or Topic */}
        <div className=" p-2 flex flex-col rounded-lg md:rounded-2xl  min-w-[300px] md:min-w-[400px] lg:min-w-[500px] bg-gray-50 gap-1">
          {post.is_poll ? (
            <div className="flex flex-row justify-between text-[12px] md:text-[13px]">
              <h1 className="font-semibold p-1">Question</h1>{" "}
            </div>
          ) : (
            <h1 className="font-semibold text-[12px] md:text-[13px] p-1">
              Topic
            </h1>
          )}

          <p className="max-w-sm bg-gray-50 text-[12px] font-semibold md:text-[13px] ">
            {post.title}
          </p>
        </div>

        {/* description */}
        {post.is_poll ? (
          <div className="w-full flex flex-col gap-1 md:gap-2 p-2 md:p-1">
            {post.choices.map((choice) => {
              const percentage = (choice.votes / post.totalVotes) * 100;
              return (
                <div
                  key={choice._id}
                  className="flex flex-row justify-around gap-2 relative"
                >
                  <div className="flex flex-row justify-evenly gap-2  items-center content-center p-1">
                    <h1>{choice.choice_text}</h1>
                  </div>
                  <div className="w-full bg-slate-100 flex flex-col items-center content-center justify-center h-[40px] rounded-xl text-center">
                    <h1 className=" absolute ">{choice.votes}</h1>
                    <p
                      className={`absolute  bg-green-200 self-start h-[40px] rounded-lg progress-bar`}
                    ></p>
                  </div>

                  <div className="flex flex-col items-center content-center justify-center">
                    <h1
                      onClick={() => handleVote(choice._id)}
                      className="cursor-pointer text-sm  p-1 md:p-2 text-gray-500 hover:text-black"
                    >
                      Vote
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-1 md:gap-2 p-2">
            <p className=" max-w-lg text-[14px] md:text-[16px]">
              {post.content}
            </p>
          </div>
        )}

        <div className="p-1 md:p-2 w-full flex flex-row justify-end">
          <Link
            to={`/post/${post._id}`}
            className="bg-gray-100 min-w-[100px] rounded-2xl self-end  flex flex-row items-center justify-center content-center hover:bg-gray-200 min-h-[40px]"
          >
            <h1>View</h1>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default PostItem;
