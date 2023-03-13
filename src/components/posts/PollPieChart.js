import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function PollPieChart({ data }) {
  return (
    <div className="flex flex-col items-start justify-center content-center gap-2  border-b border-l  border-gray-100 rounded-xl p-1 md:p-2">
      <div className="w-full text-center">
        <h1 className="    font-regular text-gray-400">Pie Chart</h1>
      </div>

      <div className="">
        <PieChart width={300} height={300}>
          <Pie
            dataKey="votes"
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#E08119"
            label="choice_text"
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}

export default PollPieChart;
