import { Box, Typography, IconButton, useTheme } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

import { tokens } from '../../theme';

function Account({ name, type, amount, color, borderColor, icons }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            mt="50px"
            display="flex"
            justifyContent="space-between"
            sx={{
                color: color,
                borderBottom: `2px solid ${borderColor}`,
                paddingBottom: '10px',
            }}
        >
            <Box display="flex" alignItems="center">
                <Box 
                    display="flex"
                    justifyContent="space-between"
                >
                    <IconButton sx={{visibility: icons ? 'visible' : 'hidden'}}>
                        <DeleteOutlineIcon sx={{fontSize: "30px"}} />
                    </IconButton>
                    <IconButton sx={{visibility: icons ? 'visible' : 'hidden'}}>
                        <ModeEditOutlineOutlinedIcon sx={{fontSize: "30px"}} />
                    </IconButton>
                </Box>
                <Box
                    p="10px 0"
                    m="0 20px"
                    sx={{
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        width: "125px",
                        backgroundColor: type !== 'Brokerage' ? colors.yellow[500] : colors.teal[500],
                        visibility: icons ? 'visible' : 'hidden',
                        borderRadius: '5px'
                }}>
                    <Typography
                        variant="h4"
                        fontWeight="500"
                    >
                        {type}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h2" fontWeight="500">
                        {name}
                    </Typography>
                </Box>
            </Box>
            <Typography
                variant="h2"
                fontWeight="500"
                sx={{
                    color: color
                }}
            >
                {amount}
            </Typography>
        </Box>
    );
}

export default Account;