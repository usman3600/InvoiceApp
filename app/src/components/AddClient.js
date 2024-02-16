import {Button, 
   Container, Typography,
 Modal, Box, Avatar, IconButton,
Grid, Input, InputBase} from "@mui/material"
import { AddAPhotoOutlined, CloseOutlined } from "@mui/icons-material"
import FlexBox from "./FlexBox"
import Client from "./Client"
import Styles from "./Styles"
import { useState } from "react"

import ClientProfile from "./ClientProfile"


const AddClient = ({popOut, setPopOut, handlePopOut, clients, setClient}) => {

    
    const [profileImage, setProfileImage] = useState("")
    const ImagePreview = async(file) =>{
        const reader =   new  FileReader();
        reader.readAsDataURL(file)
        reader.addEventListener("load",()=>{
          setProfileImage(reader.result)
        })
        
    }
    const UpdateProfile = (event) =>{
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      ImagePreview(data.get("profile"))
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      addClient(clients, {
        name:data.get("name"),
        email:data.get("email"),
        mobile:data.get("mobile")
      })
      handleClearInput()
    };
    const addClient = (clients, newClient) =>{
        setClient(()=>{
          return [...clients, newClient]
        })
    }
    const handleClearInput = ()=>{
      setPopOut(!popOut)
      setProfileImage("")
    }
    const handleIconClick = () => {
      const Input = document.getElementById("profile-input")
      Input.click()
    };
    return (
    <Modal open={popOut}  onClose={handlePopOut}>
        <Container component="main" maxWidth="xs" sx={Styles.PopUpStyle}>
         <FlexBox>
         <Box sx={{width:"fit-content"}}>
          <IconButton onClick={()=>{handlePopOut()}}>
              <CloseOutlined/>
          </IconButton>
          </Box>
          <Box>
          <Typography component="h1" variant="h5">
              Add Client
            </Typography>
          </Box>
         </FlexBox>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main', width:"100px", height:"100px"}}src={profileImage}/>
            <Box component="form" onChange={UpdateProfile} sx={{marginTop:"-50px", marginRight:"-75px"}}>
              <IconButton onClick={handleIconClick}>
                  <InputBase  sx={{display:"none"}} component={"span"} accept="image/*" id="profile-input" name="profile" type="file"/>
                  <AddAPhotoOutlined/>
                </IconButton>
            </Box>
            <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>Full Name</Typography>
                  <Input
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    autoFocus
                    sx={{padding:0}}
                  />
                 
                </Grid>
                <Grid item xs={12}>
                <Typography>Email</Typography>
                  <Input
                    required
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                    type="email"
                    sx={{padding:0}}
                  />
                </Grid>
                <Grid item xs={12}>
                <Typography>Mobile Number</Typography>
                  <Input
                    required
                    fullWidth
                    name="mobile"
                    type="tel"
                    id="mobile"
                    autoComplete="tel"
                   sx={Styles.InputStyle}
                   />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
              >
                Add Client
              </Button>
              <Button
                fullWidth
                variant="outlined"
                sx={{ mt: 1, mb: 1 }}
                onClick={()=>{handleClearInput()}}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Container>
    </Modal>
    );
  }

export default AddClient