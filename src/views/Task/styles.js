import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.div`
  width: 50%;
  margin-bottom: 60px;
`;

export const TypeIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .inative {
    opacity: 0.5;
  }

  button {
    border: none;
    background: none;
    outline: none;
  }

  img {
    width: 50px;
    height: 50px;
    margin: 10px;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
`;
export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  span {
    color: #707070;
    margin: 5px 0;
    font-weight: bold;
    font-size: 13px;
  }
  input {
    font-size: 16px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid #e5791b;
    outline: none;
  }
  input[type="time"]::-webkit-calendar-picker-indicator,
  input[type="date"]::-webkit-calendar-picker-indicator {
    position: relative;
    background-color: red;
    width: 75%;
    height: 30px;
    padding: 0;
    top: 5px;
    opacity: 0;
    cursor: pointer;
  }

  img {
    width: 20px;
    height: 20px;
    position: relative;
    left: 93.5%;
    top: 2vw;
  }
`;
export const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  span {
    color: #707070;
    margin: 5px 0;
    font-weight: bold;
    font-size: 13px;
  }

  textarea {
    font-size: 16px;
    border: 1px solid #e5791b;
    resize: none;
    outline: none;
    padding: 10px;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  button {
    font-weight: bold;
    color: #20295f;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 17px;

    &:hover {
      opacity: 0.5;
    }
  }
  div {
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: bold;
    color: #e5791b;
  }
  input[type="checkbox"] {
    width: 30px;
    height: 30px;
    color: #e5791b;
  }
`;

export const Save = styled.div`
  width: 100%;
  margin-top: 25px;

  button {
    width: 100%;
    height: 60px;
    background: #e5791b;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 20px;
    font-size: 17px;
    font-weight: bold;
    color: #fff;
    &:hover {
      opacity: 0.7;
    }
  }
`;
