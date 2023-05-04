import { Box, Button, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Header from "./Header";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

import Row1 from './gridRows/Row1';
import Row2 from './gridRows/Row2';
import Row3 from './gridRows/Row3';

function Home() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard!" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blue[700],
              color: colors.blue[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        { /* Overview tiles */ }
        <Row1 />

        { /* Net Worth Graph and Transactions list */ }
        <Row2 />

        {/* Row 3 - Retirement savings */}
        <Row3 />
      </Box>
    </Box>
  );
}

export default Home;