import React, { ReactNode } from "react";

import { useStyles } from "./styles";
import { Box, SvgIcon } from "@material-ui/core";
import { useHistory } from "react-router";
import Logo from "../../../assets/png/logo.png";
import { ReactComponent as Cog } from "../../../assets/svg/cog.svg";
import { ReactComponent as ArrowBack } from "../../../assets/svg/arrowBack.svg";

interface IProps {
    children: ReactNode;
    back?: boolean;
}

const Panel: React.FC<IProps> = ({ children, back = false }: IProps) => {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = (str: string) => {
        history.push(str);
    };

    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                <Box className={classes.right}>
                    {!back && (
                        <img
                            src={Logo}
                            alt='logo'
                            className={classes.logo}
                            onClick={() => handleClick("/")}
                        />
                    )}
                    {back && (
                        <Box
                            className={classes.left}
                            onClick={() => history.goBack()}
                        >
                            <SvgIcon
                                component={ArrowBack}
                                className={classes.icon}
                            />
                        </Box>
                    )}
                </Box>
                <Box
                    className={classes.left}
                    onClick={() => handleClick("/profile")}
                >
                    <SvgIcon component={Cog} className={classes.icon} />
                </Box>
            </Box>
            <Box className={classes.main}>{children}</Box>
        </Box>
    );
};

export default Panel;
