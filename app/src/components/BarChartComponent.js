import {Container, Card, Typography, Grid, CardContent, Box, useTheme} from "@mui/material"
import FlexBox from "./FlexBox"
import DropDown from "./DropDown";
import { useState } from "react";
import Styles from "./Styles"
import {Bar} from "react-chartjs-2"
import {paymentPeriod} from "./ChartController"
import {options} from "./ChartController"
import { period } from "./ChartController";
import {data}  from "./ChartController";

import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js"

Chart.register(
  CategoryScale, LinearScale, BarElement, Tooltip
)

const BarChartComponent = () =>{
    const theme = useTheme() 
    const [selected, setSelected] = useState("year")
    const  [labels, setLabels] = useState(period[selected])
    const  [payment, setPayment] = useState(paymentPeriod[selected])
      data.labels = labels
      data.datasets =  [
        {
          data:payment,
          backgroundColor: theme.palette.mode == "dark"?theme.palette.primary.dark:theme.palette.primary.light,
          barThickness: 20,
          borderRadius:50,
        },
      ]
      const handleChange = (event) => {
        setPayment(paymentPeriod[event.target.value])
        setLabels(period[event.target.value])     
        setSelected(event.target.value)

    }
    return(
     <Grid item xs={12} md={6}>
          <Card >
          <CardContent>
                <FlexBox sx={{padding:0}}>
                    <Box><Typography sx={Styles.TextStyle}>Payment</Typography></Box>
                    <FlexBox sx={{padding:0}}>
                        <Typography>Sort By</Typography>
                        <DropDown
                          handleChange={handleChange}
                          selected={selected}
                        />
                    </FlexBox>
                </FlexBox>
                <Box  height="200px">
                <Bar options={options} data={data} />
                </Box>
          </CardContent>
          </Card>
      </Grid>
    ) 
}

export default BarChartComponent