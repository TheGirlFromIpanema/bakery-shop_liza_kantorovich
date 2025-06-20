import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {Paths} from "./utils/shop-types.ts";
import Home from "./components/Home.tsx";
import Customers from "./components/Customers.tsx";
import Orders from "./components/Orders.tsx";
import ShoppingCart from "./components/ShoppingCart.tsx";
import Bread from "./components/Bread.tsx";
import Dairy from "./components/Dairy.tsx";
//import Navigator from "./components/navigation/Navigator.tsx";
import {navItems, productItems} from "./configurations/nav-config.ts";
import ErrorPage from "./components/ErrorPage.tsx";
import NavigatorDeskTop from "./components/navigation/NavigatorDeskTop.tsx";
import LogIn from "./components/login/LogIn.tsx";

function App() {

    return (
        <Routes>
            <Route path={Paths.HOME} element={<NavigatorDeskTop items={navItems}/>}>
                <Route index element={<Home/>}/>
                <Route path={Paths.CUSTOMERS} element={<Customers/>}/>
                <Route path={Paths.ORDERS} element={<Orders/>}/>
                <Route path={Paths.CART} element={<ShoppingCart/>}/>
                <Route path={Paths.PRODUCTS} element={<NavigatorDeskTop items={productItems} sub={'sub'}/>}>
                    <Route path={Paths.BREAD} element={<Bread/>}/>
                    <Route path={Paths.DAIRY} element={<Dairy/>}/>
                    <Route path={Paths.BACK} element={<Navigate to={Paths.HOME}/>}/>
                </Route>
                <Route path={Paths.SIGNIN} element={<LogIn/>}/>
            </Route>
            <Route path="/error" element={<ErrorPage/>}/>
            <Route path="*" element={<Navigate to="/error"/>}/>
        </Routes>
    )
}

export default App
