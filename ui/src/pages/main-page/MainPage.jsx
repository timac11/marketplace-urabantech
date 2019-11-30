import React from 'react';
import {Box} from "@material-ui/core";
import PropTypes from 'prop-types';
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import RightDrawer from "../../components/RightDrawer/RightDrawer";
import ProductCard from "../../components/ProductCard/ProductCard";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Search} from "@material-ui/icons";

const stubData = [
    {
        averageRate: 4,
        cost: 100000,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        type: 'библиотека'
    },
    {
        averageRate: 4,
        cost: 100000,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        type: 'библиотека'
    },
    {
        averageRate: 4,
        cost: 100000,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        type: 'библиотека'
    },
    {
        averageRate: 4,
        cost: 100000,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        type: 'библиотека'
    }
]

const MainPage = ({id}) => {
    return (
        <Box display={'flex'} >
            <LeftDrawer id={id}/>
            <Box width={'60vw'}>
                <Box m={1}>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="input-with-icon-adornment">Поиск продуктов:</InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Search/>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Box>
                {
                    stubData.map((value, index) => (<ProductCard
                        {...value} key={index}
                    />))
                }

            </Box>
            <RightDrawer id={id}/>
        </Box>
    );
}

MainPage.propTypes = {
    id: PropTypes.number
}

export default MainPage;
