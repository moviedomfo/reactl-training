import React from "react";
import './sidebar.css';
import { BsFillArchiveFill,BsFillCalendarRangeFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
            <h3 className="sidebarTittle">Contabilidad</h3> 
            <ul className="sidebarList">
                <li className="sideBarItem">
                    <BsFillArchiveFill className="sideBarItemIcon"/>
                    Item1
                </li>
                <li className="sideBarItem">
                <BsFillCalendarRangeFill className="sideBarItemIcon"/>
                    Item2
                </li>
                <li className="sideBarItem">
                <BsFillCalendarRangeFill className="sideBarItemIcon"/>
                  Elemento
                </li>
                </ul> 
        </div> 
        <div className="sidebarMenu">
            <h3 className="sidebarTittle">Estadisticas</h3> 
            <ul className="sidebarList">
                <li className="sideBarItem">
                    <BsFillArchiveFill className="sideBarItemIcon"/>
                    Item1
                </li>
                <li className="sideBarItem">
                <BsFillCalendarRangeFill className="sideBarItemIcon"/>
                    Item2
                </li>
                <li className="sideBarItem active">
                <BsFillCalendarRangeFill className="sideBarItemIcon"/>
                   <span className="sideBarItemText">Item3</span> 
                </li>
                </ul> 
        </div> 
        </div>    
    </div>
  );
};

export default Sidebar;
