import React from 'react';
import PropTypes from 'prop-types';
import {Box, Typography} from "@material-ui/core";

const ProductCard = ({avatarSrc, description, cost, averageRate, type}) => {
    return (
        <Box p={2}>
            <img src={avatarSrc} alt={'Product image'}/>
            <Box mx={1}>
                <Box mx={1} mb={1}>
                    <Typography>
                        Описание:
                    </Typography>
                    <Typography>
                        {description}
                    </Typography>
                </Box>
                <Typography>
                    Тип: {type}
                </Typography>
            </Box>
            <Box>
                <Box>
                    Стоимость:
                </Box>
                <Box>
                    {cost} ₽
                </Box>
            </Box>
            <Box>
                <Box>
                    Ср. оценка:
                </Box>
                <Box>
                    {averageRate}
                </Box>
            </Box>
        </Box>
    );
};

ProductCard.propTypes = {
    avatarSrc: PropTypes.string,
    description: PropTypes.string,
    cost: PropTypes.number,
    averageRate: PropTypes.number,
    type: PropTypes.string
};

export default ProductCard;
