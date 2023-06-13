import React, { useState } from "react";
import * as C from "./styles";
import { MdSend } from "react-icons/md";
import { auth, db } from "../../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import { useEffect } from "react";
import { useRef } from "react";

const ChatFooter = ({ chatId }) => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");

  const refEmailInput = useRef(null);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (message) {
  
      db.collection("chats").doc(chatId).collection("messages").add({
        message: message,
        user: user.email,
        photoURL: user.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }).then(()=> {
        db.collection("chats").doc(chatId).update({
          updated: firebase.firestore.FieldValue.serverTimestamp(),
        })
      });
  
      setMessage("");
    }

  };

  
  useEffect(() => {
    refEmailInput?.current?.focus();
  }, [refEmailInput, chatId]);

  return (
    <C.Container>
      <C.Form onSubmit={handleSendMessage}>
        <C.Input
          ref={refEmailInput}
          placeholder="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        />
        <C.Send onClick={handleSendMessage}>
          <MdSend />
        </C.Send>
      </C.Form>
    </C.Container>
  );
};

export default ChatFooter;
