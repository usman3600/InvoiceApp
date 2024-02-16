import React, {useState} from 'react'
import {Box, Typography, Divider, AppBar, Avatar, useTheme, IconButton, useMediaQuery} from "@mui/material"
import FlexBox from './FlexBox'
import MenuIcon from '@mui/icons-material/Menu';
import Styles from './Styles'
const Appbar = ({handleDrawerToggle, drawerWidth}) => {
    const ismobile = useMediaQuery("(min-width:600px)")
    console.log("isMobile--->", !ismobile)
    const [mobileOpen, setMobileOpen] = useState();
    const theme = useTheme()
  return (
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        color='inherit'
      >
         <FlexBox>
         {!ismobile? <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, width:"50px" }}
          >
            <MenuIcon />
          </IconButton>:
         <Box>
            <Typography sx={Styles.TextStyle}>
                    Dashboard
            </Typography>
          </Box>}

          <FlexBox>
           <Typography sx={Styles.TextItalics}>faki360</Typography>
             <Avatar sx={{bgcolor: theme.palette.primary.dark}}>
            <Typography sx={{fontWeight:"bold",  fontSize:"30px"}}>A</Typography>
          </Avatar>
        </FlexBox>
         </FlexBox>
      </AppBar>
      
  )
}

export default Appbar