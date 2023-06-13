import React from "react";
import { Oval } from 'react-loading-icons'
import * as C from "./styles";

const Loading = ({ icon }) => {
  return (
    <C.Container>
      {icon &&
        <C.Logo>chat app</C.Logo>
      }
      <Oval stroke="#fff" fontSize={20} />
    </C.Container>
  );
};

export default Loading;
