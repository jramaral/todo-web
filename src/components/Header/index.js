import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import logo from "../../assets/logo.png";
import bell from "../../assets/bell.png";

import api from "../../services/api";
export default function Header({ clickNotification, parametro }) {
  const [lateCount, setLateCount] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  useEffect(() => {
    lateVerify();
  }, []);

  console.log(parametro);
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

        {parametro === undefined && (
          <>
            {" "}
            <Link to="/task">NOVA TAREFA</Link> <span className="dividir" />
          </>
        )}

        <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
        <span className="dividir" />
        {lateCount > 0 && (
          <button onClick={clickNotification} id="notification">
            <img src={bell} alt="Notificação" />
            <span>{lateCount}</span>
          </button>
        )}
      </S.RightSide>
    </S.Container>
  );
}
