import * as React from 'react';
import Appbar from './AppBar';
import {Container, Box} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';



import Toolbar from '@mui/material/Toolbar';

import DrawerSide from './DrawerSide';

const drawerWidth = 80;

function Navbar({children}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  

  return (
    <Box sx={{ display: 'flex' }}>
      <Appbar 
      drawerWidth={drawerWidth}
      handleDrawerToggle={handleDrawerToggle}
      />
      <CssBaseline />
      <DrawerSide 
      handleDrawerClose={handleDrawerClose}
      mobileOpen={mobileOpen}
      handleDrawerTransitionEnd={handleDrawerTransitionEnd}
      drawerWidth={drawerWidth}/>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
       {children}
      </Box>
    </Box>
  );
}


export default Navbar;