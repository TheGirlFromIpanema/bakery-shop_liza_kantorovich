import * as React from "react";
import {RouteType} from "../../utils/shop-types.ts";
import {AppBar, Box, Tab, Tabs} from "@mui/material";
import {Link, Outlet, useLocation} from "react-router-dom";
import {useEffect} from "react";

type Props = {
    items: RouteType[],
    sub?: string
}

const NavigatorDeskTop: React.FC<Props> = ({items}) => {

    const location = useLocation();
    const [value, setValue] = React.useState(0);

    const currentTab = items.findIndex(item => location.pathname === `/${item.path}` || location.pathname === item.path);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        if (currentTab >= 0 && currentTab !== value) {
            setValue(currentTab);
        }
    }, [currentTab]);

    return (
        <Box sx={{marginTop: "50px"}}>
            <AppBar sx={{backgroundColor: "lightgray"}}>
            <Tabs value={value} onChange={handleChange}>
                {items.map((item) =>
                    <Tab key={item.path} label={item.title} component={Link} to={item.path}/>
                )};
            </Tabs>
            </AppBar>
            <Outlet/>
        </Box>)
};

export default NavigatorDeskTop;
