import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/styles';
import theme from "./theme/theme";
import {BrowserRouter as Router} from 'react-router-dom';
import {TreeRootRouter} from "./routes/TreeRouter/TreeRootRouter";
import Header from "./components/header/header";


function App() {
    return <Router>
        <Header/>
        <TreeRootRouter>
        </TreeRootRouter>
    </Router>
}


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App />
    </ThemeProvider>,
    document.getElementById('app')
);

