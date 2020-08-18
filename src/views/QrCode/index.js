import React, { useState, useEffect } from "react";

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
        <S.QrCodeArea></S.QrCodeArea>
        <p>suas atividade serão sincronizadas com a do celular</p>
      </S.Content>
      <Footer />
    </S.Container>
  );
}
