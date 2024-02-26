import React from 'react'
import { List, ListItem, ListItemText, Typography, Box,  IconButton, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FlexBox from './FlexBox';
import { CiReceipt, CiUser} from "react-icons/ci";
import { MdPaid } from "react-icons/md";
const avatars = {
    "client": <CiUser/>,
    "payment": <MdPaid/>,
    "invoice": <CiReceipt/>
}
const colors = {
  "client": "#026c8d",
  "payment": "#e527d2",
  "invoice": "#eb4f0c"
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
  },
  listItem: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingTop:0,
    paddingBottom:0
  },
  ListItemText:{
    paddingTop:0,
    paddingBottom:0
  }
}));

const RecentActivity = ({activities, removeActivity}) => {
  const classes = useStyles();

  return (
    <List className={classes.root} >
      {activities.map((activity, index) => (
        <ListItem key={index} sx={{paddingTop:0, paddingBottom:0, borderRadius:"10px"}} className={classes.listItem}>
          <ListItemText  className={classes.ListItemText}>
          <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-ev"}}>
          <Avatar sx={{bgcolor: colors[activity.type], marginRight:"4px"}}>
              {avatars[activity.type]}
          </Avatar>
          <Box>
            <Typography sx={{fontSize:"15px"}}>{activity.message}</Typography>
            <Typography sx={{fontSize:"12px"}} variant="body2" >{activity.timestamp}</Typography>
          </Box>
          {/*<IconButton sx={{width:"fit-content"}} onClick={() => {removeActivity(activity.id, activities)}}>
              <CiCircleRemove/>
      </IconButton>*/}
            </Box>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default RecentActivity;
