import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import { listAttendance } from "../../features/actions/attendingActions";

function AttendingList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [choices, SetChoices] = useState(false);

  const attendingList = useSelector((state) => state.attendingList);

  const { attending, loading, error } = attendingList;

  const { search } = useLocation();

  const getId = useParams();
  const eventId = getId.id;

  const route = location.route;

  /* FIRING OFF THE ACTION CREATORS USING DISPATCH */

  let keyword =
    location.search; /* IF USER SEARCHES FOR ANYTHING THEN THIS KEYWORD CHANGES AND USE EFFECT GETS TRIGGERED */

  useEffect(() => {
    let _;

    dispatch(listAttendance(eventId));
  }, [dispatch, keyword, eventId]);

  return <div>




<div className="flex flex-col  justify-center items-center content-center">
    {attending.map((attendee) => 

    <div key={attendee._id}>{attendee.added}</div>
    
    
    )}
</div>


  </div>;
}

export default AttendingList;
