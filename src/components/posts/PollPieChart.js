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
    <div className="flex flex-col items-start justify-center content-center gap-2 md:gap-3 border-b border-l border-r rounded-xl">
      <div className="w-full text-center">
        <h1 className="  p-1 md:p-2  font-semibold text-gray-600">Pie Chart</h1>
      </div>

      <div className="p-1 md:p-2">
        <PieChart width={400} height={400}>
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
