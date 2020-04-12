import React from 'react';
import { ResponsiveLine } from '@nivo/line';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
const LineChart = ({ data }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 20, bottom: 40, left: 60 }}
        xScale={{
            type: 'time',
            format: '%Y-%m-%dT%H:%M:%S',
            precision: 'hour',
        }}
        xFormat="time:%Y-%m-%dT%H:%M:%S"
        yScale={{ type: 'linear', min: 50, max: 'auto', stacked: false, reverse: false }}
        axisBottom={{
            format: '%b %d',
            tickValues: 'every 8 days',
            legend: 'Date',
            legendOffset: 35,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 0,
            tickPadding: 0,
            tickRotation: 0,
            legend: 'Active cases (confirmed - recovered - deaths)',
            legendOffset: -50,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        colors={{ scheme: 'nivo' }}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        pointSize="2"
        enableSlices="x"
        sliceTooltip={({ slice }) => {
            return (
                <div
                    style={{
                        background: 'white',
                        padding: '9px 12px',
                        border: '1px solid #ccc',
                    }}
                >
                    {slice.points.reverse().map((point, index) => (
                      <div key={point.id}>
                        {index === 0
                          ? <div>{(new Date(point.data.xFormatted)).toString()}</div>
                          : ''
                        }
                        <div
                            style={{
                                color: point.serieColor,
                                padding: '3px 0',
                            }}
                        >
                          {point.serieId}: {point.data.yFormatted} active cases
                        </div>
                      </div>
                    ))}
                </div>
            )
        }}
        useMesh={true}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                justify: false,
                translateX: 10,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 6,
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


export default LineChart;
