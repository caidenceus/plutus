import { ResponsiveLine } from '@nivo/line';
import { useTheme } from '@mui/material';

import { tokens } from '../../theme';

function NetWorthLineGraph ({ data }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
    <>
    <ResponsiveLine
        data={data}
        theme={{
            axis: {
                domain: {
                    line: {
                        stroke: colors.blue[100]
                    }
                },
                legend: {
                    text: {
                        fill: colors.blue[100]
                    }
                },
                ticks: {
                    line: {
                        stroke: colors.blue[100],
                        strokeWidth: 1
                    },
                    text: {
                        fill: colors.blue[100]
                    }
                }
            },
            legends: {
                text: {
                    fill: colors.blue[100]
                }
            }
        }}
        colors={data => data.color}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 3,
            tickPadding: 8,
            tickRotation: -48,
            legend: '',
            legendOffset: 36,
            legendPosition: 'middle'
        }}

        enableGridX={false}
        enableGridY={false}
        lineWidth={6}
        pointSize={9}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor' }}
        enablePointLabel={false}
        pointLabelYOffset={-18}
        enableArea={true}
        areaOpacity={0.1}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 2,
                itemDirection: 'left-to-right',
                itemWidth: 79,
                itemHeight: 38,
                itemOpacity: 0.75,
                symbolSize: 16,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </>)
}

export default NetWorthLineGraph;