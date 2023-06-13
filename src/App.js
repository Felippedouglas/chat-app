import React, { useEffect, useState } from "react";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import * as C from "./styles/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase";
import firebase from "firebase/compat/app";
import Login from "./components/Login";
import Loading from "./components/Loading";

const App = () => {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
        lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
        online: true
      })
    }
  }, [user]);

  useEffect(()=>{
    if (user) {
      window.addEventListener('unload', function() {
        
        const userId = user.uid;
        const userRef = firebase.firestore().collection('users').doc(userId);
      
        // Atualize a propriedade "online" para false
        userRef.update({
          lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
          online: false
        })
      });
    }
  }, [user])

  if (loading) return <Loading icon={true} />;
  if (!user) return <Login />;

  return (
    <C.Container>
      <Sidebar setUserChat={setUserChat} userChat={userChat} />
      <Chat userChat={userChat} setUserChat={setUserChat} />
    </C.Container>
  );
};

export default App;
