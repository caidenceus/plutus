import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Header from "./Header";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FunctionsIcon from '@mui/icons-material/Functions';
import RetirementPieChart from '../common/RetirementPieChart';
import NetWorthLineGraph from '../common/NetWorthLineGraph';
import StatBox from '../common/StatBox';

function StatBoxContainer({ title, subtitle, progress, increase, icon }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      gridColumn="span 3"
      backgroundColor={colors.primary[900]}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <StatBox
        title={title}
        subtitle={subtitle}
        increase={increase}
        icon={icon}
      />
    </Box>
  );
}

function Home() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const netWorthLineData = [
    {
      "id": "Net Worth",
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
    },
    {
      "id": "Net Income",
      "color": colors.blueAccent[400],
      "data": [
        {
          "x": "Jan",
          "y": 101
        },
        {
          "x": "Feb",
          "y": 20
        },
        {
          "x": "Mar",
          "y": 225
        },
        {
          "x": "Apr",
          "y": 286
        },
        {
          "x": "May",
          "y": 188
        },
        {
          "x": "Jun",
          "y": 163
        },
        {
          "x": "Jul",
          "y": 189
        },
        {
          "x": "Aug",
          "y": 89
        },
        {
          "x": "Sep",
          "y": 132
        },
        {
          "x": "Oct",
          "y": 277
        },
        {
          "x": "Nov",
          "y": 204
        },
        {
          "x": "Dec",
          "y": 91
        }
      ]
    },
    {
      "id": "Net Spending",
      "color": colors.redAccent[400],
      "data": [
        {
          "x": "Jan",
          "y": 99
        },
        {
          "x": "Feb",
          "y": 159
        },
        {
          "x": "Mar",
          "y": 55
        },
        {
          "x": "Apr",
          "y": 6
        },
        {
          "x": "May",
          "y": 192
        },
        {
          "x": "Jun",
          "y": 223
        },
        {
          "x": "Jul",
          "y": 189
        },
        {
          "x": "Aug",
          "y": 127
        },
        {
          "x": "Sep",
          "y": 184
        },
        {
          "x": "Oct",
          "y": 257
        },
        {
          "x": "Nov",
          "y": 16
        },
        {
          "x": "Dec",
          "y": 41
        }
      ]
    },
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
        <StatBoxContainer
          title="12,361"
          subtitle="Monthly Income"
          increase="+14%"
          icon={<AttachMoneyIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}
        />
        <StatBoxContainer
          title="431,225"
          subtitle="Monthly Spending"
          increase="+21%"
          icon={<MoneyOffIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}
        />
        <StatBoxContainer
          title="32,441"
          subtitle="Monthly Net Worth"
          increase="+5%"
          icon={<FunctionsIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}
        />
        <StatBoxContainer
          title="1,325,134"
          subtitle="Monthly ROI"
          increase="+43%"
          icon={<TrendingUpIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}
        />

        { /* ROW 2 --- Net Worth Graph */ }
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[900]}
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

        { /* ROW 2 --- Spending List */ }
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[900]}
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