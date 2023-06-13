import styled from "styled-components";

export const Container = styled.div`
  height: 62px;
  bottom: 0;
  width: 100%;
  padding: 10px 20px;
  background-color: #202020;
  display: flex;
  box-shadow: 2px 1px 3px 1px #0003;

  svg {
    width: 25px;
    height: 25px;
    color: #54656f;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 12px 10px;
  outline: none;
  border: none;
  background: #353535;
  color: #fff;
  border-radius: 5px;
  width: 100%;
  box-shadow: inset 0 0 1px 1px #0003;

  &:hover {
    background: #383838;
  }

  &:focus {
    background: #404040;
  }

  &::placeholder {
    color: #ccc;
  }

  &:focus::placeholder {
    color: #fff;
  }
`;

export const Send = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  height: 35px;
  width: 35px;
  border-radius: 2px;
  transition: all .3s ease;

  &:hover {
    background: #353535;
  }

  &:hover svg {
    color: #fff;
  }
`