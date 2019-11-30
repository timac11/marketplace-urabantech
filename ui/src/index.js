import React from 'react';
import ReactDOM from 'react-dom';
import Main from './dashboard/main'
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/styles';
import theme from "./theme/theme";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Login from "./dashboard/login";
import {TreeRootRouter} from "./routes/TreeRouter/TreeRootRouter";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
            <TreeRootRouter >
                Hello
                <Link to={'/product/1'} >
                    Consumer 1
                </Link>
                <Link to={'/product/2'} >
                    Consumer 1
                </Link>
                <Link to={'/product/3'} >
                    Consumer 1
                </Link>
                <Link to={'/product/4'} >
                    Consumer 1
                </Link>
                <Link to={'/product/5'} >
                    Consumer 1
                </Link>
                <Link to={'/login'} >
                    LOGIN
                </Link>
            </TreeRootRouter>
        </Router>
    </ThemeProvider>,
    document.getElementById('app')
);
