
import * as EmailValidator from "email-validator";
import { db } from "../../services/firebase";
import * as C from "./styles";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdSend } from "react-icons/md";
import firebase from "firebase/compat/app";

export default function NewChat( { setNewChat, user, chatsSnapshot } ) {

    const [ emailInput, setEmailInput ] = useState();
    const refEmailInput = useRef(null);
    
    const handleCreateChat = (e) => {

        e.preventDefault();

        if (!emailInput) return;

        if (!EmailValidator.validate(emailInput)) {
            return alert("E-mail inválido!");
        } else if (emailInput === user.email) {
            return alert("Insira um e-mail diferente do seu!");
        } else if (chatExists(emailInput)) {
            return alert("Chat já existe!");
        }

        db.collection("chats").add({
            users: [user.email, emailInput],
            updated: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(()=>{
            setEmailInput('')
        });
    };

    const chatExists = (emailChat) => {
        return !!chatsSnapshot?.docs.find(
        (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
        );
    };

    useEffect(() => {
        refEmailInput.current.focus();
      }, [refEmailInput]);

    return(
        <C.Container>
            <C.Back onClick={()=>setNewChat(false)}><IoIosArrowBack/></C.Back>
            <C.Form onSubmit={handleCreateChat}>
                <C.EmailInput ref={refEmailInput} placeholder="Insira um e-mail" value={emailInput} type="email" onChange={ (e) => setEmailInput(e.target.value) }/>
            </C.Form>
            <C.Send onClick={handleCreateChat}><MdSend /></C.Send>
        </C.Container>
    )
}