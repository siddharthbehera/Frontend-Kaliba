import React from 'react';

import { BuildingFill} from 'react-bootstrap-icons';

const ProjectsPool = () => {
  const projects = [
    {
      id: 1,
      company: 'Orbital Farms',
      contacts: ['SP', 'PF', 'MM'],
      assetValue: 14000,
      poolFilled: 60,
    },
    {
      id: 2,
      company: 'Ilkiya Ikang',
      contacts: ['SP', 'PF', 'MM', 'TP'],
      assetValue: 20500,
      poolFilled: 100,
    },
    {
      id: 3,
      company: 'Upcoming Project',
      contacts: ['MM'],
      assetValue: 9800,
      poolFilled: 75,
    },
  ];

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h5 className="mb-0">Projects Pool Status</h5>
        <small className="text-muted">15 New Acquired this month</small>
      </div>
      <div className="card-body">
        <table className="table table-border">
          <thead>
            <tr>
              <th>COMPANIES</th>
              <th>CONTACTS</th>
              <th>Asset Value</th>
              <th>Pool Filled</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="avatar-icon me-2">
                      <i><BuildingFill/></i>
                    </div>
                    {project.company}
                  </div>
                </td>
                <td>
                  {project.contacts.map((contact, index) => (
                    <span key={index} className="badge rounded-pill bg-primary me-1">
                      {contact}
                    </span>
                  ))}
                </td>
                <td>${project.assetValue.toLocaleString()}</td>
                <td>
                  <div className="progress">
                    <div
                      className={`progress-bar ${
                        project.poolFilled === 100 ? 'bg-success' : 'bg-primary'
                      }`}
                      role="progressbar"
                      style={{ width: `${project.poolFilled}%` }}
                      aria-valuenow={project.poolFilled}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {project.poolFilled}%
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsPool;