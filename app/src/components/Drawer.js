import {
  Divider,
  Link,
  ListItem,
  ListItemIcon,
  Box,
  List,
  IconButton,
} from "@mui/material";
import ToggleMode from "./ToggleMode";
import {
  CiHome,
  CiReceipt,
  CiCreditCard2,
  CiLogout,
  CiUser,
} from "react-icons/ci";
import { PiUsersThreeThin } from "react-icons/pi";
import FlexBox from "./FlexBox";
const icons1 = [
  <CiHome size={30} />,
  <PiUsersThreeThin size={30} />,
  <CiReceipt size={30} />,
  <CiCreditCard2 size={30} />,
];
const icons2 = [<CiUser size={30} />, <CiLogout size={30} />];
const paths1 = ["/", "/clients", "/invoice", "/payment"];
const paths2 = ["/adminprofile", "/signin"];
const drawer = (
  <div>
    <Divider />
    <List>
      {paths1.map((path, index) => (
        <ListItem
          key={path}
          disablePadding
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href={paths1[index]}>
            <Box>
              <ListItemIcon
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 1,
                }}
              >
                {icons1[index]}
              </ListItemIcon>
            </Box>
          </Link>
        </ListItem>
      ))}
    </List>
    <ToggleMode />
    <Divider />
    <Box
      sx={{
        mt: "auto",
      }}
    >
      <Box sx={{ marginTop: "47vh" }}>
        <List>
          <Divider />
          {paths2.map((path, index) => (
            <ListItem
              key={path}
              disablePadding
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link href={paths2[index]}>
                <Box>
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 1,
                    }}
                  >
                    {icons2[index]}
                  </ListItemIcon>
                </Box>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  </div>
);

export default drawer;
