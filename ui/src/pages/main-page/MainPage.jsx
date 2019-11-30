import React, {useEffect, useState} from 'react';
import {Box, Drawer, Typography} from "@material-ui/core";
import {Avatar} from "../../components/Avatar/Avatar";



const MainPage = ({id}) => {
    return (
        <Box>
            <Drawer
                variant={"permanent"}
                anchor={"left"}
            >
                <Box>
                    <Avatar/>
                    <Typography>
                        Иван Победоносный
                    </Typography>
                </Box>
            </Drawer>
        </Box>
    );
}

MainPage.propTypes = {
    id: PropTypes.number
}

export default MainPage;
