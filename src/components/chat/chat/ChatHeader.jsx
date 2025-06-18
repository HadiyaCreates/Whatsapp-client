import { Box, styled, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { defaultProfilePicture } from "../../constants/data";

// import { AccountContext } from "../../context/AccountProvider";
const Header = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled("img")({
  width: 40,
  height: 40,
  borderRadius: "50%",
  objectFit: "cover",
});

const Name = styled(Typography)`
  margin-left: 12px !important;
`;
const Status = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;

const RightContainer = styled(Box)`
  margin-left: auto;
  &> svg {
  padding: 8px;
  font-size: 24px;  
  color:#000;
    
  `;

const ChatHeader = ({ person }) => {
  const { account } = useContext(AccountContext);
  const {activeUsers} = useContext(AccountContext);
  return (
    <Header>
      <Image src={person?.picture || defaultProfilePicture} alt="dp" />
      <Box>
        <Name>{person.name}</Name>
        <Status>{activeUsers?.find(user=>user.sub === person.sub)?'Online':'Offline'}</Status>
      </Box>
      <RightContainer>
        <SearchIcon />
        <MoreVertIcon />
      </RightContainer>
    </Header>
  );
};

export default ChatHeader;
