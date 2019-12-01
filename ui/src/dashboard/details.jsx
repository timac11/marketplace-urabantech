import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core";
import ChartProvider from "../components/chart/ChartProvider";
import Typography from "@material-ui/core/Typography/Typography";
import Rating from '@material-ui/lab/Rating';
import Box from "@material-ui/core/Box/Box";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from "@material-ui/core/Container/Container";
import {activityData} from "../stabs/stabFile";
import UploadButton from "../components/uploadButton/uploadButton";
import Button from "@material-ui/core/Button";

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

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    if (!index) {
        return (
            <Container hidden={value !== index}>
                <Box paddingLeft="16px" marginTop="16px">
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
            </Container>
        )
    }

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

export function Details() {
    const classes = useStyles();
    const [activeTab, setActiveTab] = React.useState(0);
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <Box paddingLeft="16px" m={2} display={'flex'} justifyContent={'space-evenly'} >
                <Box mb={2}>
                    <Typography variant="h5" paragraph={true}>Библиотека обработки зашумленного звука</Typography>
                    <Box>
                        <Typography display="inline">Описание: </Typography>
                        <Typography display="inline">Данный продукт представляет собой библиотеку для обработки звуковых файлов и дальнейшей фильтрации от шумов.</Typography>
                    </Box>
                    <Box display="flex">
                        <Typography display="inline">Оценка:</Typography>
                        <Rating name="read-only" value={4} readOnly/>
                    </Box>
                </Box>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                    <Typography variant={"h4"}>
                        100000 ₽
                    </Typography>
                    <Box mt={1}>
                        <Button variant={"contained"} color={"secondary"} fullWidth={true}>
                            Купить
                        </Button>
                    </Box>
                </Box>
            </Box>
            <AppBar position="static" color="default">
                <Tabs
                    value={activeTab}
                    onChange={(event, value) => {
                        setActiveTab(value)
                    }}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Технические параметры" {...a11yProps(0)}/>
                    <Tab label="Продуктовые характеристики" {...a11yProps(1)}/>
                </Tabs>
            </AppBar>
            <TabPanel value={activeTab} index={0} dir={theme.direction}>
                Item One
            </TabPanel>
            <TabPanel value={activeTab} index={1} dir={theme.direction}>
                Item Two
            </TabPanel>
        </div>
    )
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
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
            text: `${name}: ${percentage}%`,
            align: 'center',
            verticalAlign: 'middle',
            y: 14
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
        title: {
            text: "График изменений"
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Изменения'
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
            name: 'Активность',
            data: activityData
        }]
    }
}
