import React from "react";
import './sidebar.css';
import { BsFillArchiveFill,BsFillCalendarRangeFill } from "react-icons/bs";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";

const Sidebar = () => {
  return (

<div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
            <h3 className="sidebarTittle">Accounting</h3> 
            <ul className="sidebarList">
                <li className="sideBarItem">
                    <BsFillArchiveFill className="sideBarItemIcon"/>
                    Bancks
                </li>
                <li className="sideBarItem">
                <BsFillCalendarRangeFill className="sideBarItemIcon"/>
                Checks
                </li>
                <li className="sideBarItem">
                <BsFillCalendarRangeFill className="sideBarItemIcon"/>
                  Balance
                </li>
                </ul> 
        </div> 
        <div className="sidebarMenu">
            <h3 className="sidebarTittle">Statistics</h3> 
            <ul className="sidebarList">
                <li className="sideBarItem">
                    <BsFillArchiveFill className="sideBarItemIcon"/>
                    Sales
                </li>
                <li className="sideBarItem">
                <BsFillCalendarRangeFill className="sideBarItemIcon"/>
                    Analytics
                </li>
                <li className="sideBarItem active">
                <BsFillCalendarRangeFill className="sideBarItemIcon"/>
                   Products
                </li>
                </ul> 
        </div> 
        </div>    
    </div>


  
  );
};

export default Sidebar;
