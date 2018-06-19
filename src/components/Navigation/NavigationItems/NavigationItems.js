import React from 'react';

const navigationItems = () => {
   return (
      <React.Fragment>
         <ul className="nav">
          <li className="nav-item">
            <a className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Notifications</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Messages</a>
          </li>
        </ul>
      </React.Fragment>
   )
}

export default navigationItems;
