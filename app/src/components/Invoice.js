import {Typography, Box, Grid, IconButton, Modal, Container, Button} from "@mui/material"
import FlexBox from "./FlexBox"
import Styles from "./Styles"
import {MoreVert, FileDownload, Assignment, Delete} from "@mui/icons-material"
import { useState } from "react"

const MoreActions = ({more, toggleMore}) => {
        return (
          <Modal
          open={more}
          onClose={toggleMore}
          >
            <Container sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                <Box>
                    <Button variant="contained" color="primary" sx={{marginBottom:"5px"}}>
                        <Typography>Download</Typography>
                        <FileDownload/>
                    </Button>
                    <Button variant="contained" color="error">
                        <Typography>Remove</Typography>
                        <Delete/>
                    </Button>
                </Box>
            </Container>
        </Modal>
        )
}
const Invoice = ({date, client, invoicename}) => {
    const [more, setMore] = useState(false);

    const toggleMore = () => {
      setMore(!more)
    }


  return (
    <Box>
      <FlexBox>
       
        <MoreActions more={more} toggleMore={toggleMore}/>
        <FlexBox sx={{padding:0}}> 
        <Assignment/>
        <FlexBox style={{flexDirection:"column", marginLeft:"20px",  alignItems:"flex-start", padding:0}}>
            <FlexBox style={{padding:0}}>
            <Typography style={Styles.TextStyle1}>{invoicename}</Typography>
            </FlexBox>
            <FlexBox sx={{padding:0}}>
            <Typography style={Styles.TextStyle2} sx={{marginRight:"3px"}}>sent to client {client} on</Typography>
            <Typography style={Styles.TextStyle2}>{date}</Typography>
            </FlexBox>
        </FlexBox>
        </FlexBox>
        <Grid>
        <IconButton onClick={toggleMore}>
                <MoreVert/>
        </IconButton>
        </Grid>
      </FlexBox>
    </Box>
  )
}

export default Invoice