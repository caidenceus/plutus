import { Box, Typography, useTheme, Button } from "@mui/material";
import profilePhoto from '../../assets/profile.png';

import { tokens } from "../../theme";

function Input({ label }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
        <Box width="48%">
            <Typography
                variant="h5"
                color={colors.teal[500]}
                fontWeight="bold"
                p="0 0 6px 0"
            >
                {label}
            </Typography>
            <input
                type="text"
                style={{
                    width: "100%",
                    backgroundColor: colors.blue[200],
                    height: "40px", border:
                    `1px solid ${colors.blue[400]}`,
                    borderRadius: "6px",
                    paddingLeft: "10px"
                }}
            />
        </Box>
    );
}

function Profile() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
        <Box className="root-component" display="flex" justifyContent="space-evenly">
            <Box width="80%">
                <Typography
                    variant="h3"
                    fontWeight="600"
                    color={colors.blue[200]}
                >
                    Account
                </Typography>
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    color={colors.teal[500]}
                    pt="16px"
                >
                    Profile
                </Typography>
                <Typography
                    color={colors.blue[200]}
                    fontWeight="500"
                >
                    Edit your global account and profile settings.
                </Typography>

                { /* First name and last name */ }
                <Box
                    display="flex"
                    justifyContent="space-between"
                    p="35px 0"
                >
                    <Input label="First name" />
                    <Input label="Last name" />
                </Box>

                { /* Username */ }
                <Box>
                    <Box width="48%">
                        <Typography
                            variant="h5"
                            color={colors.teal[500]}
                            fontWeight="bold"
                            p="0 0 6px 0"
                        >
                            Username
                        </Typography>
                        <Box
                            display="flex"
                            alignItems="center"
                        >
                            <Box
                                display="flex"
                                alignItems="center"
                                textAlign="right"
                                sx={{
                                    backgroundColor: colors.orange[500],
                                    height: "40px",
                                    width: "100px",
                                    padding: "0 5px",
                                    borderRadius: "6px"
                                }}
                            >
                                <Typography
                                    sx={{ width: "100%" }}
                                    fontWeight="bold"
                                >
                                    plutus.com/
                                </Typography>
                            </Box>
                            <input
                                type="text"
                                style={{
                                    width: "100%",
                                    backgroundColor: colors.blue[200],
                                    height: "40px",
                                    border: `1px solid ${colors.blue[400]}`,
                                    borderRadius: "6px",
                                    paddingLeft: "10px"
                                }}
                            />
                        </Box>
                    </Box>
                </Box>

                { /* Photo */ }
                <Box>
                    <Typography
                        variant="h5"
                        color={colors.teal[500]}
                        fontWeight="bold"
                        p="30px 0 9px 0"
                    >
                        Photo
                    </Typography>
                    <Box
                        display="flex"
                        alignItems="center"
                    >
                        <Box>
                            <img
                                alt="profile-user"
                                width="75px"
                                height="75px"
                                src={profilePhoto}
                                style={{ cursor: "pointer", borderRadius: "50%" }}
                            />
                        </Box>
                        <Button
                            sx={{
                                backgroundColor: colors.blue[700],
                                color: colors.blue[100],
                                fontSize: "14px",
                                fontWeight: "bold",
                                padding: "12px 20px",
                                margin: "0 12px"
                            }}
                        >
                            Change
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
                            Remove
                        </Button>
                    </Box>
                </Box>

                <Typography
                    variant="h3"
                    fontWeight="600"
                    color={colors.blue[200]}
                    pt="30px"
                >
                    Personal Information
                </Typography>

                { /* Email address and phone number */ }
                <Box
                    display="flex"
                    justifyContent="space-between"
                    p="35px 0"
                >
                    <Input label="Email" />
                    <Input label="Phone number" />
                </Box>

                { /* Country and Region */ }
                <Box
                    display="flex"
                    justifyContent="space-between"
                    p="35px 0"
                >
                    <Input label="Country" />
                    <Input label="Region" />
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    { /* Empty typograph so that buttons get pushed to the right */ }
                    <Typography></Typography>
                    <Box>
                        <Button
                            sx={{
                                backgroundColor: colors.blue[700],
                                color: colors.blue[100],
                                fontSize: "14px",
                                fontWeight: "bold",
                                padding: "12px 20px",
                                margin: "0 12px"
                            }}
                        >
                            Save
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
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Profile;