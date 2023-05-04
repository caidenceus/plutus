import { ResponsivePie } from '@nivo/pie';
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';

function RetirementPieChart ({ data }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.7}
        padAngle={3}
        cornerRadius={8}
        activeOuterRadiusOffset={8}
        // Custom colors
        colors={({ data }) => data.color}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.blue[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        legends={[
            {
                anchor: 'bottom',
                direction: 'column',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 3,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: colors.blue[100],
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />  
    )
}

export default RetirementPieChart;