import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Header from "./Header";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import RetirementPieChart from '../common/RetirementPieChart';
import NetWorthLineGraph from '../common/NetWorthLineGraph';
import StatBox from '../common/StatBox';
import ProgressCircle from '../common/ProgressCircle';

function Home() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const netWorthLineData = [
    {
      "id": "Worth",
      "color": colors.greenAccent[500],
      "data": [
        {
          "x": "Jan",
          "y": 135
        },
        {
          "x": "Feb",
          "y": 205
        },
        {
          "x": "Mar",
          "y": 152
        },
        {
          "x": "Apr",
          "y": 144
        },
        {
          "x": "May",
          "y": 184
        },
        {
          "x": "Jun",
          "y": 286
        },
        {
          "x": "Jul",
          "y": 179
        },
        {
          "x": "Aug",
          "y": 166
        },
        {
          "x": "Sep",
          "y": 0
        },
        {
          "x": "Oct",
          "y": 77
        },
        {
          "x": "Nov",
          "y": 33
        },
        {
          "x": "Dec",
          "y": 83
        }
      ]
    }
  ]

  const retirementSavingsPiData = [
    {
      "id": "goal",
      "label": "Retirement goal",
      "value": 1000000,
      "color": colors.redAccent[400]
    },
    {
      "id": "savings",
      "label": "Retirement savings",
      "value": 250000,
      "color": colors.greenAccent[500]
    }
  ]

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.gray[100],
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
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        { /* ROW 2 */ }
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.gray[100]}>
                Net Worth
              </Typography>
              <Typography variant="h5" fontWeight="600" color={colors.greenAccent[500]}>
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon 
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box height="250px">
            <NetWorthLineGraph data={netWorthLineData} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.gray[100]}
            p="15px">
              <Typography
                color={colors.gray[100]}
                variant='h5'
                fontWeight="600"
              >
                Retirement Savings
              </Typography>
              <Box height="250px">
                <RetirementPieChart data={retirementSavingsPiData} />
              </Box>
            </Box>
          </Box>
      </Box>
    </Box>
  );
}

export default Home;