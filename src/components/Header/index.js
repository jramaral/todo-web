import React from "react";
import * as S from "./styles";
import logo from "../../assets/logo.png";
import bell from "../../assets/bell.png";

export default function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Log" />
      </S.LeftSide>
      <S.RightSide>
        <span className="dividir" />
        <a href="#">INICIO</a>
        <span className="dividir" />
        <a href="#">NOVA TAREFA</a>
        <span className="dividir" />
        <a href="#">SINCRONIZAR CELULAR</a>
        <span className="dividir" />
        <a href="#" id="notification">
          <img src={bell} alt="Notificação" />
          <span>5</span>
        </a>
      </S.RightSide>
    </S.Container>
  );
}
