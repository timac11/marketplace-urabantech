import React from "react";
import Login from "../../dashboard/login";
import Main from "../../dashboard/main";
import {Details} from "../../dashboard/details";


export const firstLevelRoutes = [
    {
        name: 'product',
        component: ({id}) => <Details/>
    }
]

export const firstLevelRouterWithoutId = [
    {
        name: 'login',
        component: () => <Login/>
    },
    {
        name: 'wizard',
        component: () => <Main/>
    }
]
