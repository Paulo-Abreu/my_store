import React from 'react';
import MenuLinks  from './MenuLinks';
import './style.css'

const Sidebar = (props) => {
  return (
      <div className="sidebar">
        <div className="logo">
          <a className="logo-text title is-6"> MyStore </a>
        <hr className="logo-hr" />
      </div>
      <div className="sidebarWrapper">
        <div>
          <MenuLinks />
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
