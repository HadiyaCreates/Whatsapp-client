import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { formatDate, downloadMedia } from '../../../utils/common-utils';
import { useContext } from 'react';
import{ AccountContext} from '../../context/AccountProvider'
import { iconPDF } from '../../constants/data';
import GetAppIcon from '@mui/icons-material/GetApp';
const Own = styled(Box)`
background:#dcf8c6;
max-width:60%;
margin-left:auto;
padding:5px;
width:fit-content;
display:flex;
border-radius:10px;
word-break:break-word;
`;
const Receive = styled(Box)`
background:#FFFFFF;
max-width:60%;
padding:5px;
width:fit-content;
display:flex;
border-radius:10px;
word-break:break-word;
`;

const Text = styled(Typography)`
font-size:14px;
padding:0 25px 0 5px;
`;
const Time = styled(Typography)`
  font-size:10px;
  color:#919191;
  margin-top:6px;
  word-break:keep-all;
  margin-top:auto;
`;



const Message = ({ message }) => {
  const { account } = useContext(AccountContext);

  // Add this line:
  // console.log('account.sub:', account.sub, 'message.senderId:', message.senderId, 'message:', message);

  // return (
  //   <>
  //     {account.sub === message.senderId ? (
  //       <Own>
  //         {
  //           message.type==='file'? <ImageMessage message={message}/> :<TextMessage message={message}/>
  //         }
        
  //       </Own>
  //     ) : (
  //       <Receive>
  //         <Text>{message.text}</Text>
  //         <Time>{formatDate(message.createdAt)}</Time>
  //       </Receive>
  //     )}
  //   </>
  // );
  return (
  <>
    {account.sub === message.senderId ? (
      <Own>
        {message.type === 'file'
          ? <ImageMessage message={message} />
          : <TextMessage message={message} />}
      </Own>
    ) : (
      <Receive>
        {message.type === 'file'
          ? <ImageMessage message={message} />
          : <TextMessage message={message} />}
      </Receive>
    )}
  </>
);
};
// const ImageMessage = ({message})=>{
//   return(
//     <Box>
//       {
//         message?.text?.includes('.pdf')?
//         <Box>
//           </Box>

//         :
//         <img src={message.text} alt={message.text}/>
//       }
//     </Box>
//   )
// }





// const ImageMessage = ({ message }) => {
//   if (!message?.text) return null;

//   const fileUrl = message.text;
//   const isPDF = fileUrl.toLowerCase().includes('.pdf');

//   if (isPDF) {
//     return (
//       <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' , marginRight:1}}>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <img src={iconPDF} alt="PDF" style={{ width: 80, marginRight: 10 }} />
//           <Typography sx={{ fontSize: 14, wordBreak: 'break-all' }}>
//             {fileUrl.split('/').pop()}
//           </Typography>
//         </Box>

//         {/* Download and time - bottom right corner like in WhatsApp */}
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'flex-end',
//             alignItems: 'center',
//             gap: 1,
//             // marginTop: 1,
//           }}
//         >
//           <GetAppIcon
//             onClick={(e) => downloadMedia(e, message.text)}
//             sx={{
//               fontSize: 15,
//               border: '1px solid grey',
//               borderRadius: '50%',
//               padding: '2px',
//               cursor: 'pointer',
//             }}
//           />
//           <Time>{formatDate(message.createdAt)}</Time>
//         </Box>
//       </Box>
//     );
//   }

//   // 🖼️ For image files
//   return (
//     <Box sx={{ position: 'relative', display: 'inline-block' }}>
//       <a href={fileUrl} target="_blank" rel="noopener noreferrer">
//         <img
//           src={fileUrl}
//           alt="Sent file"
//           style={{
//             maxWidth: 300,
//             borderRadius: 5,
//             cursor: 'pointer',
//             height: '100%',
//             objectFit: 'cover',
//           }}
//         />
//       </a>

//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: 5,
//           right: 5,
//           display: 'flex',
//           alignItems: 'center',
       
