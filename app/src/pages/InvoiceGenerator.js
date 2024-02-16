import React, { useState } from 'react'
import {Box, List, ListItem, Typography, Container, Button, Divider, Input} from "@mui/material"
import Header from '../components/Navbar'
import Styles from '../components/Styles'
import FlexBox from '../components/FlexBox'
import Client from '../components/Client'
import DropDownSelect from "../components/DropDownSelect"


const InvoiceGenerator = () =>{

    const [items, setItems] = useState([
        //{name:"milestone1", rate:"$30.00", hours:"3"},
        //name:"milestone3", rate:"$350.00", hours:"26"},
      ])
      const [pageType, setpageType] = useState("generate invoice")
      const [total, setTotal] = useState(0.00)
      const isGenerateInvoice = pageType === "generate invoice"
      const changePage = () => {
        setpageType("invoice")
      }
      const AddItem = async(items, newItem) => {
        if (newItem.name != "" && newItem.rate != "" && newItem.hours != ""){
          setItems(()=>{
            return [...items, newItem]
          })
          ClearField()
          setTotal(totalSum())
        }
        else{
          alert("enter all the input");
        }
      }
    
      const handleAddItem = (event) =>{
        event.preventDefault();
        const item = new FormData(event.currentTarget)
        AddItem(items, {
          name:item.get("name"),
          rate:item.get("rate"),
          hours:item.get("hours")
        })
        
      }
      const ClearField = () =>{
        const name = document.getElementById("name")
        const rate = document.getElementById("rate")
        const hours = document.getElementById("hours")
        name.value = ""
        rate.value = ""
        hours.value = ""
      }
    
      const totalSum = () => {
        let sum = 0;
        console.log("items.length", items.length)
        for(let i=0; i<items.length; i++){
          var item = items[i]
          var rate = item.rate
          let parseString = rate.split("$")
          sum +=parseFloat(parseString[1])
          console.log("loop")
        }
      console.log("sum---->", sum)
       return sum
      }
      const Item = ({name, rate, hours}) => {
        return(
          <FlexBox>
            <Box>
              <Input value={name} sx={{width:"80px"}}/>
            </Box>
            <Box>
              <Input value={rate} sx={{width:"60px"}}/>
            </Box>
            <Box >
            <Input value={hours}  sx={{width:"50px"}}/>
            </Box>
          </FlexBox>
        )
      }
    return(
      <Box sx={{bgcolor: 'background.paper'}}>
        <Container  maxWidth="sm" sx={{bgcolor: 'background.paper', boxShadow: 24, p: 4}}>
      <Typography sx={Styles.TextStyle}>{pageType}</Typography>
      {isGenerateInvoice?
        <DropDownSelect/>:
        <Box>
          <FlexBox>
            <Typography style={Styles.TextStyle2}>Client</Typography>
            <Client name={"usmanfaki"}/>
          </FlexBox>
          <FlexBox>
            <Typography style={Styles.TextStyle2}>Email</Typography>
            <Typography style={Styles.TextStyle2}>Usmanfaki720@gmail.com</Typography>
          </FlexBox>
          <FlexBox>
            <Typography style={Styles.TextStyle2}>Mobile Number</Typography>
            <Typography style={Styles.TextStyle2}>07014343345</Typography>
          </FlexBox>
        </Box>
      }
      <Box>
      <FlexBox>
        <Typography>Item</Typography>
        <Typography>Rate</Typography>
        <Typography>Hours</Typography>
      </FlexBox>
        <List>
          {items.map((item)=>(
            <ListItem scr key={item.name} disablePadding sx={{display:"block", paddingTop:0}}>
              <Item name={item.name} rate={item.rate} hours={item.hours}/>
            </ListItem>
          ))}
        </List>
        {isGenerateInvoice && <Box component={"form"} onSubmit={handleAddItem}>
          <FlexBox sx={{padding:"4px"}}>
            <Box>
              <Input name="name" id="name" sx={{width:"80px"}}/>
            </Box>
            <Box>
              <Input name="rate" id="rate" sx={{width:"60px"}}/>
            </Box>
            <Box >
              <Input name="hours" id="hours" sx={{width:"50px", textAlign:"center"}}/>
            </Box>
          </FlexBox>
          <FlexBox sx={{justifyContent:"flex-end"}}>
          <Button sx={{width:"100px"}} type="submit">add item</Button>
          </FlexBox>
        </Box>}
      </Box>
      <Box sx={{
          display: 'flex',
          flexDirection:"column",
          minHeight:"30vh", marginBottom:"50px"}}>
      <Box sx={{
        mt: 'auto'
      }}>
        <Divider/>
        <FlexBox>
          <Typography>total</Typography>
          <Typography style={Styles.TextStyle1}>us$ {total}</Typography>
        </FlexBox>
      </Box>
      </Box>
     <Box>
      {isGenerateInvoice?
        <Button color="primary" variant="contained" onClick={()=>{changePage()}}>DONE</Button>:
        <Button color="primary" variant="contained" onClick={()=>{changePage()}}>SEND</Button>
      }
      </Box>
    </Container>
    <Box sx={{minHeight: '10vh',}}>
      <Box sx={{mt:"auto"}}>

      </Box>
    </Box>
    </Box>
    )
  }
export default InvoiceGenerator
