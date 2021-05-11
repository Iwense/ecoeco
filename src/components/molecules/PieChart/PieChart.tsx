import React from "react";

import { useStyles } from "./styles";
import { Box, SvgIcon, Typography } from "@material-ui/core";

import { PieChart as PieChartRecharts, ResponsiveContainer,Legend, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


interface IProps{
  
}

const PieChart: React.FC<IProps> = () => {
  const classes = useStyles();
 
  return (
      <Box className={classes.root}>
        <ResponsiveContainer>
          <PieChartRecharts >
            <Pie
              data={data}
              cx={85}
              cy={85}
              innerRadius={55}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              <Legend height={36}/>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChartRecharts>
        </ResponsiveContainer>
      </Box>
  );
};

export default PieChart;