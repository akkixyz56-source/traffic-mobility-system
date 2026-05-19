// TrafficChart.jsx

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { time: "6 AM", traffic: 1200 },
  { time: "8 AM", traffic: 4200 },
  { time: "10 AM", traffic: 4520 },
  { time: "1 PM", traffic: 3000 },
  { time: "6 PM", traffic: 5100 },
  { time: "9 PM", traffic: 1000 }
];

function TrafficChart() {
  return (
    <div className="chart-box">

      <h2>Traffic Analytics</h2>

      <ResponsiveContainer width="100%" height={400}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" stroke="#475569" />

          <XAxis dataKey="time" stroke="#fff" />

          <YAxis stroke="#fff" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="traffic"
            stroke="#38bdf8"
            strokeWidth={4}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default TrafficChart;