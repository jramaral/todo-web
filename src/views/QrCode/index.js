import React, { useState, useEffect } from "react";
import Qr from "qrcode.react";

import * as S from "./styles";
import api from "../../services/api";
//components
import Header from "../../components/Header";
import Footer from "./../../components/Footer";

export default function QrCode() {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <h1>CAPTURE O QRCODE PELO APP</h1>
        <p>suas atividade serão sincronizadas com a do celular</p>
        <S.QrCodeArea>
          <Qr value="getmacaddress" size={350} />
        </S.QrCodeArea>
        <S.ValidationCode>
          <span>Digite a numerção que apareceu no seu dispositivo</span>
          <input type="text" />
          <button type="button">SICRONIZAR</button>
        </S.ValidationCode>
      </S.Content>
      <Footer />
    </S.Container>
  );
}
