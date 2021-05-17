import React from "react";

import { useStyles } from "./styles";
import { Box, SvgIcon, Typography } from "@material-ui/core";

import {
    BarChart as BarChartRecharts,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import ChartLegend from "../ChartLegend";
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

interface IProps {}

const BarChart: React.FC<IProps> = () => {
    const classes = useStyles();

    const CustomizedTick = (props: any) => {
        const { x, y, payload, data } = props;
        return (
            <g transform={`translate(${x},${y})`}>
                <ellipse
                    fill='#EBEBEB'
                    strokeDasharray='null'
                    cx='0'
                    cy='10'
                    id='svg_7'
                    rx='18'
                    ry='12'
                />
                <text
                    x={12}
                    y={-2}
                    dy={16}
                    textAnchor='end'
                    fill='#000'
                    fontSize='10px'
                >
                    {data[payload.value]?.date}
                </text>
            </g>
        );
    };

    return (
        <Box className={classes.root}>
            <Box className={classes.main}>
                <ResponsiveContainer width='200%' height='100%'>
                    <BarChartRecharts
                        data={data}
                        style={{ borderRadius: "4px" }}
                        margin={{
                            top: 4,
                            right: 10,
                            left: 10,
                            bottom: 5,
                        }}
                    >
                        <XAxis
                            axisLine={false}
                            tickLine={false}
                            tick={<CustomizedTick data={data} />}
                        />
                        <Tooltip
                            cursor={{ fill: "transparent" }}
                            content={<CustomTooltip />}
                        />
                        <Bar
                            dataKey='sale'
                            stackId='a'
                            fill='#59A69C'
                            radius={[0, 0, 4, 4]}
                            barSize={20}
                            background={true}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    cursor='pointer'
                                    fill={"#59A69C"}
                                    key={`cell-${index}`}
                                />
                            ))}
                        </Bar>
                        <Bar
                            dataKey='price'
                            stackId='a'
                            fill='#D02E25'
                            barSize={20}
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChartRecharts>
                </ResponsiveContainer>
            </Box>

            <Box className={classes.lineSide}>
                <Typography className={classes.observer}>
                    Обозначения
                </Typography>
                <Box className={classes.invoice}>
                    <Typography className={classes.observerText}>
                        Чек
                    </Typography>
                </Box>
                <Box className={classes.sales}>
                    <Typography className={classes.observerText}>
                        Скидка
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default BarChart;
