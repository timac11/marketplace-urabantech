import React, {useState} from 'react';
import {Box} from "@material-ui/core";
import PropTypes from 'prop-types';
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import RightDrawer from "../../components/RightDrawer/RightDrawer";
import MainContent from "../../containers/MainContent";
import {products} from "../integrator-workshop/example";

const MainPage = ({id}) => {
    const [rightDrawerContent, setRightDrawerContent] = useState({})
    const handleCallback = args => {
        console.log(args);
        if (args.selected) {
            setRightDrawerContent({
                ...rightDrawerContent,

                RAM:args.selected.map(value =>
                    +value.id.slice(5)
                ).map(value2 => products[value2].RAM).reduce((prev, curr) => prev + curr, 0),

                memory: args.selected.map(value =>
                    +value.id.slice(5)
                ).map(value2 => products[value2].memory).reduce((prev, curr) => prev + curr, 0),

                performance: args.selected.map(value =>
                    +value.id.slice(5)
                ).map(value2 => products[value2].performance).sort().reverse()[0],

                cores: args.selected.map(value =>
                    +value.id.slice(5)
                ).map(value2 => products[value2].cores).sort().reverse()[0],

                sum: args.selected.map(value =>
                    +value.id.slice(5)
                ).map(value2 => products[value2].price).reduce((prev, curr) => prev + curr, 0)
            })
        }
    }

    return (
        <Box display={'flex'} >
            <LeftDrawer id={id}/>
            <MainContent callback={handleCallback} />
            <RightDrawer content={rightDrawerContent} id={id}/>
        </Box>
    );
}

MainPage.propTypes = {
    id: PropTypes.number
}

export default MainPage;
