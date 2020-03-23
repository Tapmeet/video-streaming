import React from 'react';
import OverviewBox from "./overviewBox";
import BarChart from "./BarChart";
import Map from "./Map";
import DonutChart from "./DonutChart";
import ServiceVolume from "./ServiceVolume";
import network from './../Assets/images/home/chart-network.svg';
import filter from './../Assets/images/home/filter.svg';
import calendar from './../Assets/images/home/calendar-alt.svg';
import share from './../Assets/images/home/share.svg';
import traffic from './../Assets/images/home/traffic.png';
const UsageTab = () => {

  return (
    <section className="usage-wrapper">
      <div className="container-fluid">
        <div className="top-section">
          <div className="left-section">
            <h4> <img src={traffic} alt="traffic"></img> Video streaming overview</h4>
          </div>
          <div className="right-section">
            <ul>
              <li>
                <span><img src={network} alt="network" /> Network: Mobile</span>
              </li>
              <li>
                <span><img src={filter} alt="filter"></img> Filter</span>
              </li>
              <li>
                <span><img src={share} alt="share" /> Share</span>
              </li>
              <li>
                <span><img src={calendar} alt="calendar" /> last 24 hours</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="overview-sections">
          <OverviewBox />
        </div>
        <Map />
        <div className="chart-section">
          <div className="chart-wrapper">
            <div className="bar-chart-content">
              <label>Location tarffic by time of day</label>
              <span>Volume(GB)</span>
              <BarChart />

            </div>
            <div className="donutchart">
              <label>Top devices</label>
              <DonutChart />
              <label className="text-center"> Traffic share by % of volume</label>
            </div>
          </div>
          <div className="top-service">
            <ServiceVolume />
          </div>
        </div>
      </div>
    </section>
  );
}
export default UsageTab