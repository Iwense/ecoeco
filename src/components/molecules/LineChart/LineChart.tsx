import React from "react";
import { useStyles } from "./styles";
import { Box, SvgIcon, Typography } from "@material-ui/core";
import {
    LineChart as LineChartRecharts,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import CustomTooltip from "../../atoms/CustomTooltip";

const data = [
    {
        name: "01",
        price: 600,
        sale: 160,
        date: "10.05",
    },
    {
        name: "02",
        price: 300,
        sale: 120,
        date: "11.05",
    },
    {
        name: "03",
        price: 412,
        sale: 132,
        date: "12.05",
    },
    {
        name: "04",
        price: 512,
        sale: 145,
        date: "13.05",
    },
    {
        name: "05",
        price: 895,
        sale: 415,
        date: "14.05",
    },
    {
        name: "06",
        price: 115,
        sale: 73,
        date: "15.05",
    },
    {
        name: "07",
        price: 658,
        sale: 195,
        date: "16.05",
    },
    {
        name: "07",
        price: 266,
        sale: 156,
        date: "17.05",
    },
    {
        name: "06",
        price: 700,
        sale: 350,
        date: "18.05",
    },
];

const LineChart: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.main}>
            <ResponsiveContainer
                width='100%'
                height='100%'
                className={classes.response}
            >
                <LineChartRecharts
                    data={data}
                    margin={{
                        top: 2,
                        right: 20,
                        left: -20,
                        bottom: 2,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey='date'
                        axisLine={{
                            stroke: "#000",
                            strokeWidth: 2,
                            fontSize: "12px",
                        }}
                        tickLine={false}
                        tick={{
                            stroke: "#000",
                            strokeWidth: 0.4,
                            fontSize: "10px",
                        }}
                        padding={{ left: 4 }}
                    />
                    <YAxis
                        axisLine={{
                            stroke: "#000",
                            strokeWidth: 2,
                        }}
                        tickLine={false}
                        tick={{
                            stroke: "#000",
                            strokeWidth: 0.4,
                            fontSize: "10px",
                        }}
                        padding={{ top: 40 }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                        type='monotone'
                        dataKey='price'
                        stroke='#D02E25'
                        activeDot={{ r: 2 }}
                        strokeWidth={2}
                        dot={false}
                    />
                    <Line
                        type='monotone'
                        dataKey='sale'
                        stroke='#59A69C'
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChartRecharts>
            </ResponsiveContainer>
        </Box>
    );
};

export default LineChart;
