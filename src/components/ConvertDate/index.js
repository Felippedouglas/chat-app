import { useEffect } from "react";
import * as C from "./styles";

export default function ConvertDate({ timestampLastLogin, timestampMessage }) {

  useEffect(()=>{
    if (timestampMessage) {
      formatDataLastLogin();
    } else if (timestampLastLogin) {
      formatData();
    }
  }, [timestampLastLogin, timestampMessage])

  function formatData() {
      const currentDate = new Date();
      const timestampDate = new Date(timestampMessage * 1000);
      const difference = (currentDate - timestampDate) / 1000;
    
      if (difference < 60) {
        return `agora`;
      } else if (difference < 3600) {
        const minutes = Math.floor(difference / 60);
        return `${minutes} min`;
      } else if (difference < 86400) {
        const hours = Math.floor(difference / 3600);
        return `${hours} horas`;
      } else if (difference < 1209600) {
        const days = Math.floor(difference / 86400);
        return `${days} ${days > 1 ? 'dias' : 'dia'}`;
      } else {
        const day = timestampDate.getDate().toString().padStart(2, '0');
        const month = (timestampDate.getMonth() + 1).toString().padStart(2, '0');
        return `${day}/${month}`;
      }
  }

  function formatDataLastLogin() {
    const now = new Date();
    const lastLogin = new Date(timestampLastLogin * 1000);
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    if (now.toDateString() === lastLogin.toDateString()) {
      return `Hoje às ${lastLogin.toLocaleTimeString().substr(0, 5)}`;
    } else if (
      now.getDate() - lastLogin.getDate() === 1 &&
      now.getMonth() === lastLogin.getMonth() &&
      now.getFullYear() === lastLogin.getFullYear()
    ) {
      return `Ontem às ${lastLogin.toLocaleTimeString().substr(0, 5)}`;
    } else if (now.getTime() - lastLogin.getTime() > 1 * oneDayInMilliseconds && now.getTime() - lastLogin.getTime() <= 7 * oneDayInMilliseconds) {
      const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
      return `${diasDaSemana[lastLogin.getDay()]} às ${lastLogin.toLocaleTimeString().substr(0, 5)}`;
    } else if (now.getTime() - lastLogin.getTime() > 7 * oneDayInMilliseconds) {
      return `${lastLogin.toLocaleDateString()} às ${lastLogin.toLocaleTimeString().substr(0, 5)}`;
    } else {
      return lastLogin.toLocaleString();
    }

  }

  return (
      <>
        {timestampMessage && <C.Date>{formatData()}</C.Date>}
        {timestampLastLogin && <C.Date>{formatDataLastLogin()}</C.Date>}
      </>
  )
}