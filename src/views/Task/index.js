import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import * as S from "./styles";

import api from "../../services/api";
import { format } from "date-fns";

//components
import Header from "../../components/Header";
import Footer from "./../../components/Footer";
import typeIcons from "./../../utils/typeIcons";

import iconClock from "../../assets/time.png";
import iconCalendar from "../../assets/calendart.png";

export default function Task({ match }) {
  const [lateCount, setLateCount] = useState();
  const [type, setType] = useState();
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [macaddress, setMacaddress] = useState("11:11:11:11:11:11");
  const [redirect, setRedirect] = useState(false);

  async function lateVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  useEffect(() => {
    lateVerify();
    LoadTaskDetails();
  }, []);

  async function LoadTaskDetails() {
    await api.get(`/task/${match.params.id}`).then((r) => {
      setType(r.data.type);
      setTitle(r.data.title);
      setDescription(r.data.description);
      setDate(format(new Date(r.data.when), "yyyy-MM-dd"));
      setHour(format(new Date(r.data.when), "HH:mm"));
      setDone(r.data.done);
    });
  }

  const Save = async () => {
    //validação dos dados
    if (!title) {
      return alert("você precisa informar o titulo");
    } else if (!description) {
      return alert("você precisa informar a descrição");
    } else if (!date) {
      return alert("você precisa informar a data");
    } else if (!hour) {
      return alert("você precisa informar a hora");
    }

    if (match.params.id) {
      await api
        .put(`/task/${match.params.id}`, {
          macaddress,
          type,
          title,
          description,
          when: `${date}T${hour}:00.000`,
          done,
        })
        .then(() => {
          setRedirect(true);
        });
    } else {
      await api
        .post("/task", {
          macaddress,
          type,
          title,
          description,
          when: `${date}T${hour}:00.000`,
          done,
        })
        .then(() => {
          setRedirect(true);
        });
    }
  };

  return (
    <S.Container>
      {redirect && <Redirect to="/" />}
      <Header lateCount={lateCount} parametro={match.params.id} />

      <S.Form>
        <S.TypeIcons>
          {typeIcons.map(
            (icon, index) =>
              index > 0 && (
                <button type="button" onClick={() => setType(index)}>
                  <img
                    src={icon}
                    alt="Tipo da Tarefa"
                    className={type && type !== index && "inative"}
                  />
                </button>
              )
          )}
        </S.TypeIcons>

        <S.Input>
          <span>Título</span>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Titulo da tarefa.."
          />
        </S.Input>

        <S.TextArea>
          <span>Descrição da Atividade</span>
          <textarea
            rows={5}
            placeholder="Detalhes da tarefa"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </S.TextArea>

        <S.Input>
          <span>Data</span>
          <img src={iconCalendar} alt="Calendário" />
          <input
            type="date"
            placeholder="Descrição"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </S.Input>
        <S.Input>
          <span>Hora</span>
          <img src={iconClock} alt="Relógio" />
          <input
            type="time"
            onChange={(e) => setHour(e.target.value)}
            value={hour}
          />
        </S.Input>

        <S.Options>
          <div>
            <input
              type="checkbox"
              checked={done}
              onChange={() => setDone(!done)}
            />
            <span>CONCLUIDO</span>
          </div>
          <button type="button">EXCLUIR</button>
        </S.Options>

        <S.Save>
          <button type="button" onClick={Save}>
            SALVAR
          </button>
        </S.Save>
      </S.Form>

      <Footer />
    </S.Container>
  );
}
