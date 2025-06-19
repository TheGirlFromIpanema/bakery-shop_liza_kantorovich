export enum Paths {
    HOME = '/',
    ORDERS = 'orders',
    PRODUCTS = 'products',
    CART = 'cart',
    CUSTOMERS = 'customers',
    BREAD= 'bread',
    DAIRY = 'dairy',
    BACK = 'back',
    SIGNIN = 'signin',
}

export type RouteType = {
    path: Paths,
    title: string,
}