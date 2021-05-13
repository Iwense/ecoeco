import React, { useState, useEffect } from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import QrReader from "react-qr-reader";
import Button from "../../atoms/Button";
import { useDispatch } from "react-redux";

const QrCode: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [result, setResult] = useState("");
    const [invoice, setInvoice] = useState<any>(null);

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");

    const callApi = (qrCodeString: string) => {
        if (!qrCodeString) return;

        const formData = new FormData();
        formData.append("qrraw", qrCodeString);
        formData.append("qr", "3");
        formData.append("token", process.env.REACT_APP_API_KEY!);

        const request = new XMLHttpRequest();
        request.withCredentials = true;

        request.open(
            "POST",
            "https://proverkacheka.com/api/v1/check/get",
            true
        );

        request.send(formData);
        request.onload = function (event) {
            if (request.status === 200) {
                const parse = JSON.parse(request.response);
                console.log("request = ", parse);
                const data = parse?.data?.json;
                setInvoice(data);
            } else {
                console.log("Fail!");
            }
        };
    };

    useEffect(() => {
        if (!result) return;
        callApi(result);
    }, [result]);

    const handleError = (err: any) => {
        console.log("Error with scan ", err);
    };

    useEffect(() => {
        if (!invoice) return;
        const date = invoice?.dateTime.split("T");
        if (date && !!date.length && date.length >= 2) {
            setDate(date[0]);
            setTime(date[1]);
            setPrice(invoice?.totalSum);
        }
    }, [invoice]);

    const handleScan = (data: string | null) => {
        if (data) {
            setResult(data);
        }
    };

    const handleAddInvoiceClick = () => {
        dispatch.invoiceList.addNewInvoice(invoice);
    };

    return (
        <Box className={classes.root}>
            <Box className={classes.scaner}>
                <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: "100%" }}
                />
                {!result && (
                    <Typography className={classes.text}>
                        {"Наведите камеру на QR-код"}
                    </Typography>
                )}

                {!!invoice?.items?.length && (
                    <>
                        <Box>
                            <Typography className={classes.text}>
                                {`Чек на сумму : ${price}`}
                            </Typography>
                            <Typography className={classes.text}>
                                {date} , {time}
                            </Typography>
                        </Box>

                        <Button
                            value='Добавить чек'
                            className={classes.btn}
                            typeBtn={"white"}
                            onClick={handleAddInvoiceClick}
                        />
                    </>
                )}
            </Box>
            <Button
                typeBtn='white'
                value='Проверка АПИ'
                onClick={() =>
                    callApi(
                        "t=20190320T2303&s=5803.00&fn=9251440300007971&i=141637&fp=4087570038&n=1"
                    )
                }
            />
        </Box>
    );
};

export default QrCode;
