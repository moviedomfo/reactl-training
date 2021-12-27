import React from "react";
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
            <h3 className="sidebarTittle">Contabilidad</h3> 
            <ul className="sidebarList">
                <li className="sideBarItem">
                    Item1
                </li>
                <li className="sideBarItem">
                    Item2
                </li>
                <li className="sideBarItem">
                    Item3
                </li>
                </ul> 
        </div> 
        </div>    
    </div>
  );
};

export default Sidebar;
