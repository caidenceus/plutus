import { Box, useTheme, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import NumbersIcon from '@mui/icons-material/Numbers';

import chipotleLogo from '../../assets/chipotle.png';
import walmart from '../../assets/walmart.png';
import piggyBank from '../../assets/piggyBank.png';
import quickTrip from '../../assets/quickTrip.png';
import amazon from '../../assets/amazon.png';
import bestBuy from '../../assets/bestBuy.png';
import ymca from '../../assets/ymca.png';
import udemy from '../../assets/udemy.png';

import { tokens } from '../../theme';
import StatBox from '../common/StatBox';

function TransactionList({ title, transactions }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    function total() {
        let total = 0;
        for (const t of transactions) {
            total += t.amount;
        }
        return total.toFixed(2);
    }

    return (
        <Box
            gridColumn="span 5"
            gridRow="span 2"
            backgroundColor={colors.blue[700]}
            overflow="auto"
            borderRadius="10px"
        >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p="15px 15px 0 15px"
            >
                <Typography
                    variant='h6'
                    fontWeight="600"
                    color={colors.blue[300]}
                >
                    Account Name
                </Typography>
                <Typography
                    variant='h6'
                    fontWeight="600"
                    color={colors.blue[300]}
                >
                    Total
                </Typography>
            </Box>
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
                    fontWeight="500"
                >
                    {title}
                </Typography>
                <Typography
                    color={colors.blue[100]}
                    variant='h4'
                    fontWeight="500"
                >
                    {total()}
                </Typography>
            </Box>
            {transactions.map((transaction, i) => (
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
    );
}

function Spending() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const mockDebitTransactions = [
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

      const mockCreditTransactions = [
        {
          txId: 1,
          title: 'YMCA',
          amount: -38.99,
          logo: ymca
        },
        {
          txId: 2,
          title: 'Bestbuy',
          amount: -32.36,
          logo: bestBuy
        },
        {
          txId: 3,
          title: 'Udemy',
          amount: -15.99,
          logo: udemy
        },
        {
          txId: 4,
          title: 'QuickTrip',
          amount: -25.00,
          logo: quickTrip
        },
        {
          txId: 5,
          title: 'Chipotle',
          amount: -11.34,
          logo: chipotleLogo
        },
      ]
    
      function mockDebitTotal() {
        let total = 0;
        for (const t of mockDebitTransactions) {
            total += t.amount;
        }
        return total.toFixed(2);
      }

      function mockCreditTotal() {
        let total = 0;
        for (const t of mockCreditTransactions) {
            total += t.amount;
        }
        return total.toFixed(2);
      }

      function mockTotal() {
        return (parseFloat(mockDebitTotal()) + parseFloat(mockCreditTotal())).toFixed(2);
      }

    return (
        <Box className="root-component">
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
                pb="30px"
            >
                <StatBox
                    title={mockTotal()}
                    subtitle="Total Spending"
                    icon={<SavingsIcon sx={{ fontSize: "26px" }}/>}
                    color={colors.teal[500]}
                />
                <StatBox
                    title={mockDebitTotal()}
                    subtitle="Debit Spending"
                    icon={<AttachMoneyIcon sx={{ fontSize: "26px" }}/>}
                    color={colors.yellow[500]}
                />
                <StatBox
                    title={mockCreditTotal()}
                    subtitle="Credit Spending"
                    icon={<AccountBalanceIcon sx={{ fontSize: "26px" }}/>}
                    color={colors.orange[500]}
                />
                <StatBox
                    title="2"
                    subtitle="Number of Accounts"
                    icon={<NumbersIcon sx={{ fontSize: "26px" }}/>}
                    color={colors.red[500]}
                />
            </Box>

            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                <TransactionList 
                    title="Bank of America Debit"
                    transactions={mockDebitTransactions}
                />
                <TransactionList 
                    title="Chase Gold Credit"
                    transactions={mockCreditTransactions}
                />

                <Box
                    gridColumn="span 2"
                    gridRow="span 2"
                    overflow="hidden"
                    borderRadius="10px"
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Box>
                        <IconButton sx={{ color: colors.blue[400] }}>
                            <AddIcon sx={{fontSize: "100px"}} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Spending;