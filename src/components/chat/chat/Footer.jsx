import { Box, InputBase, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MoodIcon from '@mui/icons-material/Mood';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { UploadFile } from '../../../service/api';
const Container = styled(Box)`
height: 55px;
background: #ededed;
display: flex;
width: 100%;
align-items: center;
padding: 0 15px;
&>*{
    margin: 5px;
    color: #919191;
}
`;
const Search = styled(Box)`
     background-color: #fff;
     border-radius: 18px;
     width: calc(94% - 100px);

 `;

 const InputField = styled(InputBase)`
 width: 100%;
    padding: 20px;
    height:20px;
    padding-left: 25px;
    font-size: 14px;
 `;

  const ClipIcon = styled(AttachFileIcon)`
  transform: rotate(45deg);
  `;
const Footer = ({sendText, setValue, value, file , setFile, setImage}) => {

  useEffect(()=>{
        const getImage = async()=>{
          if(file){
           const data = new FormData();
           data.append("name", file.name);
           data.append("file", file);

         let response =   await UploadFile(data);
         setImage(response.data)
          }

        }
        getImage()
  },[file])
  
  const onFileChange=(e)=>{
    // console.log(e)
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name)
  }

  return (
    <Container>
       <MoodIcon/>
       <label htmlFor='fileInput'>
       <ClipIcon/>
       </label>
       <input type='file'
       id='fileInput'
        style={{display:'none'}}
        onChange={(e)=>onFileChange(e)}
       />
       <Search>
         <InputField
         placeholder='Type a message'
         onChange={(e)=>setValue(e.target.value)}
         onKeyPress={(e)=>sendText(e)}
         value={value}
         
         />
       </Search>
       <MicIcon/>
    </Container>
  )
}

export default Footer
