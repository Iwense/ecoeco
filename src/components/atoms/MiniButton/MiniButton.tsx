import React, { ReactComponentElement } from "react";

import { useStyles } from "./styles";
import { Box, ButtonBase, Typography } from "@material-ui/core";
import cn from "classnames";
import { SvgIcon } from "@material-ui/core";
import { ReactComponent as Back } from "../../../assets/svg/back.svg";
import { ReactComponent as Plus } from "../../../assets/svg/plus.svg";
import { ReactComponent as Code } from "../../../assets/svg/scan.svg";
import { useHistory } from "react-router";

export interface IProps {
    type?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    typeBtn: "plus" | "back" | "code";
}

const defaultProps: IProps = {
    onClick: () => null,
    typeBtn: "plus",
};

const MiniButton: React.FC<IProps> = (props) => {
    const { onClick, typeBtn } = props;
    const classes = useStyles(props);
    const history = useHistory();

    const icon = {
        plus: Plus,
        back: Back,
        code: Code,
    };

    const links = {
        plus: "/",
        back: "/",
        code: "/code",
    };

    const handleClick = () => {
        history.push(links[typeBtn]);
    };

    return (
        <ButtonBase
            disableRipple
            disableTouchRipple
            focusRipple
            className={classes.button}
            onClick={handleClick}
        >
            <SvgIcon component={icon[typeBtn]} className={classes.icon} />
        </ButtonBase>
    );
};

MiniButton.defaultProps = defaultProps;
export default MiniButton;
