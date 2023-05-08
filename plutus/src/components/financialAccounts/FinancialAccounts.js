import { Box, Typography } from "@mui/material";

import Banking from "../banking/Banking";
import Investments from "../investments/Investments";


function FinancialAccounts() {
    return (
        <>
            <Box className='root-component'>
                <Typography variant="h2" pb="20px">
                    Savings & Checking
                </Typography>
            </Box>
            <Banking />
            <Box className='root-component'>
                <Typography variant="h2" p="20px 0">
                    Investments
                </Typography>
            </Box>
            <Investments />
        </>
    );
}

export default FinancialAccounts;