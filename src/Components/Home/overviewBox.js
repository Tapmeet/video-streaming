import React from 'react';
const OverviewBox = () => {
  return (
    <div className="overview-section">
      <div className="overview-box">
        <div className="subscriber">
          <span>
            Subscriber Count
        </span>
          <h2>214,000 <span>in last hour</span></h2>
        </div>
        <div className="subscriber-stats">
          <span>+36%</span>
          <i className="fas fa-arrow-up"></i>
        </div>
      </div>
      <div className="overview-box">
        <div className="subscriber">
          <span>
            Video volume
        </span>
          <h2>768<label>GB</label> <span>in last hour</span></h2>
        </div>
        <div className="subscriber-stats">
          <span>+36%</span>
          <i className="fas fa-arrow-up"></i>
        </div>
      </div>
      <div className="overview-box green">
        <div className="subscriber">
          <span>
            Volume saved
        </span>
          <h2>268<label>GB</label><span>savings</span></h2>
        </div>
        <div className="subscriber-stats">
          <span>+6%</span>
          <i className="fas fa-arrow-up"></i>
        </div>
      </div>
    </div>
  );
}
export default OverviewBox