
import React, { useContext, useState } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { Box, styled } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

import HeaderMenu from './HeaderMenu';
import DrawerInfo from '../../drawer/DrawerInfo';
const Component = styled(Box)`
  height: 44px;
  padding: 8px 16px;
  background:#ededed;
  display:flex;
  align-items:center;
`;
const Wrrapper = styled(Box)`
margin-left: auto;
&>*{
margin:2px;
padding: 8px;
color: #000;
};
&:first-child{
font-size: 22px;
margin-right: 8px;
margin-top:3px;
}
`;
const Image = styled('img')`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const Header = () => {

  const [openDrawer, setOpenDrawer] = useState(false);

  const { account } = useContext(AccountContext);

   const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <> 
    <Component>
      {account?.picture && (
        <Image
          src={account.picture}
          alt="dp"
          referrerPolicy="no-referrer"
          onClick={() =>toggleDrawer()}
        />

      )}
      <Wrrapper>
        <ChatIcon/>
        <HeaderMenu setOpenDrawer={setOpenDrawer}/>
      </Wrrapper>
    </Component>
       <DrawerInfo open={openDrawer} setOpen={setOpenDrawer}/>
    </>
  );
};

export default Header;
