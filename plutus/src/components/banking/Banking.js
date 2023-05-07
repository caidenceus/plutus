import { Box, useTheme, Button } from '@mui/material';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import NumbersIcon from '@mui/icons-material/Numbers';

import { tokens } from '../../theme';
import BankAccount from './BankAccount';
import StatBox from '../common/StatBox';

function Banking() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const accounts = [

        {
            id: 1,
            type: 'Savings',
            name: "Emprise Savings",
            amount: 95.00,
        },
        {
            id: 2,
            name: "Emprise Checking",
            type: 'Checking',
            amount: 2654.12,
        },
        {
            id: 3,
            type: 'Savings',
            name: "Bank of America Savings",
            amount: 10000.00,
        }
    ];

    function totalSavingsAndChecking() {
        let total = 0;
        for (const account of accounts) {
            total += account.amount;
        }
        return total.toFixed(2);
    }

    function totalSavings() {
        let total = 0;
        for (const account of accounts) {
            if (account.type === 'Savings') {
                total += account.amount;
            }
        }
        return total.toFixed(2);
    }

    function totalChecking() {
        let total = 0;
        for (const account of accounts) {
            if (account.type === 'Checking') {
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
                    title={totalSavingsAndChecking()}
                    subtitle="Total Savings & Checking"
                    icon={<AccountBalanceIcon sx={{ fontSize: "26px" }}/>}
                    color={colors.teal[500]}
                />
                <StatBox
                    title={totalSavings()}
                    subtitle="Total Savings"
                    icon={<SavingsIcon sx={{ fontSize: "26px" }}/>}
                    color={colors.yellow[500]}
                />
                <StatBox
                    title={totalChecking()}
                    subtitle="Total Checking"
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
                <BankAccount 
                    key='table-legend'
                    name='Account Name'
                    type=''
                    amount='Amount'
                    color={colors.blue[500]}
                    borderColor={colors.blue[500]}
                    icons={false}
                />
                {accounts.map((account) => {
                    return <BankAccount
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

export default Banking;