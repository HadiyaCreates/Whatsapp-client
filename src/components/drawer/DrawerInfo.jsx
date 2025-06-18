import React from 'react'
import { Box, Drawer, Typography, styled } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Profile from './Profile';

const Header=styled(Box)`
background:#008069;
height:107px;
color:#FFFFFF;
display:flex;
&>svg, &>p{
margin-top:auto;
padding:15px;
font-weight:600;
}
`;

const Component = styled(Box)`
background:#ededed;
height:85%;
`;

const Text = styled(Typography)`
font-size:18px;
`;

const drawerStyle = {
    width: '30%',
    // maxWidth: '400px',
    height: '95%',
    boxShadow: 'none',
    // borderRadius: 0,
    // overflow: 'hidden',
    left:20,
    top:19
    }


const DrawerInfo = ({open, setOpen}) => {

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ style: drawerStyle }}
      style={{ zIndex: 1500 }} 
    >
      <Header>
        <KeyboardBackspaceIcon
        onCLick={()=> setOpen(false)}
        />
        <Text>Profile</Text>
      </Header>
        <Component>
          <Profile/>
        </Component>
    </Drawer>
  )
}

export default DrawerInfo
