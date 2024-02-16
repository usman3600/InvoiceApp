import React, {useState} from 'react';
import RecentActivity from '../components/RecentActivity';
import FlexBox from '../components/FlexBox';
import {Typography, Divider} from "@mui/material"
import Styles from '../components/Styles';


const RecentActivitySide = () => {
  const [recentActivities, setRecentActivities] = useState([
    {id:"1", type:"client", message: 'added new client', timestamp: '10m ago' },
    {id:"2", type:"payment", message: 'payment made by john', timestamp: '20m ago' },
    {id:"3", type:"invoice", message: 'invoice sent to john', timestamp: '30m ago' },
    {id:"4", type:"client", message: 'added new client', timestamp: '10m ago' },
  ]);

  const removeActivity = (removeid, activitys) =>{
        setRecentActivities(
              activitys.filter(activity => activity.id != removeid)
        )
  }
  return (
    <div>
      <FlexBox>
          <Typography variant='h5'>Recent Activity</Typography>
      </FlexBox>
      <Divider/>
      <RecentActivity activities={recentActivities} removeActivity={removeActivity}/>
    </div>
  );
};

export default RecentActivitySide;