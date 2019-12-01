import React from 'react';
import IntegratorWorkshop from "../pages/integrator-workshop/IntegratorWorkshop";
import {Box, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    content: {
        width: '60vw',
        height: '100vh',
        overflowY: 'scroll',
        position: 'fixed',
        left: '20vw',
        borderTop: '1px solid rgba(0,0,0,0.5)'
    }
}))

const MainContent = () => {
    const classes = useStyles()

    return (
        <Box className={classes.content}>
            {/*<ListOfProducts/>*/}
            <IntegratorWorkshop/>
        </Box>
    )
};

export default MainContent;
