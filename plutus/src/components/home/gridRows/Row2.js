import { Box, Typography, IconButton, useTheme } from '@mui/material';

import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { tokens } from '../../../theme';
import NetWorthLineGraph from '../../common/NetWorthLineGraph';

import chipotleLogo from '../../../assets/chipotle.png';
import walmart from '../../../assets/walmart.png';
import piggyBank from '../../../assets/piggyBank.png';
import quickTrip from '../../../assets/quickTrip.png';
import amazon from '../../../assets/amazon.png';

function Row2() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const netWorthLineData = [
        {
          "id": "+ Worth",
          "color": colors.yellow[500],
          "data": [
            {
              "x": "Jan",
              "y": 563
            },
            {
              "x": "Feb",
              "y": 456
            },
            {
              "x": "Mar",
              "y": 499
            },
            {
              "x": "Apr",
              "y": 500
            },
            {
              "x": "May",
              "y": 234
            },
            {
              "x": "Jun",
              "y": 511
            },
            {
              "x": "Jul",
              "y": 179
            },
            {
              "x": "Aug",
              "y": 381
            },
            {
              "x": "Sep",
              "y": 601
            },
            {
              "x": "Oct",
              "y": 528
            },
            {
              "x": "Nov",
              "y": 333
            },
            {
              "x": "Dec",
              "y": 127
            }
          ]
        },
        {
          "id": "+ Income",
          "color": colors.teal[500],
          "data": [
            {
              "x": "Jan",
              "y": 2050
            },
            {
              "x": "Feb",
              "y": 1434
            },
            {
              "x": "Mar",
              "y": 2145
            },
            {
              "x": "Apr",
              "y": 1220
            },
            {
              "x": "May",
              "y": 900
            },
            {
              "x": "Jun",
              "y": 2500
            },
            {
              "x": "Jul",
              "y": 1234
            },
            {
              "x": "Aug",
              "y": 100
            },
            {
              "x": "Sep",
              "y": 234
            },
            {
              "x": "Oct",
              "y": 1234
            },
            {
              "x": "Nov",
              "y": 1559
            },
            {
              "x": "Dec",
              "y": 2001
            }
          ]
        },
        {
          "id": "- Spending",
          "color": colors.red[500],
          "data": [
            {
              "x": "Jan",
              "y": -1500
            },
            {
              "x": "Feb",
              "y": -1755
            },
            {
              "x": "Mar",
              "y": -125
            },
            {
              "x": "Apr",
              "y": -111
            },
            {
              "x": "May",
              "y": -1222
            },
            {
              "x": "Jun",
              "y": -1444
            },
            {
              "x": "Jul",
              "y": -200
            },
            {
              "x": "Aug",
              "y": -123
            },
            {
              "x": "Sep",
              "y": -1029
            },
            {
              "x": "Oct",
              "y": -1009
            },
            {
              "x": "Nov",
              "y": -1234
            },
            {
              "x": "Dec",
              "y": 0
            }
          ]
        },
      ]

      const mockTransactions = [
        {
          txId: 1,
          title: 'Amazon Prime',
          amount: -11.45,
          logo: amazon
        },
        {
          txId: 2,
          title: 'Walmart',
          amount: -124.36,
          logo: walmart
        },
        {
          txId: 3,
          title: 'Paycheck',
          amount: 1715.54,
          logo: piggyBank
        },
        {
          txId: 4,
          title: 'QuickTrip',
          amount: -25.00,
          logo: quickTrip
        },
        {
          txId: 5,
          title: 'Checking interest',
          amount: 2.45,
          logo: piggyBank
        },
        {
          txId: 6,
          title: 'Chipotle',
          amount: -11.34,
          logo: chipotleLogo
        },
      ]

    return (
        <>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.blue[700]}
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
              <Typography variant="h4" fontWeight="600" color={colors.blue[100]}>
                Net Worth
              </Typography>
              <Typography variant="h5" fontWeight="bold" color={colors.teal[500]}>
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon 
                  sx={{ fontSize: "26px", color: colors.teal[500] }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box height="250px" mt="-20px">
            <NetWorthLineGraph data={netWorthLineData} />
          </Box>
        </Box>

        { /* ROW 2 --- Recent transactions */ }
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.blue[700]}
          overflow="auto"
          borderRadius="10px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.blue[900]}`}
            color={colors.blue[100]}
            p="15px"
          >
              <Typography
                color={colors.blue[100]}
                variant='h4'
                fontWeight="600"
              >
                Recent Transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.blue[900]}`}
              >
                <Box padding="10px" display="flex" alignItems="center">
                  <Box paddingRight="10px">
                    <img
                      src={transaction.logo}
                      alt=""
                      style={{
                        height: "30px",
                        width: "30px",
                        borderRadius: "50%",
                      }} />
                  </Box>
                  <Typography
                    color={colors.blue[100]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.title}
                  </Typography>
                </Box>
                <Box color={colors.blue[100]}>{transaction.date}</Box>
                <Box
                  color={transaction.amount < 0 ? colors.red[500] : colors.teal[500]}
                  variant="h5"
                  fontWeight="600"
                  paddingRight="20px"
                >
                  {transaction.amount}
                </Box>
              </Box>
            ))}
        </Box>
        </>
    );
}

export default Row2;