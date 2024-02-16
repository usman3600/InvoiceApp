import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  paper: {
    padding: theme.spacing(3),
  },
  listItem: {
    padding: theme.spacing(1),
  },
}));

const AdminProfile= () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3} justify="center">
      </Grid>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h4" gutterBottom>
          Admin Profile
        </Typography>
        <Divider />
        <List disablePadding>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Name" secondary="John Doe" />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Email" secondary="john.doe@example.com" />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="Phone" secondary="+1234567890" />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Address" secondary="123 Main St, City, Country" />
          </ListItem>
        </List>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary">
              Edit Profile
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              Change Password
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AdminProfile;
