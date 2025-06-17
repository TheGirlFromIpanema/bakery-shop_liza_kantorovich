import * as React from "react";
import {RouteType} from "../../utils/shop-types.ts";
import {AppBar, Box, Tab, Tabs} from "@mui/material";
import {Link, Outlet} from "react-router-dom";

type Props = {
    items: RouteType[],
    sub?: string
}

const NavigatorDeskTop: React.FC<Props> = ({items}) => {

    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

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