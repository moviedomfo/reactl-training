import React from "react";
import "./sidebar.css";
import { BsFillArchiveFill, BsFillCalendarRangeFill } from "react-icons/bs";
import { HashRouter, NavLink, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Accounting</h3>
          <ul className="sidebarList">
            <li className="sideBarItem">
              <Link to="/Bancks">Products</Link>
            </li>
            <li className="sideBarItem">
              <BsFillArchiveFill className="sideBarItemIcon" />
              <NavLink to="/Bancks" activeClassName="active">
                Bancks
              </NavLink>
            </li>
            <li className="sideBarItem">
              <BsFillCalendarRangeFill className="sideBarItemIcon" />
              <NavLink to="/Users" activeClassName="">
                Users
              </NavLink>
            </li>
            <li className="sideBarItem">
              <BsFillCalendarRangeFill className="sideBarItemIcon" />
              <NavLink to="/balance">Balance</NavLink>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Statistics</h3>
          <ul className="sidebarList">
            <li className="sideBarItem">
              <BsFillArchiveFill className="sideBarItemIcon" />
              Sales
            </li>
            <li className="sideBarItem">
              <BsFillCalendarRangeFill className="sideBarItemIcon" />
              Analytics
            </li>
            <li className="sideBarItem active">
              <BsFillCalendarRangeFill className="sideBarItemIcon" />
              Products
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
