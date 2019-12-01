import React from 'react';
import {Box, makeStyles} from "@material-ui/core";
import PropTypes from 'prop-types';
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import RightDrawer from "../../components/RightDrawer/RightDrawer";
import ProductCard from "../../components/ProductCard/ProductCard";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Search} from "@material-ui/icons";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
import FullScreenDialog from "../../components/dialog/Dialog";

const useStyles = makeStyles(theme => ({
    content: {
        width: '60vw',
        height: '100vh',
        overflowY: 'scroll',
        position: 'fixed',
        left: '20vw',
        borderTop: '1px solid rgba(0,0,0,0.5)'
    },
    toolbar: {
        display: "flex"
    },
    createImageButton: {
        height: "34px",
        marginLeft: "12px",
        marginTop: "14px"
    }
}))

const stubData = [
    {
        averageRate: 4,
        id: 1,
        cost: 100000,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        type: 'библиотека'
    },
    {
        averageRate: 5,
        id: 2,
        cost: 100000,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Эта библиотека генерирует лица несуществующих людей в хорошем качестве.',
        type: 'библиотека'
    },
    {
        averageRate: 1,
        id: 3,
        cost: 100000,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'В этом проекте реализован мессенджер с высокой степенью шифрования.',
        type: 'продукт'
    },
    {
        averageRate: 5,
        id: 4,
        cost: 100000,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Этот проект является частью регулирующей системы электроэнергетической компании. Продается в связи с аварией на электростанции.',
        type: 'продукт'
    },
    {
        averageRate: 4,
        id: 4,
        cost: 100000,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Здесь реализована платорфма для заказа различных товаров в интернете.',
        type: 'продуки'
    }
]

const MainPage = ({id}) => {
    const classes = useStyles()
    const [openDialog, setOpenDialog] = React.useState(false);

    return (
        <Box display={'flex'} >
            <LeftDrawer id={id}/>
            <Box width={'60vw'} className={classes.content}>
                <Box className={classes.toolbar} m={1}>
                    <FormControl m={1} fullWidth={true}>
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
                    <Button className={classes.createImageButton}
                            variant={"contained"}
                            color={"secondary"}
                            onClick={() => setOpenDialog(true)}>
                        Создать
                    </Button>
                </Box>
                {
                    stubData.map((value, index) => (<NavLink to={`product/${value.id}`} key={index} style={{textDecoration: 'none'}}>
                        <ProductCard
                            {...value}
                        />
                    </NavLink>))
                }

            </Box>
            <RightDrawer id={id}/>
            <FullScreenDialog open={openDialog} handleClose={() => setOpenDialog(false)}/>
        </Box>
    );
}

MainPage.propTypes = {
    id: PropTypes.number
}

export default MainPage;
