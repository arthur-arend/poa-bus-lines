import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import axios from "axios";

import Map from "../../components/Map";
import "./styles.scss";

function Detail() {
  const [route, setRoute] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        `http://www.poatransporte.com.br/php/facades/process.php?a=il&p=${id}`
      )
      .then((res) => {
        if (res.data) {
          const final = Object.entries(res.data);
          setRoute(final);
        } else {
          alert("Não encontramos linhas");
        }
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar a linha");
      });
  }, []);

  function handleBack() {
    history.goBack();
  }

  return (
    <div className="detail__container">
      {route ? <Map route={route} /> : null}
      <div className="info__container">
        <Button
          className="search-input__button"
          variant="contained"
          color="primary"
          onClick={() => handleBack()}
        >
          Voltar
        </Button>
      </div>
    </div>
  );
}

export default Detail;
