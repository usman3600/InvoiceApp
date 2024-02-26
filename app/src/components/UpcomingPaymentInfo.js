import React from 'react';
import { Box, Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';

const sampleData = [
  {
    name: 'John Doe',
    date: '2023-01-15',
    amount: '$13,000',
    status: 'paid',
    invoices: 'INV-001',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name: 'Jane Smith',
    date: '2023-02-20',
    amount: '$3,400',
    status: 'paid',
    invoices: 'INV-002',
    profileImage: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    name: 'Alice Johnson',
    date: '2023-03-10',
    amount: '$6,000',
    status: 'not paid',
    invoices: 'INV-003',
    profileImage: 'https://randomuser.me/api/portraits/women/3.jpg'
  }
];

const statusColors = {
  "paid":"#03ed42",
  "not paid":"#f10909",
}

const UpcomingamountInfo = () => {
  return (
    <Box>
      <TableContainer component={Paper} sx={{ height: "400px", padding: 2 }}>
        <Box>
          <Typography variant='h5'>Payments</Typography>
          <Divider />
        </Box>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell >Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Invoices</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleData.map((row, index) => (
              <TableRow key={index} sx={{alignItems:"end"}}>
                <TableCell sx={{paddingY: 1, paddingX: 2 }}>
                  <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Avatar alt={row.name} src={row.profileImage} sx={{ marginRight: "5px" }} />
                    <Typography>{row.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{paddingY: 1, paddingX: 2}}>{row.date}</TableCell>
                <TableCell sx={{paddingY: 1, paddingX: 2}}>{row.amount}</TableCell>
                <TableCell sx={{paddingY: 1, paddingX: 2, color:statusColors[row.status]}}>{row.status}</TableCell>
                <TableCell sx={{paddingY: 1, paddingX: 2}}>{row.invoices}</TableCell>
              </TableRow>
              
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
    </Box>
  );
};

export default UpcomingamountInfo;
