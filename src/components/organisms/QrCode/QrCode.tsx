import React, { useState, useEffect } from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import QrReader from "react-qr-reader";

import MiniButton from "../../atoms/MiniButton";
import Button from "../../atoms/Button";

const QrCode: React.FC = () => {
    const classes = useStyles();
    const [result, setResult] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");

    // useEffect(()=> {
    //     if(!result) return
    //     fetch('https://proverkacheka.com/api/v1/check/get', {
    //         method: 'POST',
    //         headers: new Headers({
    //             'Authorization': 'Bearer 2222.wba3pNNELGWehIXUt'}),
    //         body: 't=20190320T2303&s=5803.00&fn=9251440300007971&i=141637&fp=4087570038&n=1'
    //     }).then(response => console.log(response))

    // }, [result])

    const clickApi = () => {
        console.log("Click");
        fetch("https://proverkacheka.com/api/v1/check/get", {
            method: "POST",
            mode: "no-cors",
            headers: new Headers({
                Authorization: "Bearer 2222.wba3pNNELGWehIXUt",
            }),
            body: "t=20190320T2303&s=5803.00&fn=9251440300007971&i=141637&fp=4087570038&n=1",
        })
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    };

    const handleError = (err: any) => {
        console.log("Error with scan ", err);
    };

    const parseData = (str: string) => {
        const arr = str.split(/[=&]/);
        if (!!arr.length && arr.length > 4) {
            const ti = arr[1].split("T");
            setDate(ti[0] || "20.01.2000");
            setTime(ti[1] || "20:00");
            setPrice(arr[3]);
        }
    };

    const handleScan = (data: string | null) => {
        if (data) {
            setResult(data);
            parseData(data);
        }
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

                {result && (
                    <>
                        <Typography className={classes.text}>
                            {`Чек на сумму : ${price}`}
                        </Typography>
                        <Typography className={classes.text}>
                            {date} , {time}
                        </Typography>
                    </>
                )}
            </Box>
            {/* <Button typeBtn='white' value='Проверка АПИ' onClick={clickApi} /> */}

            <p>{result}</p>
        </Box>
    );
};

export default QrCode;
