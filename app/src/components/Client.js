import { Container, Typography, Avatar } from "@mui/material/";
import FlexBox from "./FlexBox";
import Styles from "./Styles";
const Client = ({ imagePath, name }) => {
  return (
    <FlexBox sx={{ justifyContent: "flex-start", padding: "2px" }}>
      <Avatar sx={{ marginRight: "4px" }} src={imagePath} />
      <Typography sx={Styles.TextStyle1}>{name}</Typography>
    </FlexBox>
  );
};

export default Client;
