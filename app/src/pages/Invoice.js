import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import {Box, List, ListItem, Typography, Container, Button, useTheme} from "@mui/material"
import Invoice from "../components/Invoice"
import Header from '../components/Navbar'
import Styles from '../components/Styles'
import FlexBox from '../components/FlexBox'


const InvoicePage = () => {
  const navigate = useNavigate()
  const [invoices, setInvoices] = useState([
    {date:"20-12-2024", client:"usmanfaki", invoicename:"Invoice Document"},
    {date:"1-2-2024", client:"faki", invoicename:"Invoice Document"},
    {date:"10-2-2024", client:"ibrahim", invoicename:"Invoice Document"},
  ])
  return (
    <Box  sx={{bgcolor: 'background.default'}}>
      <Container>
      <FlexBox>
            <Typography sx={Styles.TextStyle}>invoices</Typography>
            <Button sx={{width:"fit-content"}} onClick={()=>{navigate("/invoicegenerator")}}>generate invoice</Button>
        </FlexBox>
      <List disablePadding sx={{padding:0}}>
        {invoices.map((invoice)=>(
          <ListItem key={invoice.date}  disablePadding sx={{display:"block"}}>
            <Invoice date={invoice.date} client={invoice.client} invoicename={invoice.invoicename}/>
          </ListItem>
        ))}
      </List>
      </Container>
      <Box sx={{minHeight: '100vh'}}>
      <Box sx={{mt:"auto"}}>

      </Box>
    </Box>
    </Box>
  )
}

export default InvoicePage
