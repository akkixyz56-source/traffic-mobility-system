// TrafficDistribution.jsx

import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Heavy", value: 45 },
  { name: "Medium", value: 35 },
  { name: "Low", value: 20 }
];

const COLORS = ["#ef4444", "#f59e0b", "#22c55e"];

function TrafficDistribution() {
  return (

    <div className="pie-box">

      <h2>Traffic Distribution</h2>

      <PieChart width={400} height={300}>

        <Pie
          data={data}
          cx={200}
          cy={150}
          outerRadius={100}
          dataKey="value"
          label
        >

          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}

        </Pie>

        <Tooltip />

      </PieChart>

    </div>
  );
}

export default TrafficDistribution;