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
        price: 15345,
        sale: 1566,
        date: "Январь",
    },
    {
        name: "02",
        price: 10885,
        sale: 1058,
        date: "Февраль",
    },
    {
        name: "03",
        price: 17554,
        sale: 2544,
        date: "Март",
    },
    {
        name: "04",
        price: 8566,
        sale: 840,
        date: "Апрель",
    },
    {
        name: "05",
        price: 14550,
        sale: 1650,
        date: "Май",
    },
    // {
    //     name: "06",
    //     price: 9558,
    //     sale: 875,
    //     date: "Июнь",
    // },
    // {
    //     name: "07",
    //     price: 6588,
    //     sale: 512,
    //     date: "Июль",
    // },
    // {
    //     name: "07",
    //     price: 12569,
    //     sale: 156,
    //     date: "Август",
    // },
    // {
    //     name: "06",
    //     price: 700,
    //     sale: 350,
    //     date: "Сентябрь",
    // },
    // {
    //     name: "06",
    //     price: 700,
    //     sale: 350,
    //     date: "Октябрь",
    // },
    // {
    //     name: "06",
    //     price: 700,
    //     sale: 350,
    //     date: "Ноябрь",
    // },
    // {
    //     name: "06",
    //     price: 700,
    //     sale: 350,
    //     date: "Декабрь",
    // },
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
