import React from 'react'
import { useEffect } from 'react'
import { getUsers } from '../../../service/api';
import { Box , Divider, styled} from '@mui/material';
import Conversation from './Conversation';
import { useState } from 'react';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const  StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: 0.6;

`;
const Conversations = ({text}) => {

        const [users, setUsers] = useState([]);

        const { account, socket, setActiveUsers } = useContext(AccountContext);

 
    useEffect(() => {
   const fetchData = async()=>{
      let response = await getUsers();
      if (Array.isArray(response)) {
        const filteredData = response.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));
        setUsers(filteredData);
        
      } else {
        setUsers([]); // or handle error
      }
   }
   fetchData()
}, [text]);


useEffect(()=>{
socket.current.emit("addUser", account);
socket.current.on("getUsers", users => {
  // setUsers(users);
  setActiveUsers(users);
}
);

},[account])
  return (
    <Component>
        {
           users.map(user => 
            user.sub !== account.sub &&
            <>
           <Conversation user={user}/>
           <StyledDivider/>
           </>
           )

        }
    </Component>
  )
}

export default Conversations
