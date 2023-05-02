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
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import profilePhoto from '../../assets/profile.png';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.gray[400],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

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
            backgroundColor: colors.gray[900],

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
              color: colors.gray[400],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.gray[400]}>
                  Overview
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
                  color={colors.gray[400]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Demo User
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  The Plutus Group
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
              color={colors.gray[400]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              General
            </Typography>
            <Item
              title="Banking"
              to="/banking"
              icon={<SavingsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Investments"
              to="/investments"
              icon={<PaidOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Goals"
              to="/goals"
              icon={<SportsScoreOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.gray[400]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Settings
            </Typography>
            <Item
              title="Profile"
              to="/profile"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <MenuItem
              component={<Link to="/financial-accounts" />}
              icon={<AccountBalanceOutlinedIcon />}
              selected={selected === 'financial-accounts'}
              onClick={() => setSelected('financial-accounts')}
            >
              Financial accounts
            </MenuItem>
            <MenuItem
              component={<Link to="/faq" />}
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected === 'faq'}
              onClick={() => setSelected('faq')}
            >
              FAQ
            </MenuItem>

            <Typography
              variant="h6"
              color={colors.gray[400]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Visualization
            </Typography>
            <Item
              title="Retirement graph"
              to="/retirement-graph"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Goal charts"
              to="/goal-charts"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Income to spending"
              to="/income-to-spending"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default LeftSidebar;