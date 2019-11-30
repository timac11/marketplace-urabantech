import React from "react";


export const firstLevelRoutes = [
  {
    name: 'product',
    component: ({id}) => <span>Here is the product №{id}.</span>
  },
]

export const firstLevelRouterWithoutId = [
  {
    name: 'login',
    component: () => <span>Login.</span>
  }
]
