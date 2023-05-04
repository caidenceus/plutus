import { useTheme } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';
import { tokens } from '../../theme';

function SpendingBarChart({ data }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveBar
              data={data}
              colors={data => data.data.color}
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
              keys={[
                  'amazon prime',
                  'netflix',
                  'leetcode',
                  'printify',
                  'xbox live',
                  'pimsleur',
                  'hulu',
                  'spotify'
              ]}
              indexBy="service"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              valueScale={{ type: 'linear' }}
              indexScale={{ type: 'band', round: true }}
              borderRadius={10}
              axisTop={null}
              axisRight={null}
              enableGridX={false}
              enableGridY={false}
              enableLabel={false}
              labelSkipWidth={12}
              labelSkipHeight={12}
              role="application"
              ariaLabel="Nivo bar chart demo"
              barAriaLabel={e=>e.id + ": " + e.formattedValue + " in service: " + e.indexValue}
          />
    );
}

export default SpendingBarChart;