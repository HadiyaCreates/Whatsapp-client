import { Box ,styled} from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
const Component = styled(Box)`
background: #fff;
height:45px;
border-bottom: 1px solid #F2F2F2;
display: flex;
align-items: center;
`;

const Wrrapper = styled(Box)`
background-color:#f0f2f5;
position: relative;
margin: 0 13px;
width:100%;
border-radius:10px;
`;
const Icon = styled(Box)`
position: absolute;
height: 100%;
padding: 6px 10px;
color: #919191;
`;
const InputField = styled(InputBase)`
  width: 100%;
  padding:16px;
  padding-left: 65px;
  height:15px;
  font-size: 14px;
  `;
const Search = ({setText}) => {
  return (
    
      <Component>
          <Wrrapper>
            <Icon> 
                <SearchIcon
                fontSize='small'
                />
            </Icon>
            <InputField
             placeholder='Search or start new chat' 
             onChange={(e)=>setText(e.target.value)}
            />
          </Wrrapper>
      </Component>
  
  )
}

export default Search
