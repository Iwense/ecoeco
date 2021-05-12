import React from "react";

import { useStyles } from "./styles";
import { Box, SvgIcon, Typography } from "@material-ui/core";
import Button from "../../atoms/Button";
import { useHistory } from "react-router-dom";
import MiniButton from "../../atoms/MiniButton";

interface IProps {
    dataLegend: any;
    data: any;
    onClick?: () => void;
    handleMoveBox?: () => void;
}

const ChartLegend: React.FC<IProps> = ({ data }) => {
    const classes = useStyles();
    const history = useHistory();

    const handleButtonClick = () => {
        history.push("/analytics");
    };

    return (
        <Box className={classes.root}>
            {!!data?.length &&
                data.map((item: any) => (
                    <Box
                        key={`${item?.id}-item-products`}
                        className={classes.item}
                    >
                        <Box className={classes.circle}></Box>
                        <Typography className={classes.text}>
                            Мясо и птица
                        </Typography>
                        <Typography noWrap className={classes.price}>
                            {false || "1500.94"} &#8381;
                        </Typography>
                    </Box>
                ))}
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
    );
};

export default ChartLegend;
