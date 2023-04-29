import { ResponsiveLine } from '@nivo/line'

const NetWorthLineGraph = ({ data }) => (
    <ResponsiveLine
        data={data}
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
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 3,
            tickPadding: 8,
            tickRotation: -48,
            legend: 'Month',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 3,
            tickPadding: 20,
            tickRotation: 0,
            legend: 'Dollar Amount',
            legendOffset: -52,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        enableGridY={false}
        lineWidth={6}
        pointSize={9}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={3}
        pointBorderColor={{ from: 'serieColor' }}
        enablePointLabel={true}
        pointLabelYOffset={-18}
        enableArea={true}
        areaOpacity={0.3}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 109,
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
)

export default NetWorthLineGraph;