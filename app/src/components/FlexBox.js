import {styled} from "@mui/system"
import { Box} from "@mui/material";

const FlexBox = styled(Box)(({ theme }) =>({
    alignItems:"center", justifyContent:"space-between", 
    display:"flex", flexDirection:"row",
    padding:8,
}))

export default FlexBox