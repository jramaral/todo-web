import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 200px;

  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  opacity: ${(props) => (props.done ? 0.5 : 1)};
  text-decoration: ${(props) =>
    props.done ? "line-through" : "text-decoration: none;"};

  &:hover {
    opacity: 0.5;
  }
`;

export const TopCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ButtomCard = styled.div`
  width: 230px;
  display: flex;

  justify-content: space-between;

  strong {
    color: #e5791b;
    font-weight: bold;
  }
  span {
    color: #707070;
  }
`;
