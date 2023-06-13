import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: #efeae2;
  overflow-y: auto;
  background: #101010;

  &::-webkit-scrollbar{
    width: 7px;
  }

  &::-webkit-scrollbar-track{
    background-color: #101010;
  }

  &::-webkit-scrollbar-thumb{
    background-color: #606060;
  }

  &::-webkit-scrollbar-thumb:hover{
    background-color: #505050;
  }
`;