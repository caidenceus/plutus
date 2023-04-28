import LeftSidebar from './components/common/LeftSidebar';

import Home from './components/home/Home';
import Accounts from './components/accounts/Accounts';
import Goals from './components/goals/Goals';
import Settings from './components/settings/Settings';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="app" style={{display: "flex", height: "100vh"}}>
      <LeftSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
