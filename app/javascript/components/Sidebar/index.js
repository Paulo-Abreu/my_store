import React from 'react';
import CustomerLinks from "./MenuLinks";
import SalesLinks from './MenuLinks/SalesLinks';
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
          {props.user &&
            props.user.data &&
            props.user.data.user &&
            props.user.data.user.user.user_type == "customer" && (
              <CustomerLinks />
            )}
          {props.user &&
            props.user.data &&
            props.user.data.user &&
            props.user.data.user.user.user_type == "salesman" && (
              <SalesLinks />
            )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
