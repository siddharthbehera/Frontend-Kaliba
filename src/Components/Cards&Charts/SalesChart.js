import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', sales: 55, cost: 70 },
  { month: 'Feb', sales: 80, cost: 65 },
  { month: 'Mar', sales: 72, cost: 55 },
  { month: 'Apr', sales: 83, cost: 65 },
];

const SalesChart = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Sales and Cost</h5>
        <LineChart width={600} height={300} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="cost" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

export default SalesChart;