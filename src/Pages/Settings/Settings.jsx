import React from "react";
import { Outlet } from "react-router-dom";
import "./settings.css";

//components
import SettingsSidebar from "../../components/SettingsSidebar/SettingsSidebar";

const Settings = () => {
  return (
    <>
      <div className="settings">
        <h1 className="settings-title">Settings</h1>

        <div className="settingsWrapper">
          <div className="settings-sidebar">
            <SettingsSidebar />
          </div>
          <div className="settings-main">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
