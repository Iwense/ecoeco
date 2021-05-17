import React, { ReactNode } from "react";

import { useStyles } from "./styles";
import { Box, SvgIcon, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import Logo from "../../../assets/png/logo.png";
import { ReactComponent as Cog } from "../../../assets/svg/cog.svg";
import { ReactComponent as ArrowBack } from "../../../assets/svg/arrowBack.svg";
import Button from "../../atoms/Button";

interface IProps {
    children?: ReactNode;
    back?: boolean;
}

const PromoPanel: React.FC<IProps> = ({ children, back = false }: IProps) => {
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
            <Box className={classes.main}>
                <Box className={classes.black}>
                    <Typography className={classes.title}>
                        Скидка 20% на первые две поездки
                    </Typography>
                </Box>

                <Box className={classes.footer}>
                    <Box className={classes.footerLogo}>
                        <Typography className={classes.logoText}>
                            {"Taxi"}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography className={classes.footerTextTini}>
                            {"taxi - По 29 мая"}
                        </Typography>
                        <Typography className={classes.footerText}>
                            {"Скидка 20% на первые две поездки"}
                        </Typography>
                    </Box>
                </Box>
                <Box className={classes.content}>
                    <Box className={classes.promoBlock}>
                        <Typography className={classes.promoText}>
                            Промокод
                        </Typography>
                        <Typography className={classes.promoCode}>
                            ECO-ECO
                        </Typography>
                    </Box>

                    <Box className={classes.condition}>
                        <Typography className={classes.conditionTitle}>
                            Условия акция
                        </Typography>
                        <Typography className={classes.conditionPoint}>
                            Скайчайте приложение taxi
                        </Typography>
                        <Typography className={classes.conditionPoint}>
                            Сделайте первый заказ
                        </Typography>
                        <Typography className={classes.conditionPoint}>
                            Введите промокод в специальное поле
                        </Typography>
                        <Typography className={classes.conditionPoint}>
                            Получите скидку 20% на первые 2 поездки
                        </Typography>

                        <Button
                            className={classes.btn}
                            value='Перейти к партнёру'
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default PromoPanel;
