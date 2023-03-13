import axios from "axios";
import React, { useEffect, useState,Component } from "react";
import { AiOutlineCheck, AiOutlineCheckCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updatePoll, votePoll } from "../../features/actions/pollActions";
import { pollUpdateReducer } from "../../features/reducers/pollReducers";
import { REACT_API_URL } from "../../utilities/utils";

function PollItem({ poll }) {
  const dispatch = useDispatch();
  const [voting, setVoting] =  useState()
  const pollUpdate = useSelector((state) => state.pollUpdate);

  const { loading, success, error } = pollUpdate;
  const pollId = poll._id;


  useEffect(()=> {
    if(success){
      window.location.reload();

    } else {
      return;
    }


  },[success])

  function handleVote(id) {

    
    dispatch(votePoll(id))

    
 
  }

  return (
    <div>
      <div className="flex flex-row justify-around   gap-2 relative">
        <div className="flex flex-row justify-evenly gap-2  items-center content-center p-1">
          <h1>{poll.choice_text}</h1>
        </div>
        <div className="w-full bg-gray-50 flex flex-col items-center content-center justify-center h-[40px] rounded-md text-center">
          <h1 className=" absolute ">{poll.votes}</h1>
          <p className="absolute bg-green-100 w-[30%] self-start h-[40px] rounded-lg"></p>
        </div>

        <div className="flex flex-col items-center content-center justify-center">
          <h1
            onClick={() => handleVote(poll._id)}
            className="cursor-pointer text-sm  p-1 md:p-2 text-gray-500 hover:text-black"
          >
            Vote
          </h1>
        </div>
      </div>
    </div>
  );
}

export default PollItem;
