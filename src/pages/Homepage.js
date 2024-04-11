import React from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Dashboard from '../Components/Dashboard';

const Homepage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Navbar />
          <Dashboard />
        </div>
      </div>
    </div>
  )
}

export default Homepage


