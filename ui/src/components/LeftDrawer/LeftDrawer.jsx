import React from 'react';
import {Box, Divider, makeStyles, Typography, Chip} from "@material-ui/core";
import {Avatar} from "../Avatar/Avatar";
import PropTypes from "prop-types";

LeftDrawer.propTypes = {
    id: PropTypes.number.isRequired
}

const useStyles = makeStyles(theme => ({
    drawer: {
        width: '20vw'
    }
}))

function LeftDrawer({id}) {
    const classes = useStyles()

    return (
        <Box className={classes.drawer}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Avatar/>
                <Typography>
                    Иван Победоносный
                </Typography>
            </Box>
            <Divider/>
            <Box p={2}>
                <Typography>
                    Интересующие технологии
                </Typography>
                <Box display={'flex'} flexDirection={'row'} flexWrap={'wrap'} mt={1} >
                    {
                        ['Blockchain', 'AI', 'ML'].map((value, index) => (<Box mr={1}><Chip key={index} label={value} /></Box>))
                    }
                </Box>
            </Box>
            <Divider/>
        </Box>
    );
}

export default LeftDrawer;
