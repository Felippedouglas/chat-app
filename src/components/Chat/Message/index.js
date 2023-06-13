import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { db } from "../../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../services/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { FaTrashAlt } from "react-icons/fa";
import firebase from "firebase/compat/app";
import { BsCheckAll, BsCheckLg } from "react-icons/bs";
import ConvertDate from "../../ConvertDate";

const Message = ({ user, message, chatId }) => {
  const [userLoggedIn] = useAuthState(auth);
  const [ showButtonOptions, setShowButtonOptions ] = useState();

  const deleteMessage = async () => {
    await updateDoc(doc(db, `/chats/${chatId}/messages/${message.id}`), {
      deleted: true,
      message: '',
      messageDeleted: message.message,
      dataDeleted: firebase.firestore.FieldValue.serverTimestamp(),
    })
  };

  useEffect(() => {
    const markAsRead = async () => {
      if (!message.visualized && !message.deleted && userLoggedIn?.email !== user) {
        await updateDoc(doc(db, `/chats/${chatId}/messages/${message.id}`), {
          visualized: true,
          dataVisualized: firebase.firestore.FieldValue.serverTimestamp(),
        })
      }
    };

    markAsRead();
  }, [message]);

  return (
    <C.Container>
      {message &&
        <C.Line className={userLoggedIn?.email === user ? "me" : ""}>
          <C.Content>
            {!message.deleted ? 
              <C.Message>{message?.message}</C.Message>
            :
              <C.MessageDeleted><FaTrashAlt></FaTrashAlt> <C.SpanMessageDeleted></C.SpanMessageDeleted>Mensagem excluida</C.MessageDeleted>
            }
            <C.MessageDate className={userLoggedIn?.email !== user ? "other" : ""}>
              <span>{(message.visualized && !message.deleted && userLoggedIn?.email === user) && <BsCheckAll title="Visualizada" className='checkVisualized visualized'></BsCheckAll>}{(!message.visualized && !message.deleted && userLoggedIn?.email === user) && <BsCheckLg title="Não visualizado" className="checkVisualized"></BsCheckLg>}</span>
              <span>
                {message.timestamp && <ConvertDate timestampLastLogin={(message?.timestamp / 1000)}/>}
              </span>
            </C.MessageDate>
          </C.Content>
        {(!message.deleted && userLoggedIn?.email === user) && <C.Options onClick={deleteMessage}><FaTrashAlt></FaTrashAlt></C.Options> }
        </C.Line>
      }
    </C.Container>
  );
};

export default Message;
