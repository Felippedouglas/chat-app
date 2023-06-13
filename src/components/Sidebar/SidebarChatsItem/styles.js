import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 99%;
  background: unset;
  border: none;
  margin: 2px 2px 0 2px;
  padding: 15px;
  color: #ccc;
  cursor: pointer;
  
  &:hover {
    background-color: #181818;
  }
  
  &.active {
    background-color: #202020;
    color: #fff;
  }
  
  .alter-avatar {
    width: 40px;
    height: 40px;
    padding: 2px;
    background-color: #ccc;
    color: #000;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  min-width: fit-content;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`

export const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

export const HeaderBody = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Name = styled.span`
  font-size: 1rem;
  text-transform: capitalize;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  max-width: max-content;
  text-overflow: ellipsis;
`;

export const Date = styled.span`
  font-size: .75rem;
`

export const FooterBody = styled.section`
  display: flex;
  align-items: center;
  margin-top: 5px;
`
  
export const Details = styled.div`
  display: block;
  width: 100%;
  margin-top: 5px;
`

export const Visualized = styled.span`
  display: flex;
  align-items: center;
  margin-right: 2px;
  color: #ccc;
  
  .visualized {
    color: #1E90FF;
  }
`
export const NewMessage = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 20px;
  max-height: 20px;
  min-width: 20px;
  max-width: 20px;
  font-size: 1.5rem;
  background: #1E90FF;
  color: #fff;
  border-radius: 50%;
  margin-right: 5px;
  font-size: .7rem;
`

export const ContainerMessage = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Message = styled.p`
  color: #ccc;
  font-size: .9rem;
  max-width: 100%;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const MessageDeleted = styled.p`
  font-style: italic;
  font-size: .8rem;
  opacity: .8;
  max-width: 100%;
  margin-top: 5px;

  svg {
    font-size: .75rem;
  }
`;

export const SpanMessageDeleted = styled.span`
  flex-flow: wrap;
`;