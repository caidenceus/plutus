import { useState } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import SportsScoreOutlinedIcon from "@mui/icons-material/SportsScoreOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MoneyOffIcon from '@mui/icons-material/MoneyOff';

import profilePhoto from '../../assets/profile.png';
import './LeftSidebar.css';

const LeftSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("dashboard");
  const { collapseSidebar } = useProSidebar();

  return (
    <Box>
      <Sidebar
        collapsed={isCollapsed}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: colors.blue[900]
          },
        }}
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => {
              setIsCollapsed(!isCollapsed);
              collapseSidebar();
            }}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.blue[400],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography
                  variant="h3"
                  color={colors.blue[400]}
                  fontWeight="bold"
                >
                  Plutus
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={profilePhoto}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.blue[400]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Caiden
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <MenuItem
              component={<Link to="/" />}
              icon={<HomeOutlinedIcon />}
              selected={selected === 'dashboard'}
              onClick={() => setSelected('dashboard')}
            >
              Dashboard
            </MenuItem>

            <Typography
              variant="h6"
              color={colors.blue[400]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              General
            </Typography>
            <MenuItem
              component={<Link to="/banking" />}
              icon={<SavingsOutlinedIcon />}
              active={selected === 'banking'}
              onClick={() => setSelected('banking')}
            >
              Banking
            </MenuItem>
            <MenuItem
              component={<Link to="/investments" />}
              icon={<PaidOutlinedIcon />}
              active={selected === 'investments'}
              onClick={() => setSelected('investments')}
            >
              Investments
            </MenuItem>
            <MenuItem
              component={<Link to="/spending" />}
              icon={<MoneyOffIcon />}
              active={selected === 'spending'}
              onClick={() => setSelected('spending')}
            >
              Spending
            </MenuItem>

            <Typography
              variant="h6"
              color={colors.blue[400]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Settings
            </Typography>
            <MenuItem
              component={<Link to="/profile" />}
              icon={<PersonOutlinedIcon />}
              active={selected === 'profile'}
              onClick={() => setSelected('profile')}
            >
              Profile
            </MenuItem>
            <MenuItem
              component={<Link to="/financial-overview" />}
              icon={<AccountBalanceOutlinedIcon />}
              active={selected === 'financial-overview'}
              onClick={() => setSelected('financial-overview')}
            >
              Financial accounts
            </MenuItem>
            <MenuItem
              component={<Link to="/faq" />}
              icon={<HelpOutlineOutlinedIcon />}
              className={(selected === 'faq') && 'active-link'}
              onClick={() => setSelected('financial-accounts')}
            >
              FAQ
            </MenuItem>

            <Typography
              variant="h6"
              color={colors.blue[400]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Visualization
            </Typography>
            <MenuItem
              component={<Link to="/retirement-graph" />}
              icon={<BarChartOutlinedIcon />}
              active={selected === 'retirement-graph'}
              onClick={() => setSelected('retirement-graph')}
            >
              Retirement Graph
            </MenuItem>
            <MenuItem
              component={<Link to="/goal-charts" />}
              icon={<SportsScoreOutlinedIcon />}
              active={selected === 'goal-charts'}
              onClick={() => setSelected('goal-charts')}
            >
              Goal Charts
            </MenuItem>
            <MenuItem
              component={<Link to="/income-to-spending" />}
              icon={<TimelineOutlinedIcon />}
              active={selected === 'income-to-spending'}
              onClick={() => setSelected('income-to-spending')}
            >
              Income to Spending
            </MenuItem>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default LeftSidebar;