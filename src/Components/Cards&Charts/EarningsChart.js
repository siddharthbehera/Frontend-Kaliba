import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Fashion', value: 251 },
  { name: 'Accessories', value: 178 },
];

const COLORS = ['#0088FE', '#00C49F'];

const EarningsChart = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Earnings</h5>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default EarningsChart;