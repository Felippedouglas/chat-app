import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../services/firebase";
import * as C from "./styles";
import { MdPerson } from "react-icons/md";
import { BsCheckAll } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";
import ConvertDate from "../../ConvertDate";
import { FaTrashAlt } from "react-icons/fa";

const getUser = (users, userLogged) =>
  users?.filter((user) => user !== userLogged?.email)[0];

const SidebarChatsItem = ({ id, users, user, setUserChat, active, arquived, arquivedEmail }) => {
  const [getUserItem] = useCollection(
    db.collection("users").where("email", "==", getUser(users, user))
  );

  const Avatar = getUserItem?.docs?.[0]?.data();
  const email = getUser(users, user);

  const handleNewChat = () => {
    const userChat = {
      chatId: id,
      email: email,
      name: email.split("@")[0],
      photoURL: Avatar?.photoURL,
      lastLogin: getUserItem?.docs?.[0]?.data().lastLogin
    };

    setUserChat(userChat);
  };
  
const [message] = useCollection(
  db
    .collection("chats")
    .doc(id)
    .collection("messages")
    .orderBy("timestamp", "desc")
    .limit(1)
);

return (
    <>
      {((!arquived && arquivedEmail !== email) || (arquived && arquivedEmail !== email) ) &&
        <C.Container onClick={handleNewChat} className={active}>
          <C.Header>
            {Avatar ? <C.Avatar src={Avatar?.photoURL} loading="lazy" /> : <MdPerson className="alter-avatar" />}
          </C.Header>
          <C.Body>
            <C.HeaderBody>
              <C.Name>{(Avatar?.name.length > 15) ? `${(Avatar?.slice(0, 15))}...` : Avatar?.name.length < 15 ? Avatar?.name : email.split("@")[0].length > 15 ? `${(email.split("@")[0].slice(0, 15))}...` : (email.split("@")[0])}</C.Name>
              {message?.docs[0]?.data()?.timestamp &&
                <ConvertDate timestampMessage={message?.docs[0]?.data()?.timestamp?.seconds}/>
              }
            </C.HeaderBody>
            {(message?.docs[0]?.data()) &&
              <C.FooterBody>
                {(message?.docs[0]?.data().user === user.email && !message?.docs[0]?.data()?.deleted) &&
                  <>
                    {message?.docs[0]?.data()?.visualized ?
                      <C.Visualized><BsCheckAll className="visualized"></BsCheckAll></C.Visualized>
                      : <C.Visualized><BsCheckAll></BsCheckAll></C.Visualized>
                    }
                  </>
                }
                <C.ContainerMessage>
                  <C.Message>{message?.docs[0]?.data()?.deleted ? <C.MessageDeleted><FaTrashAlt></FaTrashAlt> <C.SpanMessageDeleted></C.SpanMessageDeleted>Mensagem Excluida</C.MessageDeleted> : message?.docs[0]?.data()?.message}</C.Message>
                  {((message?.docs[0]?.data().user !== user.email) && (!message?.docs[0]?.data()?.visualized)) &&
                    <C.NewMessage>1</C.NewMessage>
                  }
                </C.ContainerMessage>
              </C.FooterBody>
            }
          </C.Body>
        </C.Container>
      }
    </>
  );
};

export default SidebarChatsItem;
