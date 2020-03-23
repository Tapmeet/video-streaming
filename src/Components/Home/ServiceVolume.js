import React from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
const ServiceVolume = () => {
  React.useEffect(() => {
  /**
  * Scrollbar Init 
  */
    new PerfectScrollbar('#scrollbar', {
      wheelSpeed: 2,
      wheelPropagation: false,
      minScrollbarLength: 5
    });
  });
  return (
    <div className="service-volume-wrapper">
      <label>Top services by volume</label>
      <PerfectScrollbar>
        <div id="scrollbar">
          <ul>
            <li>
              <div className="label-section">
                <span>Youtube</span>
              </div>
              <div className="stats-section">
                <div className="width80 greenbg color-section"></div>
                <span className="stats">997Gb</span>
              </div>
            </li>
            <li>
              <div className="label-section">
                <span>Netflix</span>
              </div>
              <div className="stats-section">
                <div className="width75 bluebg color-section"></div>
                <span className="stats">997Gb</span>
              </div>
            </li>
            <li>

              <div className="label-section">
                <span>Http media stream</span>
              </div>
              <div className="stats-section">
                <div className="width70 orangebg color-section"></div>
                <span className="stats">997Gb</span>
              </div>
            </li>
            <li>
              <div className="label-section">
                <span>Amazon Prime</span>
              </div>
              <div className="stats-section">
                <div className="width65 pinkbg color-section"></div>
                <span className="stats">997Gb</span>
              </div>
            </li>
            <li>
              <div className="label-section">
                <span>Hulu</span>
              </div>
              <div className="stats-section">
                <div className="width60 brownbg color-section"></div>
                <span className="stats">997Gb</span>
              </div>
            </li>
            <li>
              <div className="label-section">
                <span>Itunes Purchased</span>
              </div>
              <div className="stats-section">
                <div className="width55 voiletbg color-section"></div>
                <span className="stats">997Gb</span>
              </div>
            </li>
            <li>
              <div className="label-section">
                <span>SSL V3</span>
              </div>
              <div className="stats-section">
                <div className="width50 maronbg color-section"></div>
                <span className="stats">997Gb</span>
              </div>
            </li>
            <li>
              <div className="label-section">
                <span>HBO Now</span>
              </div>
              <div className="stats-section">
                <div className="width45 graybg color-section"></div>
                <span className="stats">997Gb</span>
              </div>
            </li>
            <li>
              <div className="label-section">
                <span>Xbox</span>
              </div>
              <div className="stats-section">
                <div className="width40 purplebg color-section"></div>
                <span className="stats">997Gb</span>
              </div>
            </li>
            <li>
              <div className="label-section">
                <span>Stream Live</span>
              </div>
              <div className="stats-section">
                <div className="width70 greenbg color-section"></div>
                <span className="stats">997Gb</span>
              </div>
            </li>
          </ul>
        </div>
      </PerfectScrollbar>
    </div>
  );
}
export default ServiceVolume
