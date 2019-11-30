import React, {useState} from 'react';
import {Box, Checkbox, Divider, FormControlLabel, FormGroup, makeStyles, Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import PricePicker from "../PricePicker/PricePicker";
import IntervalPicker from "../IntervalPicker/IntervalPicker";
import "./react-datepicker.css";
import Button from "@material-ui/core/Button";

RightDrawer.propTypes = {
    id: PropTypes.number.isRequired
}


const useStyles = makeStyles(theme => ({
    drawer: {
        width: '20vw',
        border: '1px solid rgba(0,0,0,0.5)',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    checkBoxLabel: {
        fontSize: '12px'
    }
}))

function RightDrawer({id}) {
    const [startDate, setStartDate] = useState(new Date());
    const classes = useStyles()

    return (
        <Box className={classes.drawer} p={2}>
            <Box>
                <Typography variant={"h5"}>
                    <b>Фильтры:</b>
                </Typography>
                <Typography>
                    Тип продукта:
                </Typography>
                <Box ml={1}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={true}/>}
                            label="Библиотека"
                            classes={{
                                label: classes.checkBoxLabel
                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={true}/>}
                            label="Коммерческое решение"
                            classes={{
                                label: classes.checkBoxLabel
                            }}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={true}/>
                            }
                            label="Код"
                            classes={{
                                label: classes.checkBoxLabel
                            }}
                        />
                    </FormGroup>
                </Box>
            </Box>
            <br />
            <Box>
                <Typography>
                    Средняя оценка:
                </Typography>
            </Box>
            <br />
            <Box>
                <Typography>
                    Стоимость:
                </Typography>
                <PricePicker />
            </Box>
            <Box>
                <Typography>
                    Кол-во скачиваний:
                </Typography>
                <IntervalPicker/>
            </Box>
            <Box>
                <Typography>
                    Безопасность:
                </Typography>
                <Typography>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Только проверенные"
                        />
                    </FormGroup>
                </Typography>
            </Box>
            <Divider/>
            <br />
            <Box alignSelf={'center'}>
                <Button variant={"contained"} color={"primary"}>
                    Применить
                </Button>
            </Box>
        </Box>
    );
}

export default RightDrawer;
