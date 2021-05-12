import React from "react";

import { useStyles } from "./styles";
import { Box, SvgIcon, Typography } from "@material-ui/core";

import {
    PieChart as PieChartRecharts,
    ResponsiveContainer,
    Legend,
    Pie,
    Sector,
    Cell,
} from "recharts";
import ChartLegend from "../ChartLegend";

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

interface IProps {}

const PieChart: React.FC<IProps> = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <ResponsiveContainer>
                <PieChartRecharts>
                    <Pie
                        data={data}
                        cx={55}
                        cy={55}
                        innerRadius={35}
                        outerRadius={50}
                        fill='#8884d8'
                        dataKey='value'
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Legend
                        verticalAlign='middle'
                        align='right'
                        wrapperStyle={{
                            width: "fit-content",
                        }}
                        content={
                            <ChartLegend
                                dataLegend={[
                                    { id: 1, title: "123", price: 1223 },
                                ]}
                                data={[
                                    { id: 1, title: "123", price: 1223 },
                                    { id: 2, title: "123", price: 1223 },
                                    { id: 3, title: "123", price: 1223 },
                                    { id: 4, title: "123", price: 1223 },
                                ]}
                                onClick={() => null}
                                handleMoveBox={() => null}
                            />
                        }
                    />
                </PieChartRecharts>
            </ResponsiveContainer>
        </Box>
    );
};

export default PieChart;
