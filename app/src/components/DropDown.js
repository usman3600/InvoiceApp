// DropDown.js
import React from 'react';
import { Select, MenuItem } from '@mui/material';

const DropDown = ({ selected, handleChange }) => (
  <div className="App">
    <Select
      value={selected}
      onChange={handleChange}
      sx={{
        marginLeft: '5px',
        borderRadius: 20,
        height: '30px',
      }}
    >
      <MenuItem value={'year'}>This Year</MenuItem>
      <MenuItem value={'week'}>This Week</MenuItem>
      <MenuItem value={'day'}>This Day</MenuItem>
    </Select>
  </div>
);

export default DropDown;
