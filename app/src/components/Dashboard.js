import {Typography, Grid, Box, Container} from "@mui/material"
import BarChartComponent from "./BarChartComponent"
import FlexBox from "./FlexBox"
import Revenuecomponent from "./Revenuecomponent"
const Dashboard = () => {
  return (
         <Box sx={{padding:2}}>
           <Grid container spacing={2}>
              <BarChartComponent/>
              <Revenuecomponent/>
          </Grid>
         </Box>
  )
}

export default Dashboard;