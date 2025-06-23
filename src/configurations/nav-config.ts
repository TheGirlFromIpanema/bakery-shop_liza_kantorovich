import {Paths, Roles, RouteType} from "../utils/shop-types.ts";

export const navItems: RouteType[] = [
    {path: Paths.HOME, title: 'Home', role: Roles.ALL},
    {path: Paths.ORDERS, title: 'Orders', role: Roles.USER},
    {path: Paths.CART, title: 'Shopping Cart', role: Roles.USER},
    {path: Paths.CUSTOMERS, title: 'Customers', role: Roles.ADMIN},
    {path: Paths.PRODUCTS, title: 'Products', role: Roles.ALL},
    {path: Paths.LOGIN, title: 'Log in', role: Roles.NO_AUTH},
    {path: Paths.LOGOUT, title: 'Log out', role: Roles.USER},
    {path: Paths.SIGNUP, title: 'Sign up', role: Roles.NO_AUTH},
]

export const productItems: RouteType[] = [
    {path: Paths.BREAD, title: 'Bread'},
    {path: Paths.DAIRY, title: 'Dairy'},
    {path: Paths.BACK, title: 'Back to main menu'},
]