import { useEffect, useState } from "react"
import { db } from "../../../services/firebase";
import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";

export default function ChatUserInfo({ userEmail, setUserInfo, getUserInfo }) {

    const [ user, setUser ] = useState([]);
    
    useEffect(() => {
        const usersRef = collection(db, 'users');
        const querySnapshot = onSnapshot(query(usersRef, where('email', '==', userEmail)), (snapshot) => {
            if (snapshot.empty) {
                setUserInfo({});
              } else {
                snapshot.forEach((doc) => {
                  const userData = doc.data();
                  setUser(userData);
                  setUserInfo(userData);
                });
              }
        });
      
        return () => {
          // Remova o listener quando o componente for desmontado
          querySnapshot();
        };
      }, [userEmail]);
    return(
        <></>
    )
}