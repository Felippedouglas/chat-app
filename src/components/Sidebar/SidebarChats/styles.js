import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 70px);
  overflow-y: auto;

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

export const Content = styled.div``;

export const Divider = styled.div`
  margin: 0 10px;
  border-top: solid 1px #303030;
`;

export const NewChat = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 20px auto 0 auto;
`;

export const NewChatButton = styled.button`
  background: #1E90FF;
  color: #fff;
  border: 2px solid #1567B6;
  padding: 12px 20px;
  width: 80%;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    background: #1B82E5;
  }
`;
