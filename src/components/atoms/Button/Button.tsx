import React from "react";

import { useStyles } from "./styles";
import {
    Box,
    ButtonBase,
    SvgIcon,
    SvgIconProps,
    Typography,
} from "@material-ui/core";
import cn from "classnames";
import { ReactComponent as Plus } from "../../../assets/svg/plus.svg";

export interface IProps {
    value: string;
    type?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    typeBtn?: "white" | "red";
    className?: string;
    icon?: boolean;
}

const defaultProps: IProps = {
    onClick: () => null,
    value: "BTN",
    typeBtn: "red",
    className: "",
};

const Button: React.FC<IProps> = (props) => {
    const { value, onClick, className, icon } = props;
    const classes = useStyles(props);

    return (
        <ButtonBase
            disableRipple
            disableTouchRipple
            focusRipple
            className={cn(classes.button, className)}
            onClick={onClick}
        >
            {icon && <SvgIcon component={Plus} className={classes.icon} />}
            <Typography className={classes.text}>{value}</Typography>
        </ButtonBase>
    );
};

Button.defaultProps = defaultProps;
export default Button;
