import { Box, useTheme, Typography } from '@mui/material';
import Header from '../home/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme';

function Faq() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Question 1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Answer to question 1.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Question 2
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Answer to question 2.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Question 3
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Answer to question 3.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

export default Faq;