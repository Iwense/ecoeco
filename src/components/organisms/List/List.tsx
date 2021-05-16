import React from "react";

import { useStyles } from "./styles";
import { Box, SvgIcon, Typography } from "@material-ui/core";
import Panel from "../Panel";
import InvoiceList from "../../molecules/InvoiceList";
import PieChart from "../../molecules/PieChart";
import MiniButton from "../../atoms/MiniButton";
import Button from "../../atoms/Button";
import { useHistory } from "react-router";

const List: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();

    const handleButtonClick = () => {
        history.push("/analytics");
    };

    return (
        <Panel>
            <Box className={classes.root}>
                <Box className={classes.line}>
                    <Typography className={classes.title}>
                        Покупка за <span className={classes.textLink}>май</span>
                    </Typography>
                    <Typography className={classes.price}>
                        1500.94 &#8381;
                    </Typography>
                </Box>

                <Box className={classes.analyticWrapper}>
                    <PieChart />
                    <Box className={classes.rightSide}>
                        <Box className={classes.line}>
                            <Button
                                typeBtn={"white"}
                                value={"Подробнее"}
                                onClick={handleButtonClick}
                            />
                        </Box>

                        <Box className={classes.line}>
                            <Box className={classes.buttons}>
                                <MiniButton typeBtn={"plus"} />
                                <MiniButton typeBtn={"back"} />
                                <MiniButton typeBtn={"code"} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <InvoiceList />
            </Box>
        </Panel>
    );
};

export default List;
