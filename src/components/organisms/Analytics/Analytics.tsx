import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import Panel from "../Panel";
import PieChart from "../../molecules/PieChart";
import Button from "../../atoms/Button";
import BarChart from "../../molecules/BarChart";
import LineChart from "../../molecules/LineChart";

const Analytics: React.FC = () => {
    const classes = useStyles();

    return (
        <Panel>
            <Box className={classes.root}>
                <Box className={classes.line}>
                    <Typography className={classes.title}>
                        <span className={classes.textLink}>Май</span>
                    </Typography>
                    <Typography className={classes.price}>
                        1500.94 &#8381;
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
                    <PieChart />
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
                        <Typography className={classes.title}>Год v</Typography>
                    </Box>

                    <LineChart />
                </Box>
            </Box>
        </Panel>
    );
};

export default Analytics;
