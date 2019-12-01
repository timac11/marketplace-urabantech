import React from 'react';
import {Box, makeStyles} from "@material-ui/core";
import PropTypes from 'prop-types';
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import RightDrawer from "../../components/RightDrawer/RightDrawer";
import ListOfProducts from "../../components/ListOfProducts/ListOfProducts";
import MainContent from "../../containers/MainContent";

const MainPage = ({id}) => {
    return (
        <Box display={'flex'} >
            <LeftDrawer id={id}/>
            <MainContent />
            <RightDrawer id={id}/>
        </Box>
    );
}

MainPage.propTypes = {
    id: PropTypes.number
}

export default MainPage;
