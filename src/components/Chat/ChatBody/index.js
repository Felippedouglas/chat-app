import React, { useEffect, useRef } from "react";
import { db } from "../../../services/firebase";
import * as C from "./styles";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "../Message";
import Loading from "../../Loading";

const ChatBody = ({ chatId }) => {
  const [messagesRes] = useCollection(
    db
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  const refBody = useRef("");

  useEffect(() => {
    if (refBody.current.scrollHeight > refBody.current.offsetHeight) {
      refBody.current.scrollTop =
        refBody.current.scrollHeight - refBody.current.offsetHeight;
    }
  }, [messagesRes]);

  return (
    <C.Container ref={refBody}>
      {messagesRes?.docs.map((message) => (
        <Message
          chatId={chatId}
          key={message.id}
          user={message.data().user}
          message={{
            id: message.id,
            message: message.data().message,
            timestamp: message.data().timestamp?.toDate().getTime(),
            deleted: message.data().deleted,
            visualized: message.data().visualized
          }}
        />
      ))}
      {!messagesRes && <Loading/>}
    </C.Container>
  );
};

export default ChatBody;
