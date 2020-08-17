import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #20295f;
  border-bottom: solid 5px #e5791b;

  display: flex;
`;

export const LeftSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 10px;

  img {
    width: 110px;
    height: 35px;
  }
`;
export const RightSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      color: #e5791b;
      transform: scale(1.1);
    }
  }

  #notification {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    img {
      width: 25px;
      height: 25px;
    }
    span {
      background: #fff;
      color: #e5791b;
      padding: 3px 7px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 10px;
    }
    &:hover {
      opacity: 0.7;
    }
  }
  .dividir::after {
    content: "|";
    margin: 0 10px;
    color: #fff;
  }
`;
