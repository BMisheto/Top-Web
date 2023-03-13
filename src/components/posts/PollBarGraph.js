import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  YAxis,
  XAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

function PollBarGraph({ data }) {
  
  return (
    <div className="flex flex-col items-start justify-center content-center gap-2  border-b  border-r border-gray-100 rounded-xl p-1 md:p-2">
      <div className="w-full text-center p-1">
        <h1 className="  font-regular text-gray-400">Bar Graph</h1>
      </div>

      <div className="">
        <BarChart width={300} height={300} data={data}>
          <XAxis dataKey="choice_text" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="votes" fill="#E08119" />
        </BarChart>
      </div>
    </div>
  );
}

export default PollBarGraph;
