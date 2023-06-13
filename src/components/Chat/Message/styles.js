import styled from "styled-components";

export const Container = styled.div``;

export const Line = styled.div`
  margin: 10px;
  display: flex;

  &.me {
    > div {
      background-color: #1085F7;
      color: #fff;
    }
    justify-content: right;
  }
`;

export const Content = styled.div`
  background-color: #252525;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 1px #ccc;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  padding: 3px;
  max-width: 80%;
  min-height: min-content;

  .checkVisualized {
    font-size: 1.2rem;
    color: #bbb;
    margin-right: 5px;
  }

  .visualized {
    color: #fff;
  }
`;

export const Message = styled.span`
  font-size: 14px;
  max-width: 100%;
  flex-flow: wrap;
  font-weight: 600;
  margin: 5px 40px 5px 5px;
`;

export const MessageDeleted = styled.section`
  display: flex;
  align-items: center;
  font-style: italic;
  font-size: .9rem;
  opacity: .8;
  max-width: 100%;
  margin: 5px 30px 5px 5px;
`;

export const SpanMessageDeleted = styled.span`
  font-style: italic;
  max-width: 100%;
  flex-flow: wrap;
  margin-left: 5px;
`;

export const MessageDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  color: #fff;
  font-weight: 600;
  text-align: right;
  height: 15px;
  margin: 0 10px 5px 5px;

  &.other {
    color: #ccc;
  }
`;

export const Options = styled.button`
  font-size: 1rem;
  border-radius: 50%;
  color: #fff;
  background: #1085F7;
  border: none;
  height: 35px;
  width: 35px;
  margin: auto 5px;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    opacity: .7;
  }
`;
