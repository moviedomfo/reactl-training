import React from "react";
import "./Topbar.css"
import  {BsFillBadgeTmFill}  from "react-icons/bs";
 import  {MdNotificationsNone}  from "react-icons/md";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrpper">
        <div className="topLeft">
             <span className="logo">
                  Logo Admin
               </span> 
               </div>
        <div className="topRight">
          <div className="topRightIconContainer">
               
                <h4><MdNotificationsNone></MdNotificationsNone></h4> 
                <span className="topIconBadge">3</span> 
          </div>
          <div className="topRightIconContainer">
               
               <h4><MdNotificationsNone></MdNotificationsNone></h4> 
               <span className="topIconBadge">3</span> 
         </div>
      </div>
      </div>
    </div>
  );
};

export default Topbar;
