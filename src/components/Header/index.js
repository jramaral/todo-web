import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import logo from "../../assets/logo.png";
import bell from "../../assets/bell.png";

export default function Header({ lateCount, clickNotification }) {
  return (
    <S.Container>
      <S.LeftSide>
        <Link to="/">
          <img src={logo} alt="Todo Logo" />
        </Link>
      </S.LeftSide>
      <S.RightSide>
        <span className="dividir" />
        <Link to="/">INICIO</Link>
        <span className="dividir" />
        <Link to="/task">NOVA TAREFA</Link>
        <span className="dividir" />
        <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
        <span className="dividir" />
        <button onClick={clickNotification} id="notification">
          <img src={bell} alt="Notificação" />
          <span>{lateCount}</span>
        </button>
      </S.RightSide>
    </S.Container>
  );
}
