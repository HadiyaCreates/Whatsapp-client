
import { Box, styled } from "@mui/material";
import React, { useEffect, useContext, useState, useRef } from "react";
import Footer from "./Footer";
import { AccountContext } from "../../context/AccountProvider";
import { getMessage, newMessage } from "../../../service/api";
import Message from "./Message";

const BgImage = styled(Box)`
  background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

const Messeges = ({ person, conversation }) => {
  const [messages, setMessages] = useState([]);
  const { account , socket, newMessageFlag,
        setNewMessageFlag } = useContext(AccountContext);
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [incomingMessage, setSetIncomegMessage] = useState(null)
  const scrollRef = useRef();

  useEffect(() => {
      socket.current.on("getMessage", data=>{
        setSetIncomegMessage({
          ...data,
          createdAt: Date.now()
        });
      })
      }, []);



  useEffect(() => {
    let interval;
    const getMessageDetails = async () => {
      if (conversation._id) {
        let data = await getMessage(conversation._id);
        setMessages(data);
      }
    };
    if (conversation._id) {
      getMessageDetails();
      interval = setInterval(getMessageDetails, 2000); // fetch every 2 seconds
    }
    return () => clearInterval(interval);
  }, [conversation._id]);

 useEffect(()=>{
  scrollRef.current?.scrollIntoView({transition:'smooth'});
 },[messages])

useEffect(() => {
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && setMessages((prev) => [...prev, incomingMessage ]);
  }, [incomingMessage, conversation]);



 

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      const isFileMessage = Boolean(image && image.fileUrl);

      const message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: isFileMessage ? "file" : "text",
        text: isFileMessage ? image.fileUrl : value,
      };
      socket.current.emit("sendMessage", message);
      await newMessage(message);

      setValue("");
      setFile(null);
      setImage(null);

      if (conversation._id) {
        let data = await getMessage(conversation._id);
        setMessages(data);
      }
    }
  };

  return (
    <BgImage>
      <Component>
        {Array.isArray(messages) && messages.length > 0 ? (
          messages.map((message) => (
            <Container key={message._id} ref={scrollRef}>
              <Message message={message} />
            </Container>
          ))
        ) : (
          <div style={{ textAlign: "center", color: "#888" }}>No messages yet</div>
        )}
      </Component>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </BgImage>
  );
};

export default Messeges;
