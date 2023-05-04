import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../../theme';
import RetirementPieChart from '../../common/RetirementPieChart';
import SpendingBarChart from '../../common/SpendingBarChart';

function Row3() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const retirementSavingsPiData = [
        {
          "id": "goal",
          "label": "Retirement goal",
          "value": 1000000,
          "color": colors.red[500]
        },
        {
          "id": "savings",
          "label": "Retirement savings",
          "value": 250000,
          "color": colors.blue[500]
        }
      ]
    
      const barChartData = [
        {
          "service": "amazon prime",
          "amazon prime": 14.99,
          'color': colors.red[500],
        },
        {
          "service": "netflix",
          "netflix": 9.99,
          "color": colors.orange[500],
        },
        {
          "service": "leetcode",
          "leetcode": 35.00,
          "color": colors.yellow[500],
        },
        {
          "service": "printify",
          "printify": 29.99,
          "color": colors.teal[500],
        },
        {
          "service": "xbox live",
          "xbox live": 9.99,
          "color": colors.blue[500],
        },
        {
          "service": "pimsleur",
          "pimsleur": 19.99,
          "color": colors.red[500],
        },
        {
          "service": "hulu",
          "hulu": 7.99,
          "color": colors.orange[500],
        },
        {
          "service": "spotify",
          "spotify": 9.99,
          "color": colors.yellow[500],
        }
      ]

    return (<>
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
              <Typography variant="h4" fontWeight="600" color={colors.blue[100]}>
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
              <Typography variant="h4" fontWeight="600" color={colors.blue[100]}>
                Monthly recurring spending
              </Typography>
              <Typography variant="h5" fontWeight="600" color={colors.teal[500]}>
                $100.46
              </Typography>
            </Box>
          </Box>

          <Box height="250px" mt="-20px">
            <SpendingBarChart data={barChartData} />
          </Box>
        </Box>
        </>
    );
}

export default Row3;