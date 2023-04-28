import { useState } from 'react';

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import './App.css';

function App() {
  const [sidebarBrandVisible, setSidebarBrandVisible] = useState(true);
  const { collapseSidebar } = useProSidebar();

  return (
    <div id="app">
      <Sidebar id="sidebar-left">
        <Menu id="menu-left">
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
              setSidebarBrandVisible(!sidebarBrandVisible);
            }}
            id="sidebar-left-icon"
          >
          </MenuItem>
          <h3 id="brand" style={{visibility: sidebarBrandVisible ? "visible" : "hidden"}}>Plutus</h3>

          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<AccountBalanceIcon />}>Financial Accounts</MenuItem>
          <MenuItem icon={<SportsScoreIcon />}>Financial Goals</MenuItem>
          <MenuItem icon={<SettingsIcon />}>Account Settings</MenuItem>
        </Menu>
      </Sidebar>

      <div id="content">
        <h1 style={{ color: "white", marginLeft: "5rem" }}>
          Content
        </h1>
      </div>
    </div>
  );
}

export default App;
