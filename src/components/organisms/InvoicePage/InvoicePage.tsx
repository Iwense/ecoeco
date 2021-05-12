import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getListInvoice } from "../../../store/selector";
import { useHistory, useParams } from "react-router-dom";
import { formattedDate } from "../../../utils";
import { IInvoiceList } from "../../../store/models/invoiceList";
import Panel from "../Panel";
import Product from "../../molecules/Product";
import { IProduct } from "../../../store/models/invoiceList";
import Button from "../../atoms/Button";
import Slider from "../../molecules/Slider";
import SliderBlock from "../../atoms/SliderBlock";

type TParams = {
    id: string;
};

const initialVal: IInvoiceList = {
    id: 1,
    price: "1000",
    bonus: "10",
    date: new Date(),
    time: "1:00",
    products: [
        {
            id: 1,
            title: "Бедро цыпленка-бройлера",
            subtitle: "Белая птица охложденная",
            weight: 12,
            amount: 5,
            price: 300,
        },
        {
            id: 2,
            title: "Курица цыпленка-бройлера",
            subtitle: "Белая птица охложденная",
            weight: 14,
            amount: 3,
            price: 500,
        },
    ],
};

const InvoicePage: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const { id } = useParams<TParams>();
    const list: IInvoiceList[] = useSelector(getListInvoice);
    const current: IInvoiceList =
        list.find((item: IInvoiceList) => item.id === +id) || initialVal;

    return (
        <Panel>
            <Box className={classes.root}>
                <Typography className={classes.title}>
                    Детали операции
                </Typography>
                <Box className={classes.line}>
                    <Box className={classes.dateTime}>
                        <Typography className={classes.date}>
                            {formattedDate(current?.date)}
                        </Typography>
                        <Typography>{current?.time || "Время"}</Typography>
                    </Box>
                    <Box>
                        <Typography>Адрес магазина:</Typography>
                    </Box>
                </Box>
                <Box className={classes.location}>
                    <Typography className={classes.locationText}>
                        {"г.Орёл, ул. Ленина, 4"}
                    </Typography>
                </Box>

                <Box className={classes.slider}>
                    <Slider count={2} children={<SliderBlock />} />
                </Box>

                <Box>
                    <Box className={classes.info}>
                        <Typography className={classes.title}>
                            Ваш чек {id}
                        </Typography>
                        <Typography className={classes.subtitle}>
                            {!!current?.products?.length &&
                                current?.products?.length}{" "}
                            товара на сумму:
                        </Typography>
                        <Box className={classes.line}>
                            <Typography className={classes.price}>
                                {current?.price || "1500.94"}
                                <Typography
                                    component='span'
                                    className={classes.ruble}
                                >
                                    {" "}
                                    &#8381;
                                </Typography>
                            </Typography>
                            <Button value={"Разделить оплату"} />
                        </Box>
                    </Box>

                    {!!current?.products?.length &&
                        current?.products.map(
                            (item: IProduct, index: number) => (
                                <Product
                                    key={`product-${item?.id}`}
                                    id={item?.id}
                                    title={item.title}
                                    subtitle={item?.subtitle}
                                    weight={item?.weight}
                                    amount={item?.amount}
                                    price={item?.price}
                                />
                            )
                        )}
                </Box>
            </Box>
        </Panel>
    );
};

export default InvoicePage;
