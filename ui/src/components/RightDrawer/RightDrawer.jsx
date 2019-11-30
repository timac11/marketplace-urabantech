import React from 'react';
import {Box, Checkbox, Divider, FormControlLabel, makeStyles, Typography, FormGroup, Slider} from "@material-ui/core";
import PropTypes from "prop-types";
import PricePicker from "../PricePicker/PricePicker";


RightDrawer.propTypes = {
    id: PropTypes.number.isRequired
}


const useStyles = makeStyles(theme => ({
    drawer: {
        width: '20vw'
    }
}))

function RightDrawer({id}) {
    const classes = useStyles()

    return (
        <Box className={classes.drawer}>
            <Box>
                <Typography>
                    Фильтры:
                </Typography>
                <Typography>
                    Тип продукта:
                </Typography>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Библиотека"
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Коммерческое решение"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox />
                        }
                        label="Код"
                    />
                </FormGroup>
            </Box>
            <Box>
                <Typography>
                    Средняя оценка:
                </Typography>
            </Box>
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
                19
            </Box>
            <Box>
                <Typography>
                    Дата публикации:
                </Typography>
                <Typography>
                    11.11.2019
                </Typography>
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
        </Box>
    );
}

export default RightDrawer;
