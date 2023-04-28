// https://blog.logrocket.com/creating-responsive-sidebar-react-mui/
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function App() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            <h2>Plutus</h2>
          </MenuItem>

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
