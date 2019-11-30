import React from "react";
import Login from "../../dashboard/login";
import Main from "../../dashboard/main";
import {Details} from "../../dashboard/details";
import MainPage from "../../pages/main-page/MainPage";


export const firstLevelRoutes = [
    {
        name: 'product',
        component: ({id}) => <Details/>
    }
]

export const firstLevelRouterWithoutId = [
    {
        name: 'main',
        component: () => <MainPage/>
    },
    {
        name: 'login',
        component: () => <Login/>
    }
]
