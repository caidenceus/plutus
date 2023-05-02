import StatBox from './StatBox';
import { tokens } from '../../../theme';
import { useTheme } from '@mui/material';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FunctionsIcon from '@mui/icons-material/Functions';

function Row1() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
      <>
        <StatBox
          title="12,361"
          subtitle="Monthly Income"
          increase="+14%"
          icon={<AttachMoneyIcon sx={{ fontSize: "26px" }}/>}
          color={colors.teal[500]}
        />
        <StatBox
          title="431,225"
          subtitle="Monthly Spending"
          increase="+21%"
          icon={<MoneyOffIcon sx={{ fontSize: "26px" }}/>}
          color={colors.yellow[500]}
        />
        <StatBox
          title="32,441"
          subtitle="Monthly Net Worth"
          increase="+5%"
          icon={<FunctionsIcon sx={{ fontSize: "26px" }}/>}
          color={colors.orange[500]}
        />
        <StatBox
          title="1,325,134"
          subtitle="Monthly ROI"
          increase="+43%"
          icon={<TrendingUpIcon sx={{ fontSize: "26px" }}/>}
          color={colors.red[500]}
        />
    </>
    );
}

export default Row1;