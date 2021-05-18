import React, { useState, useEffect } from "react";

import { useStyles } from "./styles";
import { Box, SvgIcon, Typography } from "@material-ui/core";
import Panel from "../Panel";
import PieChart from "../../molecules/PieChart";
import Button from "../../atoms/Button";
import BarChart from "../../molecules/BarChart";
import LineChart from "../../molecules/LineChart";
import { ReactComponent as Down } from "../../../assets/svg/down.svg";
import { ReactComponent as Calender } from "../../../assets/svg/calendar.svg";
import AdsPanel from "../AdsPanel";

const Analytics: React.FC = () => {
    const classes = useStyles();
    const [showAds, setShowAds] = useState(true);
    const [price, setPrice] = useState("4031,86");

    const handleChangeChart = () => {
        setPrice("1500.94");
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setShowAds(false);
        }, 5100);

        return () => {
            clearInterval(timer);
        };
    }, []);

    if (showAds) {
        return <AdsPanel />;
    }

    return (
        <Panel>
            <Box className={classes.root}>
                <Box className={classes.line}>
                    <Typography className={classes.title}>
                        <span className={classes.textLink}>
                            {" "}
                            <SvgIcon
                                component={Calender}
                                className={classes.down}
                            />{" "}
                            Май
                        </span>
                    </Typography>
                    <Typography className={classes.price}>
                        {price} &#8381;
                    </Typography>
                </Box>

                <Box className={classes.lineGrid}>
                    <Button
                        typeBtn='white'
                        value='Фильтр'
                        onClick={() => null}
                        className={classes.button}
                    />
                    <Button
                        typeBtn='white'
                        value='Поделиться'
                        onClick={() => null}
                        className={classes.button}
                    />
                </Box>

                <Box className={classes.category}>
                    <Typography className={classes.title}>
                        {" "}
                        Категории{" "}
                    </Typography>
                    <PieChart onClick={handleChangeChart} />
                </Box>

                <Box className={classes.category}>
                    <Typography className={classes.title}>
                        Дни недели
                    </Typography>
                    <BarChart />
                </Box>

                <Box className={classes.category}>
                    <Box className={classes.line}>
                        <Typography className={classes.title}>
                            Анализ покупок
                        </Typography>
                        <Typography className={classes.title}>
                            Год{" "}
                            <SvgIcon
                                component={Down}
                                className={classes.down}
                            />
                        </Typography>
                    </Box>

                    <LineChart />
                </Box>
            </Box>
        </Panel>
    );
};

export default Analytics;
