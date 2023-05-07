import { Box, IconButton, useTheme, Typography } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '../../theme';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

import { tokens } from '../../theme';

function TopBar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" className="root-component">
            { /* Date */ }
            <Box>
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    color={colors.blue[400]}
                >
                    {new Date().toLocaleDateString(
                        'en-us',
                        {
                            weekday:"long",
                            year:"numeric",
                            month:"short",
                            day:"numeric"
                        })
                    }
                </Typography>
            </Box>

            { /* Icons */ }
            <Box display="flex" justifyContent="space-between">
                <IconButton
                    onClick={colorMode.toggleColorMode}
                    sx={{ color: colors.blue[400] }}
                >
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon sx={{ fontSize: "30px" }} />
                    ) : (
                        <LightModeOutlinedIcon sx={{ fontSize: "30px" }} />
                    )}
                </IconButton>
                <IconButton sx={{ color: colors.blue[400] }}>
                    <LinkedInIcon sx={{ fontSize: "30px" }} />
                </IconButton>
                <IconButton sx={{ color: colors.blue[400] }}>
                    <GitHubIcon sx={{ fontSize: "30px" }} />
                </IconButton>
                <IconButton sx={{ color: colors.blue[400] }}>
                    <PersonOutlinedIcon sx={{ fontSize: "30px" }} />
                </IconButton>
            </Box>
        </Box>
    );
}

export default TopBar;