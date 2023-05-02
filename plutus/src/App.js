import LeftSidebar from './components/common/LeftSidebar';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

import TopBar from './components/common/TopBar';
import Home from './components/home/Home';
import Faq from './components/faq/Faq';

import { Routes, Route } from "react-router-dom";

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
