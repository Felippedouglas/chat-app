import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../services/firebase";
import * as C from "./styles";
import { useCollection } from "react-firebase-hooks/firestore";
import SidebarChatsItem from "../SidebarChatsItem";
import Loading from "../../Loading";
import { useEffect } from "react";
import firebase from "firebase/compat/app";

const SidebarChats = ({ setUserChat, userChat }) => {

  const [ chats, setChats ] = useState([]);

  const [user] = useAuthState(auth);
  
  const refChat = db.collection("chats").where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(refChat);

  useEffect(() => {
    if (chatsSnapshot) {
      const sortedChats = chatsSnapshot.docs.sort((a, b) => {
        const timestampA = a.data().updated;
        const timestampB = b.data().updated;
        return timestampA - timestampB;
      });
      setChats(sortedChats.reverse());
    }
  }, [chatsSnapshot]);

  return (
    <C.Container>

      {!chats && <Loading/>}
      {(chats && chats.length >= 1) && chats.map((item, index) => (
        <C.Content key={index}>
          <SidebarChatsItem
            id={item.id}
            users={item.data().users}
            user={user}
            setUserChat={setUserChat}
            active={userChat?.chatId === item.id ? "active" : ""}
            arquived={item.data().arquived}
            arquivedEmail={item.data().arquivedEmail}
            created={item.created}
          />
          <C.Divider />
        </C.Content>
      ))
    }
    </C.Container>
  );
};

export default SidebarChats;
