import React, { useState, useEffect } from "react";
import Qr from "qrcode.react";

import * as S from "./styles";
import api from "../../services/api";
//components
import Header from "../../components/Header";
import Footer from "./../../components/Footer";
import { Redirect } from "react-router-dom";

export default function QrCode() {
  const [redirect, setRedirect] = useState(false);
  const [mac, setMac] = useState();

  async function saveMac() {
    if (!mac) {
      alert("Você precisa informar o numero que aparceu no seu dispositivo");
    } else {
      await localStorage.setItem("@todo/macaddress", mac);
      setRedirect(true);
      window.location.reload();
    }
  }

  return (
    <S.Container>
      {redirect && <Redirect to="/" />}
      <Header />
      <S.Content>
        <h1>CAPTURE O QRCODE PELO APP</h1>
        <p>suas atividade serão sincronizadas com a do celular</p>
        <S.QrCodeArea>
          <Qr value="getmacaddress" size={350} />
        </S.QrCodeArea>
        <S.ValidationCode>
          <span>Digite a numerção que apareceu no seu dispositivo</span>
          <input
            type="text"
            onChange={(e) => setMac(e.target.value)}
            defaultValue={mac}
          />
          <button type="button" onClick={saveMac}>
            SICRONIZAR
          </button>
        </S.ValidationCode>
      </S.Content>
      <Footer />
    </S.Container>
  );
}
