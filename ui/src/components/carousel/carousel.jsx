import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper/Paper";
import Box from "@material-ui/core/Box/Box";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
    },
    img: {
        width: "64px",
        height: "64px",
        transform: "none",
        top: "0"
    },
    gridList: {
        width: 620,
        height: 400,
        padding: 4
    },
    tile: {
        padding: "4px",
        height: "200px"
    },
    tileIns: {
        boxShadow: "0 0 2px rgba(0,0,0,0.5)",
        height: 184,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    tileInsChecked: {
        boxShadow: "0 0 8px blue",
        height: 184,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
}));

const tileData = [
    {
        img: "https://storage.yandexcloud.net/products/f2ecbu7femm9edja45i8.svg",
        title: "Ubuntu"
    },
    {
        img: "https://storage.yandexcloud.net/products/f2esl2fb7nu7c26hublb.svg",
        title: "CentOS"
    },
    {
        img: "https://storage.yandexcloud.net/products/f2e4rgbcgb5967enrhpp.svg",
        title: "Gitlab"
    },
    {
        img: "https://storage.yandexcloud.net/products/f2e0bp8j5ot2hgqcnf4f.svg",
        title: "Postgres database"
    },
    {
        img: "https://storage.yandexcloud.net/products/f2e2223mvcmih3i1i69i.svg",
        title: "NodeJS"
    },
    {
        img: "https://storage.yandexcloud.net/products/f2ecbu7femm9edja45i8.svg",
        title: "Ubuntu"
    }
]

export default function ProductGridList() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(undefined);

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={3}>
                {tileData.map((tile, index) => (
                    <Box onClick={() => setChecked(index)} className={classes.tile} key={index} cols={tile.cols || 1}>
                        <Box className={index === checked ? classes.tileInsChecked : classes.tileIns}>
                            <img src={tile.img} alt={tile.title} className={classes.img}/>
                            <Typography>{tile.title}</Typography>
                        </Box>
                    </Box>
                ))}
            </GridList>
        </div>
    );
}