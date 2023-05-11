import LeftSidebar from './components/common/LeftSidebar';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

import TopBar from './components/common/TopBar';
import Home from './components/home/Home';
import Banking from './components/banking/Banking';
import Investments from './components/investments/Investments';
import Profile from './components/profile/Profile';
import Faq from './components/faq/Faq';
import FinancialAccounts from './components/financialAccounts/FinancialAccounts';

import { Routes, Route } from "react-router-dom";
import Spending from './components/spending/Spending';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div id="app" style={{ display: 'flex', height: '100%' }}>
            <LeftSidebar  />
            <main className="content" style={{ width: "100%" }}>
              <TopBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/banking" element={<Banking />} />
                <Route path='/investments' element={<Investments />} />
                <Route path='/spending' element={<Spending />} />
                <Route path='/financial-overview' element={<FinancialAccounts />} />
                <Route path='/profile' element={<Profile />} />
                <Route path="/faq" element={<Faq />} />
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
