import React from 'react';
import ReactDOM from 'react-dom';
import Main from './dashboard/main'
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/styles';
import theme from "./theme/theme";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Login from "./dashboard/login";
import {TreeRootRouter} from "./routes/TreeRouter/TreeRootRouter";
import MainPage from "./pages/main-page/MainPage";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <MainPage/>
    </ThemeProvider>,
    document.getElementById('app')
);
