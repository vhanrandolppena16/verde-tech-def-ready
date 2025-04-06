import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DatasetIcon from "@mui/icons-material/Dataset";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import LiveTvIcon from "@mui/icons-material/LiveTv";

import "./Sidebar.css";
import { useNavigate } from "react-router";
import { authentication } from "../../firebase/firebase";

const Sidebar = ({ setNavigationText, collapsed, setCollapsed }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authentication
      .signOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error)); // Fixed "cconsole" typo
  };

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, route: "/dashboard" },
    { text: "Analysis", icon: <AssessmentIcon />, route: "/analysis" },
    { text: "Dataset", icon: <DatasetIcon />, route: "/dataset" },
    { text: "Control", icon: <SettingsIcon />, route: "/control" },
    { text: "Logs", icon: <SettingsIcon />, route: "/logs" },
    { text: "Account", icon: <AccountCircleIcon />, route: "/account" },
    { text: "About", icon: <InfoIcon />, route: "/about" },
    { text: "Live Stream", icon: <LiveTvIcon />, route: "/livestream" },
    { text: "Log Out", icon: <LogoutIcon />, route: "/logout" }, // Special case
  ];

  const handleItemClick = (item) => {
    setNavigationText(item.text);
    if (item.text === "Log Out") {
      handleLogout();
    } else {
      navigate(item.route);
    }
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <IconButton
          className="toggle-button"
          onClick={() => setCollapsed(!collapsed)}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </div>

      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => handleItemClick(item)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              {!collapsed && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