//           borderRadius: 4,
//           padding: '3px ',
        
//         }}
//       >
//         <GetAppIcon
//           onClick={(e) => downloadMedia(e, message.text)}
//           sx={{ color: '#000000', fontSize: 15, cursor: 'pointer', marginRight: 1     ,border: '1px solid #4d4a4a',
//               borderRadius: '50%', padding:'1px'}}
//         />
//         <Time sx={{ color: '#4d4a4a', fontSize: 10, margin: 0 }}>{formatDate(message.createdAt)}</Time>
//       </Box>
//     </Box>
//   );
// };

// const ImageMessage = ({ message }) => {
//   if (!message?.text) return null;

//   const fileUrl = message.text;
//   const isPDF = fileUrl.toLowerCase().includes('.pdf');

//   if (isPDF) {
//     return (
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'row',
//           alignItems: 'center',
//           backgroundColor: '#e1f3fb',
//           borderRadius: 10,
//           padding: '5px 10px',
//           maxWidth: 350,
//           wordBreak: 'break-word',
//           justifyContent: 'space-between',
//           gap: 1,
//         }}
//       >
//         {/* PDF Icon + File Name */}
//         <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
//           <img src={iconPDF} alt="PDF" style={{ width: 45, marginRight: 10 }} />
//           <Typography sx={{ fontSize: 13 }}>
//             {fileUrl.split('/').pop()}
//           </Typography>
//         </Box>

//         {/* Download Icon and Time */}
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: '2px',
//           }}
//         >
//           <GetAppIcon
//             onClick={(e) => downloadMedia(e, message.text)}
//             sx={{
//               fontSize: 18,
//               border: '1px solid grey',
//               borderRadius: '50%',
//               padding: '4px',
//               cursor: 'pointer',
//             }}
//           />
//           <Time>{formatDate(message.createdAt)}</Time>
//         </Box>
//       </Box>
//     );
//   }

//   // 🖼️ Image Message fallback
//   return (
//     <Box sx={{ position: 'relative', display: 'inline-block' }}>
//       <a href={fileUrl} target="_blank" rel="noopener noreferrer">
//         <img
//           src={fileUrl}
//           alt="Sent file"
//           style={{
//             maxWidth: 300,
//             borderRadius: 5,
//             cursor: 'pointer',
//             objectFit: 'cover',
//           }}
//         />
//       </a>

//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: 5,
//           right: 5,
//           display: 'flex',
//           alignItems: 'center',
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           borderRadius: 4,
//           padding: '3px 6px',
//         }}
//       >
//         <GetAppIcon
//           onClick={(e) => downloadMedia(e, message.text)}
//           sx={{
//             color: '#fff',
//             fontSize: 14,
//             cursor: 'pointer',
//             marginRight: 1,
//           }}
//         />
//         <Time sx={{ color: '#fff', fontSize: 10 }}>{formatDate(message.createdAt)}</Time>
//       </Box>
//     </Box>
//   );
// };
const ImageMessage = ({ message }) => {

    return (
        <div style={{ position: 'relative' }}>
            {
                message?.text?.includes('.pdf') ?
                    <div style={{ display: 'flex' }}>
                        <img src={iconPDF} alt="pdf-icon" style={{ width: 80 }} />
                        <Typography style={{ fontSize: 14 }} >{message.text.split("/").pop()}</Typography>
                    </div>
                : 
                    <img style={{ width: 300, height: '100%', objectFit: 'cover' }} src={message.text} alt={message.text} />
            }
            <Time style={{ position: 'absolute', bottom: 0, right: 0 }}>
                <GetAppIcon 
                    onClick={(e) => downloadMedia(e, message.text)} 
                    fontSize='small' 
                    style={{ marginRight: 10, border: '1px solid grey', borderRadius: '50%' }} 
                />
                {formatDate(message.createdAt)}
            </Time>
        </div>
    )
}



const TextMessage = ({message})=>{
  return(
    <>
     <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
    </>
  )
}

export default Message
