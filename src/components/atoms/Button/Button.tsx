import React from "react";

import { useStyles } from "./styles";
import { Box, ButtonBase, Typography } from "@material-ui/core";
import cn from "classnames";

export interface IProps {
    value: string;
    type?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    typeBtn?: "white" | "red";
}

const defaultProps: IProps = {
    onClick: () => null,
    value: "BTN",
    typeBtn: "red",
};

const Button: React.FC<IProps> = (props) => {
    const { value, onClick } = props;
    const classes = useStyles(props);

    return (
        <ButtonBase
            disableRipple
            disableTouchRipple
            focusRipple
            className={classes.button}
        >
            <Typography className={classes.text}>{value}</Typography>
        </ButtonBase>
    );
};

Button.defaultProps = defaultProps;
export default Button;
