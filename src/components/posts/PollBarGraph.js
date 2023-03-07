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
  console.log(data);
  return (
    <div className="flex flex-col items-start justify-center content-center gap-2 md:gap-3 border-b border-l border-r rounded-xl">
      <div className="w-full text-center">
        <h1 className="  p-1 md:p-2  font-semibold text-gray-600">Bar Graph</h1>
      </div>

      <div className="p-1 md:p-2">
        <BarChart width={400} height={400} data={data}>
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
