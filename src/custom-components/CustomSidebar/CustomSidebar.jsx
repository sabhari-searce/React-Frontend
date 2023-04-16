import React from "react";
import "./CustomSidebar.css";
import SidebarHome from "./SideBarContents/SidebarHome";
import SidebarAvatar from "./SideBarContents/SidebarAvatar";
import SidebarNotification from "./SideBarContents/SidebarNotification";
import SidebarPie from "./SideBarContents/SidebarPie";
import SidebarSearch from "./SideBarContents/SidebarSearch";
import SidebarArea from "./SideBarContents/SidebarArea";
import SidebarShop from "./SideBarContents/SidebarStore";
import SidebarAdd from "./SideBarContents/SidebarAdd";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="Avatar">
        <SidebarAvatar />
      </div>
      <div className="OuterContainer">
        <div className="icon">
          <SidebarHome />
        </div>
      </div>
      <div className="OuterContainer">
        <div className="active">
          <SidebarNotification />
        </div>
      </div>
      <div className="OuterContainer">
        <div className="icon">
          <SidebarPie />
        </div>
      </div>
      <div className="OuterContainer">
        <div className="icon">
          <SidebarSearch />
        </div>
      </div>
      <div className="OuterContainer">
        <div className="icon">
          <SidebarArea />
        </div>
      </div>
      <div className="OuterContainer">
        <div className="icon">
          <SidebarShop />
        </div>
      </div>
      <div className="OuterContainer">
        <div className="icon">
          <SidebarAdd />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
