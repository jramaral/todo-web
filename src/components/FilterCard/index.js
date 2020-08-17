import React from "react";
import * as S from "./styles";
import filter from "../../assets/filter.png";

export default function FilterCard({ title, actived }) {
  return (
    <S.Container actived={actived}>
      <img src={filter} alt="Filtro" />
      <span>{title}</span>
    </S.Container>
  );
}
