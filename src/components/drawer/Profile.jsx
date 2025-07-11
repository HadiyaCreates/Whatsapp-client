import { Box , styled, Typography} from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'

const ImageContainer = styled(Box)`
display:flex;
justify-content:center;
`;
const Image = styled('img')({
    width:200,
    height:200,
    borderRadius:'50%',
    padding:'25px 0',
})

const DescriptionContainer = styled(Box)`
  padding:15px 20px 20px 30px;
  & > p{
  font-size:13px;
  color:#8696a0;
  }
`;

const BoxWrapper = styled(Box)`
background:#FFFFFF;
padding:12px 30px 2px;
box-shadow:0 1px 3px rgba(0,0,0,0.08);
& : first-child{
font-size:13px;
color:#009688;
font-weight:200;
}
& :last-child {
margin:14px 0;
color:#4A4A4A;
}
`;

const Profile = () => {
     const {account} = useContext(AccountContext)
  return (
    <>
    <ImageContainer>
        <Image src={account.picture} alt="dp" />
    </ImageContainer>
    <BoxWrapper>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
    </BoxWrapper>
    <DescriptionContainer>
    <Typography>This is not your username or PIN. This name will be visible to your WhatsApp contacts.</Typography>
    </DescriptionContainer>
    <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Hey there! I am using Whatsapp</Typography>
    </BoxWrapper>
    </>
  )
}

export default Profile
