import React from "react";
import {
  Avatar,
  useMediaQuery,
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import LineChart from "./LineChart";
import FlexBox from "./FlexBox";
import { Paid } from "@mui/icons-material";

const InfoCard = ({ icon, type, data }) => {
  const theme = useTheme();
  const percentageChange = true;
  return (
    <Grid item xs={6}>
      <Card>
        <CardContent sx={{ height: "285px" }}>
          <FlexBox>
            <Avatar>{icon}</Avatar>
            <LineChart />
          </FlexBox>
          <Box sx={{ marginTop: 4 }}>
            <Typography>{type}</Typography>
            <Typography variant="h4">{data}</Typography>
          </Box>
          <FlexBox sx={{ padding: 0 }}>
            <Box>
              <Typography
                sx={{
                  backgroundColor: percentageChange
                    ? theme.palette.green.light
                    : theme.palette.red.light,
                  color: percentageChange
                    ? theme.palette.green.dark
                    : theme.palette.red.dark,
                  borderRadius: "10px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              >
                24%
              </Typography>
            </Box>
            <Typography>vs. previous month</Typography>
          </FlexBox>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default InfoCard;
