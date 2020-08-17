import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
  height: 90px;
  background: ${(props) => (props.actived ? "#e5791b" : "#20295f")};
  padding: 10px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  transition: all 0.3s ease;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    color: #fff;
    font-weight: bold;
    align-self: flex-end;
    font-size: 18px;
  }

  &:hover {
    background: #e5791b;

    opacity: 0.7;
  }
`;
