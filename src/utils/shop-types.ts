export enum Paths {
    HOME = '/',
    ORDERS = 'orders',
    PRODUCTS = 'products',
    CART = 'cart',
    CUSTOMERS = 'customers',
    BREAD= 'bread',
    DAIRY = 'dairy',
    BACK = 'back',
    LOGIN = 'login',
    LOGOUT = 'logout',
    ERROR = 'error',
    SIGNUP = 'signup',
}

export enum Roles{
    ALL = 0, USER = 1, ADMIN = 2, NO_AUTH = 3
}


export type RouteType = {
    path: Paths,
    title: string,
    role?: Roles
}

export type LoginData = {
    email: string,
    password: string,
}

export type RegisterData = {
    email: string,
    password: string,
    name: string,
}

export type ProductType = {
    id?: string,
    title: string,
    category: string,
    unit: string,
    cost: number,
    img: string,
    description: string,
}

export type CategoryType = {
    category_name: string,
}

export type ShopCartProdType = {
    cartProdId: string,
    count: number,
}

export type TableShopCartDataType = ProductType & {count: number, amount: number}