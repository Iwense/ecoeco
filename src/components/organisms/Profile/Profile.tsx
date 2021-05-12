import React, { useState } from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import Panel from "../Panel";
import LineItem from "../../atoms/LineItem";
import SwitchButton from "../../atoms/SwitchButton";
import Slider from "../../molecules/Slider";
import SliderBlock from "../../atoms/SliderBlock";
import Button from "../../atoms/Button";
import ProductAds from "../../molecules/ProductAds";

const data = [
    { id: 1, title: "Имя пользователя", value: "Александр" },
    { id: 2, title: "Дата рождения", value: "17.08.1997" },
    { id: 3, title: "Пароль", value: "*********" },
    { id: 4, title: "Email", value: "alex@gmail.com" },
    { id: 5, title: "Магнит Pay", value: "4195 15** **** 4247" },
];

const Profile: React.FC = () => {
    const classes = useStyles();
    const [isCheck, setIsCheck] = useState(true);

    return (
        <Panel>
            <Box className={classes.root}>
                <Typography className={classes.title}>Настройка</Typography>
                <Box>
                    <Box className={classes.settings}>
                        <Typography className={classes.text}>
                            Отключить печать чека
                        </Typography>

                        <SwitchButton
                            checked={isCheck}
                            onClick={() => setIsCheck((prev) => !prev)}
                        />
                    </Box>
                    <Typography className={classes.subtext}>
                        Вы будете получать ваши чеки в приложении
                    </Typography>
                </Box>

                {data.map((item) => (
                    <LineItem
                        key={`${item.id}-lines`}
                        title={item?.title}
                        value={item?.value}
                    />
                ))}
                <Box className={classes.slider}>
                    <Slider count={1} children={<ProductAds />} />
                </Box>

                <Button className={classes.btn} value={"Выйти"} />
            </Box>
        </Panel>
    );
};

export default Profile;
