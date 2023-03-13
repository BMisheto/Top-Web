import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { listPolls } from "../../features/actions/pollActions";
import PollBarGraph from "./PollBarGraph";
import PollItem from "./PollItem";
import PollPieChart from "./PollPieChart";

function PostPoll({postId}) {
  const dispatch = useDispatch();

  const location = useLocation();
  

  const pollList = useSelector((state) => state.pollList);
  const { loading, polls, error, count } = pollList;
  const route = location.route;

  useEffect(() => {
    dispatch(listPolls(postId));
  }, [dispatch, postId]);

 

   

  return (
    <div className="flex flex-col gap-2 md:gap-3 p-1 md:p-2">
      {loading ? (
        <div className="w-full bg-gray-200 rounded-xl border-t order-b border-gray-100 animate-pulse">
          <h1>Loading...</h1>

        </div>
      ) : (
        <div className="flex flex-col gap-2 md:gap-3 p-1 md:p-2">
          <h1 className="text-md text-gray-500">
            Votes<span className="text-gray-500"></span>{" "}
          </h1>
          {polls?.map((poll) => (
            <PollItem
            
             poll={poll} />

            
          ))}

         
        </div>
      )}
    </div>
  );
}

export default PostPoll;
