import React from "react";
import "./settingssidebar.css";
import { Link } from "react-router-dom";

const SettingsSidebar = () => {
  return (
    <>
      <div className="settings-sidebar-container">
        <Link to="">
          <h2 className="settings-sidebar-menuItem">Profile</h2>
        </Link>
        <Link to="manage">
          <h2 className="settings-sidebar-menuItem">Manage</h2>
        </Link>
      </div>
    </>
  );
};

export default SettingsSidebar;
