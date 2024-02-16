import React from "react";
import RecentActivitySide from "./RecentActivitySide";
import ClientsSide from "./ClientsSide";
import { Grid, Box, Card, CardContent, Typography, Container, Divider } from "@mui/material";
import FlexBox from "./FlexBox";
import UpcomingPaymentInfo from "./UpcomingPaymentInfo";
const ClientAndRecentSection = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
            <UpcomingPaymentInfo/>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ height: "400px"}}>
            <CardContent sx={{padding:0}}>
              <RecentActivitySide />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClientAndRecentSection;
