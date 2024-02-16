import {Box, useTheme} from "@mui/material"
import React from 'react';
import { options1 } from "./ChartController";
import { Line } from 'react-chartjs-2';
import {Chart, CategoryScale,
    LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
  
Chart.register( CategoryScale, LinearScale, PointElement, LineElement,Title,  Tooltip, Legend, Filler
  );

const LineChart = () => {
 const theme = useTheme();
 let parcentageChange = true;
  const datax = {
    labels:[
        'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5',
        'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10',
        'Day 11', 'Day 12', 'Day 13', 'Day 14', 'Day 15',
        'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20',
        'Day 21', 'Day 22', 'Day 23', 'Day 24', 'Day 25',
        'Day 26', 'Day 27', 'Day 28', 'Day 29', 'Day 30'
      ],
    datasets: [
      {
        label: 'My Line Chart',
        data: [
            100, 105, 98, 103, 95, 105, 110, 108, 102, 98,
            105, 112, 115, 110, 118, 113, 108, 102, 97, 105,
            100, 105, 98, 103, 95, 105, 110, 108, 102, 98
          ],
        fill: true,
        backgroundColor:parcentageChange?theme.palette.green.light:theme.palette.red.light,
        borderColor: parcentageChange?theme.palette.green.dark:theme.palette.red.dark, // Line color
        borderWidth: 0.5,
      },
    ],
  };

  
  return (
        <Box position="relative" width="100px" height="70px">
          <Line
            data={datax}
            options={options1}
          />
        </Box>
     )
 }
export default LineChart;
