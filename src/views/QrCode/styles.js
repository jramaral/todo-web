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
  background: red;
  width: 50%;
  height: 350px;
`;
