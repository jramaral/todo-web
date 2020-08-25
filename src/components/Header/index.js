import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import logo from "../../assets/logo.png";
import bell from "../../assets/bell.png";

import api from "../../services/api";

import isConnected from "./../../utils/connected";

export default function Header({ clickNotification, parametro }) {
  const [lateCount, setLateCount] = useState();
  const [sincronizado, setSincronizado] = useState(false);
  const [tolink, setToLink] = useState("#");

  async function lateVerify() {
    await api.get(`/task/filter/late/${isConnected}`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  useEffect(() => {
    if (isConnected) {
      setSincronizado(true);
    }
    lateVerify();
  }, []);

  const Logout = async () => {
    await localStorage.removeItem("@todo/macaddress");
    window.location.reload();
  };

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

        {sincronizado ? (
          <button type="button" onClick={Logout}>
            SAIR
          </button>
        ) : (
          <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
        )}

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
