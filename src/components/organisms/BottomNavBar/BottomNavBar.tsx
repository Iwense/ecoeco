import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { SvgIcon } from "@material-ui/core";
import { ReactComponent as Home } from "../../../assets/svg/home.svg";
import { ReactComponent as Cart } from "../../../assets/svg/cart.svg";
import { ReactComponent as Analytics } from "../../../assets/svg/analytics.svg";
import { ReactComponent as List } from "../../../assets/svg/list.svg";
import { ReactComponent as Profile } from "../../../assets/svg/user.svg";
import cn from "classnames";

const data = [
    { id: 1, link: "/", title: "Главная", icon: Home },
    { id: 2, link: "/sales", title: "Список покупок", icon: Cart },
    { id: 3, link: "/analytics", title: "Аналитика", icon: Analytics },
    { id: 4, link: "/list", title: "Чеки", icon: List },
    { id: 5, link: "/profile", title: "Профиль", icon: Profile },
];

interface IItem {
    id: number;
    link: string;
    title: string;
    icon: any;
}

const BottomNavBar: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const getID = () => {
        return data.find((item: IItem) => item?.link === location.pathname)?.id;
    };

    useEffect(() => {
        setActive(getID());
    }, [location.pathname]);

    const [active, setActive] = useState(getID());

    const handleClick = (str: string, id: number) => {
        history.push(str);
        setActive(id);
    };

    const checkActive = (id: number) => active === id;

    return (
        <Box className={classes.wrapper}>
            {data.map((item: IItem, index: number) => {
                return (
                    <Box
                        key={`navbar-${item?.id}-${index}`}
                        className={classes.item}
                        onClick={() => handleClick(item?.link, item?.id)}
                    >
                        <Box className={classes.itemBlock}>
                            <SvgIcon
                                component={item?.icon}
                                color={
                                    checkActive(item?.id) ? "action" : "primary"
                                }
                                classes={{
                                    colorAction: classes.active,
                                    colorPrimary: classes.icon,
                                }}
                            />
                            <Typography
                                className={cn(
                                    classes.text,
                                    checkActive(item?.id) ? classes.active : ""
                                )}
                            >
                                {item?.title}
                            </Typography>
                        </Box>
                    </Box>
                );
            })}
        </Box>
    );
};

export default BottomNavBar;
