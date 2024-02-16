import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  ListItem,
  List,
} from "@mui/material";
import Client from "./Client";

import React, { useState } from "react";

const DropDownSelect = () => {
  const generateRandomId = () => Math.floor(Math.random() * 1000);
  const clients = [
    {
      name: "John Doe",
      email: "john@example.com",
      mobile: "123-456-7890",
      image: "",
      id: generateRandomId(),
    },
    {
      name: "Alice Smith",
      email: "alice@example.com",
      mobile: "987-654-3210",
      image: "",
      id: generateRandomId(),
    },
    {
      name: "Bob Johnson",
      email: "bob@example.com",
      mobile: "555-123-4567",
      image: "",
      id: generateRandomId(),
    },
    {
      name: "Eva Williams",
      email: "eva@example.com",
      mobile: "333-999-7777",
      image: "",
      id: generateRandomId(),
    },
    {
      name: "Michael Brown",
      email: "michael@example.com",
      mobile: "777-888-9999",
      image: "",
      id: generateRandomId(),
    },
  ];

  const [client, setClient] = useState(clients[0].name);

  const handleChange = (event) => {
    setClient(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
        <InputLabel id="demo-simple-select-standard-label">Client</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={client}
          onChange={handleChange}
          label="Client"
        >
          {clients.map((client) => (
            <MenuItem key={client.id} value={client.name}>
              <Client name={client.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDownSelect;
