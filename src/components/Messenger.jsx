import LoginDialog from "./account/LoginDialog";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useContext } from "react";
import { AccountContext } from "./context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";
const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00ab82;
  box-shadow: none;
`;
const Header = styled(AppBar)`
  height: 125px;
  background-color: #00A88A;
  box-shadow: none;
`;

const Component = styled(Box)`
  height: 100vh;
  background: #DCDCDC;
`;

const Messenger = () => {
  const {account} = useContext(AccountContext)
  return (
    <Component>
      {
        account?
        <>
        <Header>
          <Toolbar>

          </Toolbar>
        </Header>
        <ChatDialog />
        </>
        :
        <>
      <LoginHeader position="static">
        <Toolbar>
        
        </Toolbar>
      </LoginHeader>
      <LoginDialog />
      </>
      }
    </Component>
  );
};

export default Messenger;
