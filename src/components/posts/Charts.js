import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { listPolls } from "../../features/actions/pollActions";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PollBarGraph from "./PollBarGraph";
import PollPieChart from "./PollPieChart";

function Charts({ postId }) {
  const dispatch = useDispatch();

  const location = useLocation();

  const pollList = useSelector((state) => state.pollList);
  const { loading, polls, error, count } = pollList;

  const route = location.route;

  useEffect(() => {
    dispatch(listPolls(postId));
  }, [dispatch, postId]);

  return (
    <div className="w-full flex flex-col items-center content-center justify-center   p-2 min-h-[300px]">
      <h1 className="self-start font-semibold text-gray-700 mb-[10px]">Results</h1>

      {/* charts */}

      <div className="flex flex-col md:flex-row items-center justify-center content-center gap-2 ">
        {/* Tiny bar chart */}
        <PollBarGraph data={polls} />
        <PollPieChart data={polls} />
      </div>
    </div>
  );
}

export default Charts;