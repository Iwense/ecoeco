import React, { useState } from "react";

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

const inititalData = [
    { id: 1, name: "Мясо и птица", value: 1500.94, color: "#7AD6F5" },
    { id: 2, name: "Молоко", value: 300, color: "#59A69C" },
    { id: 3, name: "Фрукты", value: 204.32, color: "#CE7AF5" },
    { id: 4, name: "Косметика", value: 753.3, color: "#C66072" },
    { id: 5, name: "Хозтовары", value: 1023.3, color: "#FAF34B" },
    { id: 6, name: "Овощи и зелень", value: 250, color: "#7AF57F" },
];

interface IProps {
    onClick?: () => void;
}

const PieChart: React.FC<IProps> = ({ onClick }) => {
    const classes = useStyles();
    const [data, setData] = useState(inititalData);

    const handleChangeClick = (id: number) => {
        const newData = [
            { id: 1, name: "Курица", value: 215.36, color: "#7AD6F5" },
            { id: 2, name: "Свинина", value: 355, color: "#59A69C" },
            { id: 3, name: "Утка", value: 385.32, color: "#CE7AF5" },
            { id: 4, name: "Паштет", value: 82.3, color: "#C66072" },
            { id: 5, name: "Говядина", value: 322.3, color: "#FAF34B" },
            { id: 6, name: "Баранина", value: 250, color: "#7AF57F" },
        ];
        setData(newData);
        onClick && onClick();
    };

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
                                fill={data[index].color}
                                onClick={(e) => handleChangeClick(1)}
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
                                data={data}
                                onClick={(id) => handleChangeClick(id)}
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
