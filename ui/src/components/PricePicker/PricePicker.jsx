import React from 'react';
import numeral from "numeral";
import Slider from "@material-ui/core/Slider";
import {makeStyles} from "@material-ui/core";

const marks = [
    {
        value: 1000,
        label: '1000 ₽',
    },
    {
        value: 300000,
        label: '300000 ₽',
    },
    {
        value: 500000,
        label: '500000 ₽',
    },
    {
        value: 1000000,
        label: '1000000 ₽',
    },
];

const useStyles = makeStyles(theme => ({
    valueLabel: {
        fontSize: '8px'
    }
}))

function valuetext(value) {
    return numeral(value).format('(0.0 a)');
}

function PricePicker(props) {
    const classes = useStyles()

    const [value, setValue] = React.useState([100, 300000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            valueLabelFormat={valuetext}
            max={1000000}
            min={100}
            marks={marks}
            classes={{
                valueLabel: classes.valueLabel,
                markLabel: classes.valueLabel,
            }}
        />
    );
}

export default PricePicker;
