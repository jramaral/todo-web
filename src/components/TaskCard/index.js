import React, { useMemo } from "react";
import * as S from "./styles";
import { format } from "date-fns";

import typeIcons from "./../../utils/typeIcons";

export default function TaskCard({ type, title, when }) {
  const date = useMemo(() => format(new Date(when), "dd/MM/yyyy"), [when]);
  const hour = useMemo(() => format(new Date(when), "HH:mm"), [when]);

  return (
    <S.Container>
      <S.TopCard>
        <img src={typeIcons[type]} alt="Icone" />
        <h3>{title}</h3>
      </S.TopCard>
      <S.ButtomCard>
        <strong>{date}</strong>
        <span>{hour}</span>
      </S.ButtomCard>
    </S.Container>
  );
}
