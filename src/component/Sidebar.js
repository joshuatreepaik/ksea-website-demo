import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
      <h2>Upcoming Events</h2>
      <div className="event">
        <div className='event-detail'>
            <div className="event-date">Aug 20</div>
            <h3>SEED</h3>
            <a href="https://seed.ksea.org/" className="event-description">
            SEED signup form
            </a>
        </div>

      </div>
      <div className="event">
        <div className="event-date">Aug 21</div>
        <h3>US-Korea Conference</h3>
        <a href="https://ukc.ksea.org/" className="event-description">
          More information 
        </a>
      </div>
      <div className="event">
        <div className="event-date">Oct 10</div>
        <h3>STEPUP</h3>
        <a href="https://stepup.ksea.org/" className="event-description">
          More Information
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
