import React, { useState } from "react";
import * as C from "./styles";
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { BiError } from "react-icons/bi";
import ChatUserInfo from "../ChatUserInfo";
import { FiClock } from "react-icons/fi";
import ConvertDate from "../../ConvertDate";

const ChatHeader = ({ userChat, setUserChat }) => {

  const [ userInfo, setUserInfo ] = useState([]);

  return (
    <C.Container>
      <ChatUserInfo userEmail={userChat.email} setUserInfo={setUserInfo}/>
      <C.UserInfo>
        <C.BackDefault onClick={()=>setUserChat()}><IoIosArrowBack></IoIosArrowBack></C.BackDefault>
        {userChat.photoURL ? <C.Avatar src={userChat.photoURL} alt="user" /> : <MdPerson />}
        <C.NameContent>
          <C.Name>{userInfo.name ? userInfo.name : userChat.name}</C.Name>
          {(userInfo && userInfo.lastLogin) ?
            <C.LastLogin>{!userInfo.online && <FiClock></FiClock>}{userInfo.online ? 'Online' : <ConvertDate timestampLastLogin={userInfo?.lastLogin?.seconds}/> }</C.LastLogin>
            : <C.LastLogin><BiError></BiError> Não cadastrado</C.LastLogin>
          }
        </C.NameContent>
      </C.UserInfo>
      <C.Options>
        <MdSearch />
        <MdMoreVert />
      </C.Options>
    </C.Container>
  );
};

export default ChatHeader;
