import StatBox from '../../common/StatBox';
import { tokens } from '../../../theme';
import { useTheme } from '@mui/material';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FunctionsIcon from '@mui/icons-material/Functions';

function Row1({ totalROI }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
      <>
        <StatBox
          title="12,361"
          subtitle="Monthly Income"
          icon={<AttachMoneyIcon sx={{ fontSize: "26px" }}/>}
          color={colors.teal[500]}
        />
        <StatBox
          title="431,225"
          subtitle="Monthly Spending"
          icon={<MoneyOffIcon sx={{ fontSize: "26px" }}/>}
          color={colors.yellow[500]}
        />
        <StatBox
          title="32,441"
          subtitle="Monthly Net Worth"
          icon={<FunctionsIcon sx={{ fontSize: "26px" }}/>}
          color={colors.orange[500]}
        />
        <StatBox
          title={totalROI}
          subtitle="Total Assets"
          icon={<TrendingUpIcon sx={{ fontSize: "26px" }}/>}
          color={colors.red[500]}
        />
    </>
    );
}

export default Row1;