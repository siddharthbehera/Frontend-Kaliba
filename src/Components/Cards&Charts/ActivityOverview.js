import React from 'react';

const ActivityOverview = () => {
  const activities = [
    {
      id: 1,
      title: 'Project Campaign 1',
      timestamp: '11 JUL 8:10 PM',
    },
    {
      id: 2,
      title: 'New order #87444152',
      timestamp: '11 JUL 11 PM',
    },
    {
      id: 3,
      title: 'Affiliate Payout',
      timestamp: '11 JUL 7:64 PM',
    },
    {
      id: 4,
      title: 'New user added',
      timestamp: '11 JUL 1:21 AM',
    },
    {
      id: 5,
      title: 'Product added',
      timestamp: '11 JUL 4:50 AM',
    },
  ];

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h5 className="mb-0">Activity overview</h5>
        <small className="text-muted">16% this month</small>
      </div>
      <ul className="list-group list-group-flush">
        {activities.map((activity) => (
          <li key={activity.id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <i className="bi bi-circle-fill me-2 text-primary"></i>
                {activity.title}
              </div>
              <small className="text-muted">{activity.timestamp}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default ActivityOverview;