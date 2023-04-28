import { useState } from 'react';

import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  sidebarClasses
} from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import Typeogrphy from './Typography.js';
import './LeftSidebar.css';

function LeftSidebar() {
  const [sidebarBrandVisible, setSidebarBrandVisible] = useState(true);
  const [activeLink, setActiveLink] = useState('home');
  const { collapseSidebar } = useProSidebar();

  const handleActiveLink = (newActiveLink) => {
    setActiveLink(newActiveLink);
  }

  return (
    <Sidebar   
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: 'white',
          border: 'none'
        },
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Menu id="menu-left">
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
              setSidebarBrandVisible(!sidebarBrandVisible);
            }}
            id="sidebar-left-icon"
            className="purple-bg"
          />
            <div  
              style={{
                display: sidebarBrandVisible ? "block" : "none",
                padding: "20px 0 8vh 30px",
              }}
              className={sidebarBrandVisible && "slide-in-x"}
            >
              <Typeogrphy 
                variant={"subtitle1"}
                color={"rgba(125 125 125 / 0.8)"}
                fontWeight={"400"}
              >
                The Plutus Group
              </Typeogrphy>
            </div>

          <MenuItem 
            className={activeLink === 'home' ? 'active-link link purple' : 'link purple'}
            icon={<HomeOutlinedIcon />}
            onClick={() => handleActiveLink('home')}
          >
            Home
          </MenuItem>
          <MenuItem 
            className={activeLink === 'accounts' ? 'active-link link purple' : 'link purple'}
            icon={<AccountBalanceIcon />}
            onClick={() => handleActiveLink('accounts')}
          >
            Financial Accounts
          </MenuItem>
          <MenuItem
            className={activeLink === 'goals' ? 'active-link link purple' : 'link purple'}
            icon={<SportsScoreIcon />}
            onClick={() => handleActiveLink('goals')}
          >
            Financial Goals
          </MenuItem>
          <MenuItem
            className={activeLink === 'settings' ? 'active-link link purple' : 'link purple'}
            icon={<SettingsIcon />}
            onClick={() => handleActiveLink('settings')}
          >
            Account Settings
          </MenuItem>
        </Menu>
      </div>
    </Sidebar>
  );
}

export default LeftSidebar;