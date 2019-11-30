import React from 'react';
import {Box} from "@material-ui/core";
import PropTypes from 'prop-types';
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import RightDrawer from "../../components/RightDrawer/RightDrawer";
import ProductCard from "../../components/ProductCard/ProductCard";



const MainPage = ({id}) => {
    return (
        <Box display={'flex'} >
            <LeftDrawer id={id}/>
            <Box width={'60vw'}>
                <ProductCard
                    avatarSrc={'https://poster.nicefon.ru/2016_07/17/350x220/118176a537b1b2ab98f8ba.jpg'}
                    averageRate={4}
                    cost={100}
                    description={'Какие-то описание'}
                    type={'library'}
                />
            </Box>
            <RightDrawer id={id}/>
        </Box>
    );
}

MainPage.propTypes = {
    id: PropTypes.number
}

export default MainPage;
