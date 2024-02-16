import {
  Button,
  Container,
  Typography,
  Box,
  Avatar,
  Grid,
  Input,
  InputBase,
  IconButton,
  Modal,
} from "@mui/material";
import { AddAPhotoOutlined, CloseOutlined } from "@mui/icons-material";
import Styles from "./Styles";
import { useState, useEffect } from "react";

const ClientProfile = ({ openModal, handleModal }) => {
  const [clients, setClient] = useState({
    name: "usmanfaki",
    email: "usmanfaki@yahoo.com",
    mobile: "493444934349",
  });
  const [ediMode, setEditMode] = useState(true);
  const [profileImage, setProfileImage] = useState("");
  const ImagePreview = async (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => {
      setProfileImage(reader.result);
    });
  };
  const UpdateProfile = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    ImagePreview(data.get("profile"));
  };
  const handleIconClick = () => {
    const Input = document.getElementById("profile-input");
    Input.click();
  };
  const handleEditUpdate = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (
      validateInput(data.get("name"), data.get("email"), data.get("mobile"))
    ) {
      setClient({
        name: data.get("name"),
        email: data.get("email"),
        mobile: data.get("mobile"),
      });
      setEditMode(!ediMode);
    }
  };
  /*useEffect(()=>{
        const name = document.getElementById("name")
        const email = document.getElementById("email")
        const mobile = document.getElementById("mobile")
        name.value = clients.name
        email.value = clients.email
        mobile.value = clients.mobile
      }, [])*/
  const validateInput = (name, email, mobile) => {
    const emailPattern = "^[a-zA-Z0-9]+[@]+[a-z]+[.]+[a-z]+$";
    const namePattern = "^[a-zA-Z0-9]+$";
    const mobilePattrn = "^[0-9]+$";
    if (
      name.match(namePattern) == null ||
      email.match(emailPattern) == null ||
      mobile.match(mobilePattrn) == null
    ) {
      return false;
    }
    return true;
  };
  const handleToggleEdit = () => {
    setEditMode(!ediMode);
  };
  return (
    <Modal open={openModal} onClose={handleModal}>
      <Container component="main" maxWidth="xs" sx={Styles.PopUpStyle}>
        <Box sx={{ width: "fit-content" }}>
          <IconButton
            onClick={() => {
              handleModal();
            }}
          >
            <CloseOutlined />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: "primary.main",
              width: "100px",
              height: "100px",
            }}
            src={profileImage}
          />
          <Box
            component="form"
            onChange={UpdateProfile}
            sx={{ marginTop: "-50px", marginRight: "-75px" }}
          >
            <IconButton onClick={handleIconClick}>
              <InputBase
                disabled={ediMode}
                sx={{ display: "none" }}
                component={"span"}
                accept="image/*"
                id="profile-input"
                name="profile"
                type="file"
              />
              <AddAPhotoOutlined />
            </IconButton>
          </Box>
          <Box component="form" onSubmit={handleEditUpdate} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ paddingTop: 2 }}>
                <Typography>Full Name</Typography>
                <Input
                  disabled={ediMode}
                  name="name"
                  required
                  fullWidth
                  id="name"
                  autoFocus
                  sx={{ padding: 0 }}
                />
              </Grid>
              <Grid item xs={12} sx={{ paddingTop: 2 }}>
                <Typography>Email</Typography>
                <Input
                  disabled={ediMode}
                  required
                  fullWidth
                  id="email"
                  name="email"
                  type="email"
                  sx={{ padding: 0 }}
                />
              </Grid>
              <Grid item xs={12} sx={{ paddingTop: 2 }}>
                <Typography>Mobile Number</Typography>
                <Input
                  disabled={ediMode}
                  required
                  fullWidth
                  name="mobile"
                  type="tel"
                  id="mobile"
                  sx={Styles.InputStyle}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              onClick={() => {
                handleToggleEdit();
              }}
              sx={{ mt: 1, mb: 1, display: ediMode ? "block" : "none" }}
            >
              Edit
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 1, mb: 1, display: ediMode ? "none" : "block" }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
};
export default ClientProfile;
