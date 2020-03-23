
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Tooltip } from 'reactstrap';
import classnames from 'classnames';
import Usage from "./usage";
import network from './../Assets/images/home/chart-network.svg';
import filter from './../Assets/images/home/filter.svg';
import calendar from './../Assets/images/home/calendar-alt.svg';
import share from './../Assets/images/home/share.svg';
import traffic from './../Assets/images/home/traffic.png';
import info from './../Assets/images/home/info-circle.svg';
const HomePage = () => {
  const [activeTab, setActiveTab] = useState('1');
  /**
    * Toggle handler 
    * @param event use for prevent the default functionality of the event
    * @returns na
  */
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggles = () => setTooltipOpen(!tooltipOpen);
  return (
    <section className="home-wrapper">
      <div className="tab-header">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => { toggle('1'); }}>Usage </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => { toggle('2'); }}> Services </NavLink>
              </NavItem>
            </Nav>
            <div>
              <img src={info} id="TooltipSample"  alt="info" />
              <Tooltip placement="left" isOpen={tooltipOpen} target="TooltipSample" toggle={toggles}>Some useful information </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Usage />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <section className="usage-wrapper">
                <div className="container-fluid">
                  <div className="top-section">
                    <div className="left-section">
                      <h4> <img src={traffic} alt="traffic"></img> Video streaming services</h4>
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
                </div>
              </section>
            </Col>
          </Row>

        </TabPane>
      </TabContent>

    </section>
  );
}
export default HomePage