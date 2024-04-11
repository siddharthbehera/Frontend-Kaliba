import React from 'react';
import MetricsCard from '../Components/Cards&Charts/MetricsCard';
import SalesChart from '../Components/Cards&Charts/SalesChart';
import EarningsChart from '../Components/Cards&Charts/EarningsChart';
import ConversionsChart from '../Components/Cards&Charts/ConversionsChart';
import ActivityOverview from '../Components/Cards&Charts/ActivityOverview';
import ProjectsPool from '../Components/Cards&Charts/ProjectsPool';

import backgroundImage from './01.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Dashboard = () => {

    const divStyle = {
        backgroundImage: `url(${backgroundImage})`, // Example background image URL
        backgroundSize: 'cover', // Example background size
        backgroundPosition: 'center', // Example background position
        height: '170px', // Example height
        borderRadius: '10px'
      };

  return (
    <div>
    <div className="dashboard" style={divStyle} class="ps-2">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="text-light">Hi Project Admins</h1>
          <p className="text-light">We are on a mission to Democratise Renewable energy Investments</p>
        </div>
      </div>
      <div className="row mb-4">

        <Container fluid>
            <Row>
                <Col><MetricsCard title="Total Sales" value="580" totalValue="1000" /></Col>
                <Col><MetricsCard title="Total Profit" value="185"  totalValue="200" /></Col>
                <Col><MetricsCard title="Total Cost" value="375"  totalValue="600" /></Col>
                <Col><MetricsCard title="Revenue" value="742"  totalValue="900" /></Col>
                <Col><MetricsCard title="Net Income" value="150"  totalValue="300" /></Col>
            </Row>
        </Container>
      </div>
      <div className="row mb-4">
        <div className="col-md-8">
          <SalesChart />
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Website Visitors</h5>
              <p className="card-text">750K</p>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">New Customers</h5>
              <p className="card-text">7,500</p>
            </div>
          </div>
          <ActivityOverview />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <EarningsChart />
        </div>
        <div className="col-md-6">
          <ConversionsChart />
        </div>
      </div>
      <ProjectsPool />
    </div>
    </div>
  );
};

export default Dashboard;