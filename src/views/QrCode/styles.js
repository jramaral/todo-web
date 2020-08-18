import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #e5791b;
  }

  p {
    color: #20295f;
  }
`;
export const QrCodeArea = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ValidationCode = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  span {
    padding: 10px;
  }
  input {
    height: 30px;
    font-size: 16px;
    padding: 3px;
    outline: none;
    border: solid 1px #e5791b;
    text-align: center;
  }
  button {
    height: 35px;
    margin-top: 10px;
    background: #e5791b;
    border: none;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    font-size: 17px;
    border-radius: 10px;
    outline: none;

    &:hover {
      background: #20295f;
    }
  }
`;
