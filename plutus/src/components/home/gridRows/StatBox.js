import { Box, Typography } from '@mui/material';;


function StatBox({ title, subtitle, progress, increase, icon, color }) {
    return (
      <Box
        gridColumn="span 3"
        backgroundColor={color}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="10px"
      >
        <Box width="100%" m="0 30px" sx={{ color: 'white' }}>
          <Box display="flex" justifyContent="space-between">
            <Box sx={{ color: 'white' }}>
              {icon}
              <Typography variant="h4" fontWeight="bold">
                {title}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" mt="2px">
            <Typography variant="h5" fontWeight="bold">
              {subtitle}
            </Typography>
            <Typography variant="h5" fontWeight="bold" fontStyle="italic">
              {increase}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
}

export default StatBox;