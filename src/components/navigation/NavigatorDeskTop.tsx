import * as React from "react";
import {RouteType} from "../../utils/shop-types.ts";
import {AppBar, Box, Tab, Tabs} from "@mui/material";
import {Link, Outlet, useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useAppSelector} from "../../redux/hooks.ts";

type Props = {
    items: RouteType[],
    sub?: string
}

const NavigatorDeskTop: React.FC<Props> = ({items}) => {

    const location = useLocation();
    const [value, setValue] = React.useState(0);
    const {name} = useAppSelector(state => state.userInfo);

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
            <AppBar sx={{
                backgroundColor: "lightgray",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <div><Tabs value={value} onChange={handleChange}>
                    {items.map((item) =>
                        <Tab key={item.path} label={item.title} component={Link} to={item.path}/>
                    )};
                </Tabs></div>
                <div style={{marginRight: "40px", color: "black"}}>{name}</div>
            </AppBar>
            <Outlet/>
        </Box>)
};

export default NavigatorDeskTop;
