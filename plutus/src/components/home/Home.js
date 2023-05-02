import { Box, Button, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Header from "./Header";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import RetirementPieChart from '../common/RetirementPieChart';
import { ResponsiveBar } from '@nivo/bar';

import Row1 from './gridRows/Row1';
import Row2 from './gridRows/Row2';

function Home() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const retirementSavingsPiData = [
    {
      "id": "goal",
      "label": "Retirement goal",
      "value": 1000000,
      "color": colors.red[400]
    },
    {
      "id": "savings",
      "label": "Retirement savings",
      "value": 250000,
      "color": colors.teal[500]
    }
  ]

  const barChartData = [
    {
      "country": "AD",
      "hot dog": 49,
      "hot dogColor": "hsl(155, 70%, 50%)",
      "burger": 24,
      "burgerColor": "hsl(105, 70%, 50%)",
      "sandwich": 161,
      "sandwichColor": "hsl(243, 70%, 50%)",
      "kebab": 128,
      "kebabColor": "hsl(130, 70%, 50%)",
      "fries": 99,
      "friesColor": "hsl(270, 70%, 50%)",
      "donut": 169,
      "donutColor": "hsl(264, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 84,
      "hot dogColor": "hsl(172, 70%, 50%)",
      "burger": 197,
      "burgerColor": "hsl(211, 70%, 50%)",
      "sandwich": 178,
      "sandwichColor": "hsl(224, 70%, 50%)",
      "kebab": 70,
      "kebabColor": "hsl(183, 70%, 50%)",
      "fries": 151,
      "friesColor": "hsl(308, 70%, 50%)",
      "donut": 124,
      "donutColor": "hsl(309, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 193,
      "hot dogColor": "hsl(279, 70%, 50%)",
      "burger": 181,
      "burgerColor": "hsl(210, 70%, 50%)",
      "sandwich": 153,
      "sandwichColor": "hsl(7, 70%, 50%)",
      "kebab": 52,
      "kebabColor": "hsl(15, 70%, 50%)",
      "fries": 103,
      "friesColor": "hsl(4, 70%, 50%)",
      "donut": 186,
      "donutColor": "hsl(349, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 200,
      "hot dogColor": "hsl(357, 70%, 50%)",
      "burger": 26,
      "burgerColor": "hsl(150, 70%, 50%)",
      "sandwich": 58,
      "sandwichColor": "hsl(232, 70%, 50%)",
      "kebab": 117,
      "kebabColor": "hsl(240, 70%, 50%)",
      "fries": 59,
      "friesColor": "hsl(173, 70%, 50%)",
      "donut": 24,
      "donutColor": "hsl(201, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 22,
      "hot dogColor": "hsl(272, 70%, 50%)",
      "burger": 104,
      "burgerColor": "hsl(186, 70%, 50%)",
      "sandwich": 90,
      "sandwichColor": "hsl(265, 70%, 50%)",
      "kebab": 37,
      "kebabColor": "hsl(231, 70%, 50%)",
      "fries": 198,
      "friesColor": "hsl(207, 70%, 50%)",
      "donut": 16,
      "donutColor": "hsl(64, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 71,
      "hot dogColor": "hsl(180, 70%, 50%)",
      "burger": 67,
      "burgerColor": "hsl(282, 70%, 50%)",
      "sandwich": 183,
      "sandwichColor": "hsl(240, 70%, 50%)",
      "kebab": 122,
      "kebabColor": "hsl(84, 70%, 50%)",
      "fries": 182,
      "friesColor": "hsl(144, 70%, 50%)",
      "donut": 15,
      "donutColor": "hsl(202, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 12,
      "hot dogColor": "hsl(93, 70%, 50%)",
      "burger": 57,
      "burgerColor": "hsl(83, 70%, 50%)",
      "sandwich": 125,
      "sandwichColor": "hsl(7, 70%, 50%)",
      "kebab": 196,
      "kebabColor": "hsl(280, 70%, 50%)",
      "fries": 6,
      "friesColor": "hsl(227, 70%, 50%)",
      "donut": 12,
      "donutColor": "hsl(79, 70%, 50%)"
    }
  ]

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
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.blue[700]}
          overflow="hidden"
          borderRadius="10px"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.blue[100]}>
                Retirement Savings
              </Typography>
              <Typography variant="h5" fontWeight="600" color={colors.teal[500]}>
                $109,123.65
              </Typography>
            </Box>
          </Box>

          <Box height="250px" mt="-20px">
            <RetirementPieChart data={retirementSavingsPiData} />
          </Box>
        </Box>

         {/* Row 3 - Recurring spending graph */}
         <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.blue[700]}
          overflow="hidden"
          borderRadius="10px"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.blue[100]}>
                Monthly recurring spending
              </Typography>
              <Typography variant="h5" fontWeight="600" color={colors.teal[500]}>
                $100.46
              </Typography>
            </Box>
          </Box>

          <Box height="250px" mt="-20px">
            <ResponsiveBar
              data={barChartData}
              keys={[
                  'hot dog',
                  'burger',
                  'sandwich',
                  'kebab',
                  'fries',
                  'donut'
              ]}
              indexBy="country"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              reverse={true}
              valueScale={{ type: 'linear' }}
              indexScale={{ type: 'band', round: true }}
              colors={{ scheme: 'blue_purple' }}
              defs={[
                  {
                      id: 'dots',
                      type: 'patternDots',
                      background: 'inherit',
                      color: '#38bcb2',
                      size: 4,
                      padding: 1,
                      stagger: true
                  },
                  {
                      id: 'lines',
                      type: 'patternLines',
                      background: 'inherit',
                      color: '#eed312',
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10
                  }
              ]}
              fill={[
                  {
                      match: {
                          id: 'fries'
                      },
                      id: 'dots'
                  },
                  {
                      match: {
                          id: 'sandwich'
                      },
                      id: 'lines'
                  }
              ]}
              borderRadius={10}
              borderColor={{
                  from: 'color',
                  modifiers: [
                      [
                          'darker',
                          1.6
                      ]
                  ]
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'country',
                  legendPosition: 'middle',
                  legendOffset: 32
              }}
              axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'food',
                  legendPosition: 'middle',
                  legendOffset: -40
              }}
              enableLabel={false}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{
                  from: 'color',
                  modifiers: [
                      [
                          'darker',
                          1.6
                      ]
                  ]
              }}
              legends={[
                  {
                      dataFrom: 'keys',
                      anchor: 'bottom-right',
                      direction: 'column',
                      justify: false,
                      translateX: 120,
                      translateY: 0,
                      itemsSpacing: 2,
                      itemWidth: 100,
                      itemHeight: 20,
                      itemDirection: 'left-to-right',
                      itemOpacity: 0.85,
                      symbolSize: 20,
                      effects: [
                          {
                              on: 'hover',
                              style: {
                                  itemOpacity: 1
                              }
                          }
                      ]
                  }
              ]}
              role="application"
              ariaLabel="Nivo bar chart demo"
              barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
          />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;