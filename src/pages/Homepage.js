import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Dashboard from '../Components/Dashboard';

import { ArrowLeft, ArrowRight} from 'react-bootstrap-icons';

const Homepage = () => {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Check the screen size here
      if (window.innerWidth < 768 && sidebarOpen) {
        // Close the sidebar if it's open on small screens
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sidebarOpen]);


  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`col-md-2 ${sidebarOpen ? 'd-block' : 'd-none'}`}>
        <div class="d-flex pt-2 flex-row-reverse" >
          <button class="btn btn-primary" onClick={toggleSidebar}> {sidebarOpen ? <ArrowLeft />: <ArrowRight/>}</button>
        </div>
          <div>
            <Sidebar />
          </div>
        </div>
        <div className={`col-md-${sidebarOpen ? '10' : '12'}`}>

        {!sidebarOpen && (
        <div className="fixed-top" style={{ right: '15px', top: '15px' }}>
          <button class="btn btn-primary" onClick={toggleSidebar}>
            <ArrowRight />
          </button>
        </div>
      )}

          <Navbar />
          <Dashboard />
        </div>
      </div>
    </div>
  )
}

export default Homepage


