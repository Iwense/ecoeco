import React, { useState, useEffect } from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import QrReader from "react-qr-reader";
import Button from "../../atoms/Button";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const QrCode: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const [result, setResult] = useState("");
    const [invoice, setInvoice] = useState<any>(null);

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");
    const [error, setError] = useState<string>("");

    const [checker, setChecker] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setChecker(true);
        }, 3000);
    }, []);

    const callApi = (qrCodeString: string) => {
        if (!qrCodeString) return;

        const formData = new FormData();
        formData.append("qrraw", qrCodeString.trim());
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
                const data = parse?.data?.json;
                setInvoice(data);
                setError("");
            } else {
                console.log("Fail!");
            }
        };
    };

    useEffect(() => {
        if (!result) return;
        callApi(result);
    }, [result]);

    const handleError = (err: string) => {
        // setError(err.toString());
        console.log("Error with scan ", err);
    };

    useEffect(() => {
        if (!invoice) return;
        console.log("Invoice = ", invoice);
        const date = invoice?.dateTime.split("T");
        if (date && !!date.length && date.length >= 2) {
            setDate(date[0]);
            setTime(date[1]);
            setPrice(invoice?.totalSum);
        }
    }, [invoice]);

    const handleScan = (data: string | null) => {
        // if (data) {
        //     setResult(data);
        //     setError("");
        // }
    };

    const handleAddInvoiceClick = () => {
        dispatch.invoiceList.addQrCode(invoice);
        history.push("/list");
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

                {error && (
                    <Typography className={classes.text}>{error}</Typography>
                )}

                {checker && (
                    <Box className={classes.content}>
                        <Box>
                            <Typography className={classes.text}>
                                {`Чек на сумму : 1105₽`}
                            </Typography>
                            <Typography className={classes.text}>
                                {"17.05.2021"} , {"18:23"}
                            </Typography>
                        </Box>

                        <Button
                            value='Добавить чек'
                            className={classes.btn}
                            typeBtn={"white"}
                            onClick={handleAddInvoiceClick}
                        />
                    </Box>
                )}
            </Box>
            {/* <Button
                typeBtn='white'
                value='Проверка АПИ'
                onClick={() =>
                    callApi(
                        "t=20190320T2303&s=5803.00&fn=9251440300007971&i=141637&fp=4087570038&n=1"
                    )
                }
            /> */}
        </Box>
    );
};

export default QrCode;
