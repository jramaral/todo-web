import React from "react";
import * as S from "./styles";

import iconDefault from "../../assets/default.png";

export default function TaskCard() {
  return (
    <S.Container>
      <S.TopCard>
        <img src={iconDefault} alt="Icone" />
        <h3>Título da Tarefa</h3>
      </S.TopCard>
      <S.ButtomCard>
        <strong>01/01/2000</strong>
        <span>10:00</span>
      </S.ButtomCard>
    </S.Container>
  );
}
