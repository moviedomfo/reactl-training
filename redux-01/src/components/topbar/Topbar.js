import React from "react";
import "./Topbar.css";
import { BsFillBadgeTmFill } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import { IoIosGitMerge, IoIosGitCompare } from "react-icons/io";
import imgAvatar from "./../../assets/avatar04.png";

const Topbar = () => {
    return (
    <div className="topbar">
      <div className="topbarWrpper">
        <div className="topLeft">
          <span className="logo">Logo Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <h4>
              <MdNotificationsNone></MdNotificationsNone>
            </h4>
            <span className="topIconBadge">3</span>
          </div>
          <div className="topbarIconContainer">
            <h4>
              <IoIosGitCompare></IoIosGitCompare>
            </h4>
            <span className="topIconBadge">3</span>
          </div>
          <div className="topbarIconContainer">
            <h4>
              <IoIosGitMerge></IoIosGitMerge>
            </h4>
            <span className="topIconBadge">3</span>
          </div>
          <img  src="{imgAvatar}"     alt="logo" className="topAvatar"/>
          {/* <img src={require("./../assets/avatar04.png").default} className="topAvatar"/> */}
           </div>
      </div>
    </div>
  );
};

export default Topbar;
