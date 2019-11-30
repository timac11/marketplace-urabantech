import React from 'react';
import {makeStyles} from "@material-ui/core";
import ChartProvider from "../components/chart/ChartProvider";
import Typography from "@material-ui/core/Typography/Typography";
import Rating from '@material-ui/lab/Rating';
import Box from "@material-ui/core/Box/Box";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        padding: "12px"
    },
    button: {
        marginRight: theme.spacing(1),
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

export function Details() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box paddingLeft="16px">
                <Typography variant="h5" paragraph={true}>Base parameters</Typography>
                <Box>
                    <Typography display="inline">Description: </Typography>
                    <Typography display="inline">My application tra ta ta</Typography>
                </Box>
                <Box display="flex">
                    <Typography display="inline">Mark:</Typography>
                    <Rating name="read-only" value={4} readOnly/>
                </Box>
            </Box>
            <Box paddingLeft="16px" marginTop="16px">
                <Typography variant="h5" paragraph={true}>Technical parameters</Typography>
                <div style={{display: "flex", height: "200px", justifyContent: "space-between"}}>
                    <div style={{width: "25%"}}>
                        <ChartProvider chart={buildPieChartConfig("CPU", 64)}/>
                    </div>
                    <div style={{width: "25%"}}>
                        <ChartProvider chart={buildPieChartConfig("RAM", 22)}/>
                    </div>
                    <div style={{width: "25%"}}>
                        <ChartProvider chart={buildPieChartConfig("Load", 84)}/>
                    </div>
                </div>
            </Box>
            <div style={{height: "100px", padding: "12px"}}>
                <ChartProvider chart={buildActivityGraph()}/>
            </div>
        </div>
    )
}

function buildPieChartConfig(name, percentage) {
    return {
        chart: {
            type: 'pie',
            height: 200
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,

                }
            }
        },
        title: {
            text: `${name}: ${percentage}`,
            align: 'center',
            verticalAlign: 'middle',
            y: 10
        },
        tooltip: {
            headerFormat: ''
        },
        series: [{
            minPointSize: 1,
            innerSize: '85%',
            zMin: 0,
            name: name,
            data: [
                {
                    name: 'no',
                    color: '#d1d1d1',
                    y: 100 - percentage
                },
                {
                    name: name,
                    color: '#2e7ad8',
                    y: percentage
                }]
        }]
    }
}

function buildActivityGraph() {
    return {
        chart: {
            zoomType: 'x',
            height: 200
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Exchange rate'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'User activity',
            data: [[
                1167609600000,
                0.7537
            ],
                [
                    1167696000000,
                    0.7537
                ],
                [
                    1167782400000,
                    0.7559
                ],
                [
                    1167868800000,
                    0.7631
                ],
                [
                    1167955200000,
                    0.7644
                ],
                [
                    1168214400000,
                    0.769
                ],
                [
                    1168300800000,
                    0.7683
                ],
                [
                    1168387200000,
                    0.77
                ],
                [
                    1168473600000,
                    0.7703
                ],
                [
                    1168560000000,
                    0.7757
                ],
                [
                    1168819200000,
                    0.7728
                ],
                [
                    1168905600000,
                    0.7721
                ],
                [
                    1168992000000,
                    0.7748
                ]]
        }]
    }
}