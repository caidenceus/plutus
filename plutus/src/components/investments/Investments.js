import { Box, useTheme, Button } from '@mui/material';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import NumbersIcon from '@mui/icons-material/Numbers';

import { tokens } from '../../theme';
import InvestmentAccount from './InvestmentAccount';
import StatBox from '../common/StatBox';

function Investments() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const accounts = [
        {
            id: 1,
            type: 'Brokerage',
            name: "Vanguard Brockerage",
            amount: 95.00,
        },
        {
            id: 2,
            name: "Vanguard Total Stockt Market Index",
            type: 'ROTH IRA',
            amount: 2654.12,
        },
        {
            id: 3,
            type: '401 (k)',
            name: "ADP Retirement Services",
            amount: 10000.00,
        },
        {
            id: 4,
            type: 'Brokerage',
            name: "Fidelity 2% Cash Back Rewards",
            amount: 10000.00,
        },
        {
            id: 5,
            type: 'Index Fund',
            name: "Vanguard Total Market Bond Index",
            amount: 10000.00,
        }
    ];

    function totalBrokerageAndInvestments() {
        let total = 0;
        for (const account of accounts) {
            total += account.amount;
        }
        return total.toFixed(2);
    }

    function totalBrokerage() {
        let total = 0;
        for (const account of accounts) {
            if (account.type === 'Brokerage') {
                total += account.amount;
            }
        }
        return total.toFixed(2);
    }

    function totalInvestments() {
        let total = 0;
        for (const account of accounts) {
            if (account.type !== 'Brokerage') {
                total += account.amount;
            }
        }
        return total.toFixed(2);
    }

    return (
        <Box className="root-component">
            { /* Stat boxes */ }
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
                pb="30px"
            >
                <StatBox
                    title={totalBrokerageAndInvestments()}
                    subtitle="Total Assets"
                    icon={<AccountBalanceIcon sx={{ fontSize: "26px" }}/>}
                    color={colors.teal[500]}
                />
                <StatBox
                    title={totalInvestments()}
                    subtitle="Total Investment Allocation"
                    icon={<SavingsIcon sx={{ fontSize: "26px" }}/>}
                    color={colors.yellow[500]}
                />
                <StatBox
                    title={totalBrokerage()}
                    subtitle="Total Brokerage Allocation"
                    icon={<AttachMoneyIcon sx={{ fontSize: "26px" }}/>}
                    color={colors.orange[500]}
                />
                <StatBox
                    title={accounts.length}
                    subtitle="Connected Accounts"
                    icon={<NumbersIcon sx={{ fontSize: "26px" }}/>}
                    color={colors.red[500]}
                />
            </Box>

            {/* Add account buttons */}
            <Box>
                <Button
                    sx={{
                        backgroundColor: colors.blue[700],
                        color: colors.blue[100],
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "12px 20px",
                        marginRight: "12px",
                        }}
                >
                    Add Account Manually
                </Button>
                <Button
                    sx={{
                        backgroundColor: colors.blue[700],
                        color: colors.blue[100],
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "12px 20px",
                        }}
                >
                    Add Account by Integration
                </Button>
            </Box>

            { /* List of accounts */ }
            <Box>
                <InvestmentAccount 
                    key='table-legend'
                    name='Account Name'
                    type=''
                    amount='Amount'
                    color={colors.blue[500]}
                    borderColor={colors.blue[500]}
                    icons={false}
                />
                {accounts.map((account) => {
                    return <InvestmentAccount
                        key={`bank-account-${account.id}`}
                        name={account.name}
                        type={account.type}
                        amount={account.amount}
                        color={colors.blue[300]}
                        borderColor={colors.blue[300]}
                        icons={true}
                    />
                })}
            </Box>
        </Box>
    );
}

export default Investments;