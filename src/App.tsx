import './App.css'
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {Paths, Roles, RouteType} from "./utils/shop-types.ts";
import Home from "./components/Home.tsx";
import Customers from "./components/Customers.tsx";
import Orders from "./components/Orders.tsx";
import ShoppingCart from "./components/ShoppingCart.tsx";
import Bread from "./components/Bread.tsx";
import Dairy from "./components/Dairy.tsx";
import {navItems, productItems} from "./configurations/nav-config.ts";
import ErrorPage from "./components/servicePages/ErrorPage.tsx";
import NavigatorDeskTop from "./components/navigation/NavigatorDeskTop.tsx";
import LogIn from "./components/servicePages/LogIn.tsx";
import LogOut from "./components/servicePages/LogOut.tsx";
import {useAppSelector} from "./redux/hooks.ts";
import {useEffect} from "react";
import SignUp from "./components/servicePages/SignUp.tsx";

function App() {

    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (location.pathname === `/${Paths.ERROR}`)
            navigate('/')
    }, []);

    const {authUser} = useAppSelector(state => state.auth);

    const predicate = (item: RouteType) => {
        return (
            item.role === Roles.ALL ||
            item.role === Roles.USER && authUser && (!authUser.includes('admin') || item.path !== Paths.CART) ||
            item.role === Roles.ADMIN && authUser && authUser.includes('admin') ||
            item.role === Roles.NO_AUTH && !authUser
        )
    }

    const getRoutes = () => {
        return navItems.filter(item => predicate(item))
    }

    return (
        <Routes>
            <Route path={Paths.HOME} element={<NavigatorDeskTop items={getRoutes()}/>}>
                <Route index element={<Home/>}/>
                <Route path={Paths.CUSTOMERS} element={<Customers/>}/>
                <Route path={Paths.ORDERS} element={<Orders/>}/>
                <Route path={Paths.CART} element={<ShoppingCart/>}/>
                <Route path={Paths.PRODUCTS} element={<NavigatorDeskTop items={productItems} sub={'sub'}/>}>
                    <Route path={Paths.BREAD} element={<Bread/>}/>
                    <Route path={Paths.DAIRY} element={<Dairy/>}/>
                    <Route path={Paths.BACK} element={<Navigate to={Paths.HOME}/>}/>
                </Route>
                <Route path={Paths.LOGIN} element={<LogIn/>}/>
                <Route path={Paths.LOGOUT} element={<LogOut/>}/>
                <Route path={Paths.SIGNUP} element={<SignUp/>}/>
            </Route>
            <Route path="/error" element={<ErrorPage/>}/>
            <Route path="*" element={<Navigate to="/error"/>}/>
        </Routes>
    )
}

export default App
