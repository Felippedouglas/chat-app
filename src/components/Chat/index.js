import React, { useEffect } from "react";
import * as C from "./styles";
import Default from "./../Default";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const Chat = ({ userChat, setUserChat }) => {

  if (!userChat) return <Default />;

  return (
    <C.Container>
      <ChatHeader userChat={userChat} setUserChat={setUserChat} />
      <ChatBody chatId={userChat?.chatId} />
      <ChatFooter chatId={userChat?.chatId} />
    </C.Container>
  );
};

export default Chat;
