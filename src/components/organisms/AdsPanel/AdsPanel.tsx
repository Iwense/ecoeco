import React, { ReactNode, useState, useEffect } from "react";

import { useStyles } from "./styles";
import { Box, SvgIcon, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import Logo from "../../../assets/png/logo.png";
import LinearProgress from "@material-ui/core/LinearProgress";
import { ReactComponent as Cog } from "../../../assets/svg/cog.svg";
import { ReactComponent as ArrowBack } from "../../../assets/svg/arrowBack.svg";
import CuponAds from "../../molecules/CuponAds";
import CuponAdsVtb from "../../molecules/CuponAdsVtb";

interface IProps {
    back?: boolean;
}

const AdsPanel: React.FC<IProps> = ({ back = false }: IProps) => {
    const classes = useStyles();
    const history = useHistory();
    const [progress, setProgress] = useState(0);
    const handleClick = (str: string) => {
        history.push(str);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => prevProgress + 10);
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

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

            <Box className={classes.main}>
                <Box className={classes.loader}>
                    <Typography className={classes.title}>
                        Аналитика загружается...
                    </Typography>
                    <LinearProgress
                        classes={{
                            root: classes.linear,
                            bar: classes.linearColor,
                        }}
                        variant='determinate'
                        value={progress}
                    />
                </Box>
                <Box className={classes.line}>
                    <CuponAdsVtb />
                </Box>
                <Box className={classes.line}>
                    <CuponAds color={"black"} />
                </Box>
                <Box className={classes.line}>
                    <CuponAds color={"yellow"} next />
                </Box>
            </Box>
        </Box>
    );
};

export default AdsPanel;
