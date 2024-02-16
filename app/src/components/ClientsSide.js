import {
  Divider,
  List,
  ListItem,
  Button,
  ListItemButton,
  Container,
  Typography,
  Modal,
  CssBaseline,
  Box,
  Avatar,
  IconButton,
  Grid,
  Input,
  InputBase,
} from "@mui/material";
import { AddAPhotoOutlined, CloseOutlined } from "@mui/icons-material";
import FlexBox from "./FlexBox";
import Client from "./Client";
import Styles from "./Styles";
import { useState } from "react";

import ClientProfile from "./ClientProfile";
import AddClient from "./AddClient";

const ClientsSide = () => {
  const [clients, setClient] = useState([
    { name: "usmanfaki", email: "usmanfaki@yahoo.com", mobile: "493444934349" },
  ]);
  const [popOut, setPopOut] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handlePopOut = () => {
    setPopOut(!popOut);
  };
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      <Box>
        <Box>
          <AddClient
            popOut={popOut}
            setPopOut={setPopOut}
            handlePopOut={handlePopOut}
            clients={clients}
            setClient={setClient}
          />
        </Box>
        <Box>
          <ClientProfile openModal={openModal} handleModal={handleModal} />
        </Box>
        <FlexBox>
          <Typography sx={Styles.TextStyle}>Clients</Typography>
          <Button
            sx={{ width: "fit-content" }}
            onClick={() => {
              handlePopOut();
            }}
          >
            Add Client
          </Button>
        </FlexBox>
        <Divider />
        <List>
          {clients.map((client) => (
            <ListItem
              key={client.name}
              disablePadding
              sx={{ marginBottom: "4px" }}
            >
              <ListItemButton
                onClick={() => {
                  handleModal();
                }}
                sx={{ justifyContent: "flex-start" }}
              >
                <Client name={client.name} />
                <Divider />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default ClientsSide;
