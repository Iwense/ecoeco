import React, { useState, useEffect } from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import QrReader from "react-qr-reader";
import api from "../../../services/api";

import MiniButton from "../../atoms/MiniButton";
import Button from "../../atoms/Button";

const QrCode: React.FC = () => {
    const classes = useStyles();
    const [result, setResult] = useState("");
    const [apiData, setApiData] = useState<any>(null);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");

    // useEffect(()=> {
    //     if(!result) return
    // fetch('https://proverkacheka.com/api/v1/check/get', {
    //     method: 'POST',
    //     headers: new Headers({
    //         'Authorization': 'Bearer 2222.wba3pNNELGWehIXUt'}),
    //     body: 't=20190320T2303&s=5803.00&fn=9251440300007971&i=141637&fp=4087570038&n=1'
    // }).then(response => console.log(response))

    // }, [result])

    const clickApi = () => {
        const data = {
            t: "20190320T2303",
            s: "5803.00",
            fn: "9251440300007971",
            i: "141637",
            fp: "4087570038",
            n: "1",
            qr: "0",
            token: process.env.REACT_APP_API_KEY,
        };
        const head = new Headers();
        // head.append("Content-Type", "multipart/form-data");
        head.append("Authorization", `Bearer ${process.env.REACT_APP_API_KEY}`);

        const formData = new FormData();
        formData.append(
            "qrraw",
            "t=20190320T2303&s=5803.00&fn=9251440300007971&i=141637&fp=4087570038&n=1"
        );
        formData.append("qr", "3");
        formData.append("token", process.env.REACT_APP_API_KEY!);

        // const request = new XMLHttpRequest();
        // request.withCredentials = true;

        // request.open(
        //     "POST",
        //     "https://proverkacheka.com/api/v1/check/get",
        //     true
        // );
        // request.setRequestHeader("Content-type", "multipart/form-data");
        // request.setRequestHeader(
        //     "Authorization",
        //     `Bearer ${process.env.REACT_APP_API_KEY}`
        // );
        // request.send(formData);
        // request.onload = function (event) {
        //     if (request.status === 200) {
        //         console.log("request = ", request);
        //         console.log("event = ", event);
        //     } else {
        //         console.log("Fail!");
        //         console.log("request = ", request);
        //         console.log("event = ", event);
        //     }
        // };

        // fetch("https://proverkacheka.com/api/v1/check/get", {
        //     method: "POST",
        //     credentials: "include",
        //     mode: "no-cors",
        //     headers: head,
        //     body: formData,
        // })
        //     .then((response) => console.log(response))
        //     .catch((err) => console.log("Res = ", err));

        // api.post("https://proverkacheka.com/api/v1/check/get", formData).then(
        //     (res) => setApiData(res)
        // );
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
            <p>{apiData}</p>
        </Box>
    );
};

export default QrCode;
