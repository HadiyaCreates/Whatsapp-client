import { Dialog ,Box, Divider} from "@mui/material";
// import { styled } from "@mui/material/styles";
import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";
import { styled } from "@mui/material/styles";
import ChatBox from "./chat/ChatBox";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider"; // Assuming person 
const Component = styled(Box)`
  display: flex;`; 

const LeftComponent = styled(Box)`
min-width:450px;`;

const RightComponent = styled(Box)`
width:73%;
min-width:300px;
height:100%
border-left:1px solid rgba(0, 0, 0, 0.14);
`;
const dialogStyle = {
  height: "95%",
  width: "100%",
  margin:"20px",
  maxWidth: "100%",
  borderRadius:0,
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};
const ChatDialog=()=>{
 
  const { account , person} = useContext(AccountContext);

    return (
       <Dialog
       open={true} PaperProps={{ style: dialogStyle}} hideBackdrop={true}
       maxWidth={'md'}
       >
          <Component>
            <LeftComponent>
                <Menu/>
            </LeftComponent>
             <Divider orientation="vertical" flexItem sx={{ backgroundColor: '#e9edef', width: '1px' }} />
            <RightComponent>
                {/* <EmptyChat/>
                <ChatBox/> */}
                {Object.keys(person).length ?<ChatBox/> : <EmptyChat/>}
            </RightComponent>
          </Component>
       </Dialog>
    );
}

export default ChatDialog;