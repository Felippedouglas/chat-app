import styled from "styled-components";

export const Container = styled.div`
  width: 35%;
  min-width: 300px;
  max-width: 415px;
  border-right: 1px solid #505050;
  height: 100vh;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: #101010;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb:hover{
    background-color: #A69E94;
  }

  @media (max-width: 800px) {
    display: ${props => props.userChat ? 'none' : 'block'};
    width: 100%;
    max-width: unset;
  }

  @media (max-width: 300px) {
    min-width: 100%;
    max-width: 100%;
  }
`;
