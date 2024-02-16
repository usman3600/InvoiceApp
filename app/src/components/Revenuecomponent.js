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
import { MdPaid } from "react-icons/md";
import { GrCubes } from "react-icons/gr";
import InfoCard from "./InfoCard";

const Revenuecomponent = () => {
  const theme = useTheme();
  const percentageChange = true;

  return (
    <Grid item xs={12} md={6}>
      <Grid container spacing={2}>
        <InfoCard icon={<GrCubes />} type={"payment number"} data={456} />
        <InfoCard icon={<MdPaid />} type={"payment income"} data={"$123,000"} />
      </Grid>
    </Grid>
  );
};

export default Revenuecomponent;
