import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MetricsCard = ({ title, value, totalValue }) => {

  const radius = 32; // Radius of the pie chart
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const fillPercentage = value/totalValue; // Percentage of the circle to fill (80%)

  const strokeDashoffset = circumference - (fillPercentage * circumference);

  return (
      <div className="card">
        <div className="container-custom">
        <div className="card-body text-center" class="d-flex flex-row">
          <div class="p-2">
          <svg height={radius * 2} width={radius * 2}>
            <circle 
              cx={radius}
              cy={radius}
              r={radius}
              fill="transparent"
              stroke="#e6e6e6"
              strokeWidth={radius/2}
            />
            <circle
              cx={radius}
              cy={radius}
              r={radius}
              fill="transparent"
              stroke="#0088fe"
              strokeWidth={radius/2}
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={strokeDashoffset}
              transform={`rotate(-90 ${radius} ${radius})`}
            />
          </svg>
          </div>
          <div class="pt-2">
          <h6 className="card-title">{title}</h6>
          <p className="card-text text-primary">${value}K</p>
          </div>
        </div>
        </div>
      </div>
   );
};

export default MetricsCard;