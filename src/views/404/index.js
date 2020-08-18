import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #20295f;
  border-bottom: solid 5px #e5791b;

  display: flex;
`;

const LeftSide = styled.div`
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

const Content = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
`;

export default function P404() {
  return (
    <>
      <Container>
        <LeftSide>
          <Link to="/">
            <img src={logo} alt="Todo Logo" />
          </Link>
        </LeftSide>
      </Container>
      <Content>
        <h1>404</h1>
      </Content>
    </>
  );
}
